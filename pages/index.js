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
            <a className='font-bold' href='https://www.cockroachlabs.com/product/' target='_blank' rel='noopener'>
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
        <p className='m-0 text-center'>
          Read more about this app on the Cockroach Labs Blog.
          <br />
          <a
            className='text-brand-iridescent-blue'
            href='https://www.cockroachlabs.com/blog'
            target='_blank'
            rel='noopener'
          >
            The Art of Data Residency and Application Architecture
          </a>
        </p>
      </section>
      <NewsletterForm formId={process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID} />
    </div>
  )
}

export default Page
