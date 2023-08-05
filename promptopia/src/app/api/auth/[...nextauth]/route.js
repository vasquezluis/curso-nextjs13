import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

import User from '@models/user'
import { connectToDatabase } from '@utils/database'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session ({ session }) {
      try {
      // serverless -> lambda -> database
        const sessionUser = await User.findOne({
          email: session.user.email
        })

        session.user.id = sessionUser._id.toString()

        return session
      } catch (error) {

      }
    },
    async signIn ({ profile }) {
      try {
        await connectToDatabase()

        // check if a user already exists
        const userExists = await User.findOne({ email: profile.email })
        // if not, create a new user
        // -> create a module
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.email.replace(' ', '').toLowerCase(),
            // username: profile.name.replace(/\s/g, '').toLowerCase(),
            image: profile.picture
          })

          console.log('username', profile.name.replace(/\s/g, '').toLowerCase())
        }

        return true
      } catch (error) {
        console.log('error checking if users exists', error.message)
        return false
      }
    }
  }
})

export { handler as GET, handler as POST }
