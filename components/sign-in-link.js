import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

const SignInLink = ({ onClick }) => {
  return (
    <Link
      href='/sign-in'
      className='px-4 py-2 border-2 text-brand-pink text-center border-brand-pink transition-color duration-300 hover:text-brand-white hover:border-brand-white w-full'
      onClick={onClick}
    >
      Sign in
    </Link>
  )
}

SignInLink.propTypes = {
  /** onClick callback  */
  onClick: PropTypes.func
}

export default SignInLink
