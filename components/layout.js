import React, { Fragment } from 'react'

import Header from '../components/header'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="prose max-w-7xl mx-auto px-4 py-24 sm:px-8">{children}</main>
    </Fragment>
  )
}

export default Layout
