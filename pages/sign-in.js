import React from 'react'
import { signIn } from 'next-auth/react'

import GitHubLogo from '../components/github-logo'
import TwitterLogo from '../components/twitter-logo'

const Page = () => {
  return (
    <section>
      <h1 className='m-0 text-center text-6xl md:text-8xl text-brand-electric-purple'>sign in</h1>
      <div className='mx-auto max-w-lg'>
        <p className='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4 mx-auto max-w-sm'>
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
    </section>
  )
}

export default Page
