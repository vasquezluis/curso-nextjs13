import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

// metadata
export const metadata = {
  title: 'Promptopia',
  description: 'Discover and shar AI prompts',
  keywords: 'prompt, ai, openai'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient2' />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
