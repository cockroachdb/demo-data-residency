import React, { Fragment } from 'react'
import { Anton } from 'next/font/google'

import Header from '../components/header'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-anton'
})

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className={`prose max-w-7xl mx-auto px-4 pt-36  pb-16 sm:px-8 ${anton.variable} font-sans`}>
        {children}
      </main>
    </Fragment>
  )
}

export default Layout
