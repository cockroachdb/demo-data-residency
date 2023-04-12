import React, { Fragment } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Anton } from 'next/font/google'

import { AppProvider } from '../context/app-context'
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
      <AppProvider>
        <Layout>
          <main className={`prose max-w-9xl mx-auto px-4 pt-36  pb-16 sm:px-8 ${anton.variable}`}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </AppProvider>
    </SessionProvider>
  )
}

export default App
