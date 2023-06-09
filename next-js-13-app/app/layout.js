import '../styles/globals.css'
import Navigation from './components/Navigation'
import { font } from './font'

export const metadata = {
  title: 'First next.js',
  description: 'Generated by Next.js'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>My first app with Nextjs 13</title>
      </head>
      <body className={font.variable}>

        <Navigation />

        {/* Todo lo que se renderiza abajo de las rutas */}
        {children}
      </body>
    </html>
  )
}
