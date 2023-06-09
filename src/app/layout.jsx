import Header from './components/Header'
import './globals.css'
import Head from './head'
import Providers from './Providers'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>

      </body>
    </html>
  )
}
