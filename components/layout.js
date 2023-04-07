import React, { Fragment } from 'react'

import Header from '../components/header'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <footer></footer>
    </Fragment>
  )
}

export default Layout
