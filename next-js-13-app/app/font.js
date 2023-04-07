import { Space_Grotesk as spaceGrotesk } from '@next/font/google'

export const font = spaceGrotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-grotesk'
})

// No estan funcionando los archivos por next/babel
