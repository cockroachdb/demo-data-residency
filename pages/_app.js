import React from 'react'
import { SessionProvider } from 'next-auth/react'

import Layout from '../components/layout'

import '../styles/globals.css'

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session} basePath={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/api/auth`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default App
