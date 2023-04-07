import React from 'react'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <button
      role='button'
      aria-label='Sign out test'
      className='grow border-2 border-brand-pink text-brand-pink w-full transition-color duration-300 hover:text-brand-white hover:border-brand-white'
      onClick={() => signOut({ callbackUrl: process.env.NEXT_PUBLIC_ASSET_PREFIX })}
    >
      Sign out
    </button>
  )
}

export default SignOutButton
