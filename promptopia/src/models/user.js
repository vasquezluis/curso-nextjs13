import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    require: [true, 'Email is required!']
  },
  username: {
    type: String,
    require: [true, 'Username is required!']
    // match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'Username invalid, it should contain 8-20 alphanumeric letters and be unique!']
  },
  image: {
    type: String
  }
})

// check if a model exists, if not, create a new one
const User = models.User || model('User', userSchema)

export default User
