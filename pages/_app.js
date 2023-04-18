import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

const queryClient = new QueryClient()

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session} basePath={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/api/auth`}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Layout>
            <main className={`prose max-w-9xl mx-auto px-4 pt-36  pb-16 sm:px-8 ${anton.variable}`}>
              <Component {...pageProps} />
            </main>
          </Layout>
        </AppProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default App
