import React, { useState } from 'react'
import { useSession } from 'next-auth/react'

import CockroachLabsLogo from './cockroach-labs-logo'
import ActiveLink from './active-link'
import SignInLink from './sign-in-link'
import SignOutPortal from './sign-out-portal'
import SignOutButton from './sign-out-button'

const Header = () => {
  const { data: session } = useSession()

  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header
      className={`fixed w-full backdrop-blur z-50 ${
        isNavOpen ? 'md:bg-brand-deep-purple/60 bg-brand-deep-purple/90' : 'bg-brand-deep-purple/60'
      }`}
    >
      <div className='flex items-center justify-between max-w-9xl  h-[86px] mx-auto px-4 py-4 md:px-8'>
        <CockroachLabsLogo color='brand-white' className='w-[160px]' />
        <div
          className={`absolute md:relative w-full md:w-auto py-8 md:py-0 top-[72px] md:top-0 left-0 flex-col md:flex-row items-center grow gap-8 md:gap-0 bg-brand-deep-purple/95 border-b md:md:border-b-transparent md:bg-transparent ${
            isNavOpen ? 'border-b-brand-evening-hush/50 flex h-[calc(100vh-72px)] md:h-auto' : 'hidden md:flex'
          }`}
        >
          <nav className='flex grow-1 md:grow justify-center text-brand-iridescent-blue font-medium w-full md:w-auto'>
            <ul className='m-0 p-0 md:pr-[32px] flex flex-col md:flex-row gap-8 w-full md:w-auto'>
              <li className='text-center'>
                <ActiveLink href='/' onClick={() => setIsNavOpen(false)}>
                  Home
                </ActiveLink>
              </li>
              <li className='text-center'>
                <ActiveLink href='/app/' onClick={() => setIsNavOpen(false)}>
                  App
                </ActiveLink>
              </li>
              <li className='text-center'>
                <ActiveLink href='/gallery/' onClick={() => setIsNavOpen(false)}>
                  Gallery
                </ActiveLink>
              </li>
            </ul>
          </nav>
          <div className='flex md:hidden w-full px-4'>
            {session ? <SignOutButton /> : <SignInLink onClick={() => setIsNavOpen(!isNavOpen)} />}
          </div>
          <div className='hidden md:flex justify-end min-w-[115px]'>{session ? <SignOutPortal /> : <SignInLink />}</div>
        </div>
        <button
          role='button'
          className='block px-2 border-0 text-brand-iridescent-blue in-w-min transition-color duration-300 hover:text-brand-white md:hidden'
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6 '
            aria-label={`${isNavOpen ? 'Close menu' : 'Open menu'}`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d={`${isNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'}`}
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
