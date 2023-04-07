import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { Anton } from 'next/font/google'

import Layout from '../components/layout'

import '../styles/globals.css'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-anton'
})

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session} basePath={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/api/auth`}>
      <Layout>
        <main className={`prose max-w-7xl mx-auto px-4 pt-36  pb-16 sm:px-8 ${anton.variable}`}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </SessionProvider>
  )
}

export default App
