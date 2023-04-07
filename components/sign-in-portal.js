import React from 'react'
import { signIn } from 'next-auth/react'

import * as Dialog from '@radix-ui/react-dialog'

import GitHubLogo from './github-logo'
import TwitterLogo from './twitter-logo'

const SignInPortal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          role='button'
          aria-label='Sign in'
          className='flex gap-2 items-center text-brand-pink text-center border-brand-pink transition-color duration-300 hover:text-brand-white hover:border-brand-white'
        >
          Sign in
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-brand-deep-purple/90 data-[state=open]:animate-overlayShow fixed inset-0 z-30' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] bg-brand-deep-purple border-2 border-depth-2 p-2 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-50'>
          <div className='flex justify-end'>
            <Dialog.Close asChild>
              <button
                role='button'
                className='px-2 border-0 min-w-min text-brand-pink transition-color duration-300 hover:text-brand-white'
                aria-label='Close menu'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                  aria-label='Close menu'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </Dialog.Close>
          </div>
          <div className='flex flex-col gap-8 text-brand-white px-8 pb-8'>
            <div className='flex flex-col gap-2'>
              <Dialog.Title
                className='text-2xl sm:text-5xl font-bold text-center text-brand-pink uppercase tracking-[0.6em] pl-[0.6em]'
                style={{
                  fontFamily: 'anton'
                }}
              >
                Sign in
              </Dialog.Title>
              <Dialog.Description className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue commodo metus.
              </Dialog.Description>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <button
                  role='button'
                  aria-label='Sign in with Twitter'
                  className='flex gap-2 grow items-center justify-center text-brand-pink text-center border-brand-pink transition-color duration-300 hover:text-brand-white hover:border-brand-white'
                  onClick={() => signIn('twitter', { callbackUrl: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/app/` })}
                >
                  <TwitterLogo />
                  Twitter
                </button>
                <button
                  role='button'
                  aria-label='Sign in with GitHub'
                  className='flex gap-2 grow items-center justify-center text-brand-pink border-brand-pink transition-color duration-300 hover:text-brand-white hover:border-brand-white'
                  onClick={() => signIn('github', { callbackUrl: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/app/` })}
                >
                  <GitHubLogo />
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SignInPortal
