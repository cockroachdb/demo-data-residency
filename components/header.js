import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

import SiloLogo from './silo-logo'
import ActiveLink from './active-link'
import LoginButton from './login-button'
import GitHubLogo from './github-logo'

const Header = () => {
  const { data: session } = useSession()

  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header
      className={`fixed w-full backdrop-blur h-[86px] z-50 ${
        isNavOpen ? 'sm:bg-brand-deep-purple/60 bg-brand-deep-purple/90' : 'bg-brand-deep-purple/60'
      }`}
    >
      <div className='flex items-center justify-between max-w-7xl mx-auto px-4 py-4 sm:px-8'>
        <SiloLogo className='w-[110px]' />
        <div
          className={`absolute sm:relative w-full sm:w-auto py-8 sm:py-0 top-[72px] sm:top-0 left-0 flex-col sm:flex-row items-center grow gap-8 sm:gap-0 bg-brand-deep-purple/90 border-b sm:sm:border-b-transparent sm:bg-transparent ${
            isNavOpen ? 'border-b-brand-evening-hush/50 flex' : 'hidden sm:flex'
          }`}
        >
          <nav className='flex grow justify-center text-brand-iridescent-blue font-medium'>
            <ul className='m-0 p-0 flex flex-col sm:flex-row gap-8'>
              <li className='text-center'>
                <ActiveLink href='/' onClick={() => setIsNavOpen(false)}>
                  Home
                </ActiveLink>
              </li>
              <li className='text-center'>
                <ActiveLink href='/gallery/' onClick={() => setIsNavOpen(false)}>
                  Gallery
                </ActiveLink>
              </li>
              <li className='text-center'>
                <ActiveLink href='/app/' onClick={() => setIsNavOpen(false)}>
                  App
                </ActiveLink>
              </li>
            </ul>
          </nav>
          <div className='hidden sm:flex justify-end min-w-[115px]'>
            <LoginButton />
          </div>
          <div className='block sm:hidden'>
            {session ? (
              <button
                aria-label='Sign out'
                className='flex items-center justify-center text-brand-pink text-center border-brand-pink'
                onClick={() => signOut({ callbackUrl: process.env.NEXT_PUBLIC_ASSET_PREFIX })}
              >
                Sign out
              </button>
            ) : (
              <button
                aria-label='Sign in'
                className='flex gap-2 items-center text-brand-pink text-center border-brand-pink'
                onClick={() => signIn('github', { callbackUrl: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/app/` })}
              >
                <GitHubLogo />
                Sign in
              </button>
            )}
          </div>
        </div>
        <button
          role='button'
          className='block px-2 border-0 sm:hidden min-w-min'
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6 stroke-brand-iridescent-blue'
            aria-label='Open menu'
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
