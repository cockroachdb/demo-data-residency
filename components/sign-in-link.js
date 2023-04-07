import Link from 'next/link'
import React from 'react'

const SignInLink = () => {
  return (
    <Link
      href='/sign-in'
      className='px-4 py-2 border-2 text-brand-pink text-center border-brand-pink transition-color duration-300 hover:text-brand-white hover:border-brand-white'
    >
      Sign in
    </Link>
  )
}

export default SignInLink
