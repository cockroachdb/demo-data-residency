import React from 'react'
import Image from 'next/image'
import { YouTubeLite } from 'react-youtube-lite'

import CockroachLabsLogo from '../components/cockroach-labs-logo'
import SiloLockup from '../components/silo-lockup'
import NewsletterForm from '../components/newsletter-form'

import howItWorks from '../public/images/how-it-works.svg'

const Page = () => {
  return (
    <div className='flex flex-col gap-48'>
      <section className='flex flex-col gap-8 justify-items-center'>
        <SiloLockup className='max-w-4xl h-auto mx-auto' />
        <div className='mx-auto'>
          <CockroachLabsLogo color='brand-white' className='w-[160px]' />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='m-0 text-brand-white text-xl text-center normal-case tracking-normal font-sans'>
            The Art of Data Residency and Application Architecture.
          </h1>
          <p className='m-0 text-center'>
            A{' '}
            <a
              href='https://www.cockroachlabs.com/product/'
              target='_blank'
              rel='noopener'
              className='font-bold text-brand-iridescent-blue transition-color duration-300 hover:text-brand-white'
            >
              CockroachDB Serverless
            </a>{' '}
            demo.
          </p>
        </div>
      </section>
      <section>
        <div className='flex flex-col gap-2'>
          <h2 className='m-0 text-center text-6xl sm:text-8xl text-brand-electric-purple'>how</h2>
          <p className='m-0 text-center mx-auto max-w-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque magna sit amet ligula euismod
            iaculis
          </p>
        </div>
        <div className='relative flex items-center justify-center mx-auto w-full'>
          <Image src={howItWorks} alt='how it works' width={768} height={432} />
          <div className='absolute w-4/5 sm:w-3/5 max-w-lg shadow-3xl border-2 border-brand-iridescent-blue'>
            <YouTubeLite
              url={`https://www.youtube.com/watch?v=${process.env.NEXT_PUBLIC_YOUTUBE_ID}`}
              title='How Data Residency Works'
            />
          </div>
        </div>
        <div className='flex flex-col gap-8'>
          <p className='m-0 text-center'>
            Read more about this app on the Cockroach Labs Blog.
            <br />
            <a
              href='https://www.cockroachlabs.com/blog'
              target='_blank'
              rel='noopener'
              className='text-brand-iridescent-blue transition-color duration-300 hover:text-brand-white'
            >
              The Art of Data Residency and Application Architecture
            </a>
          </p>
          <a
            href='https://www.cockroachlabs.com/blog'
            target='_blank'
            rel='noopener'
            className='flex gap-2 items-center self-center px-4 py-2 border-2 border-brand-iridescent-blue text-brand-iridescent-blue capitalize no-underline transition-color duration-300 hover:text-brand-white hover:border-brand-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
              />
            </svg>
            read post
          </a>
        </div>
      </section>
      <NewsletterForm formId={process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID} />
    </div>
  )
}

export default Page
