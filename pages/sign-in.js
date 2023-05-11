import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'

import GitHubLogo from '../components/github-logo'
import LinkedInLogo from '../components/linkedin-logo'

const Page = () => {
  const { data: session } = useSession()
  const { push } = useRouter()

  useEffect(() => {
    if (session) {
      push('/app')
    }
  }, [session])

  return (
    <section className='flex flex-col gap-8 mx-auto max-w-3xl'>
      <div className='flex flex-col gap-2'>
        <h1 className='heading-lg'>Sign In</h1>
        <p className='m-0 text-center'>We will not save or share your email address.</p>
      </div>
      <div className='flex justify-center gap-4 mx-auto max-w-sm'>
        <button
          role='button'
          aria-label='Sign in with Twitter'
          className='flex gap-2 items-center justify-center text-brand-iridescent-blue text-center border-brand-iridescent-blue transition-color duration-300 hover:text-brand-white hover:border-brand-white'
          onClick={() => signIn('linkedin', { callbackUrl: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/app/` })}
        >
          <LinkedInLogo />
          LinkedIn
        </button>
        <button
          role='button'
          aria-label='Sign in with GitHub'
          className='flex gap-2 items-center justify-center text-brand-iridescent-blue border-brand-iridescent-blue transition-color duration-300 hover:text-brand-white hover:border-brand-white'
          onClick={() => signIn('github', { callbackUrl: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/app/` })}
        >
          <GitHubLogo />
          GitHub
        </button>
      </div>
    </section>
  )
}

export default Page
