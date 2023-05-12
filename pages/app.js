import React, { useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { AppContext } from '../context/app-context'

import LocalInterface from '../components/local-interface'
import RegionHeading from '../components/region-heading'
import GlobalInterface from '../components/global-interface'
import CodeHighlight from '../components/code-highlight'

import previewGraphic from '../public/images/preview-graphic.jpg'
import ErrorMessage from '../components/error-message'
import StepXofX from '../components/step-x-of-x'
import GetStartedWithCockroachDB from '../components/get-started-with-cockroachdb'

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.asPath) {
      router.replace('/app')
    }
  }, [])

  return (
    <section className='flex flex-col gap-24'>
      <article className='flex flex-col gap-4 text-center mx-auto max-w-3xl'>
        <h1 className='heading-lg'>Make Your Own Art</h1>
        <div className='mx-auto max-w-xl'>
          <h2 className=' m-0 p-0 text-brand-white text-lg sm:text-3xl'>
            <StepXofX value={1} /> Sign in with GitHub or LinkedIn
          </h2>
          <p className='mt-0 text-center'>
            Create artwork that will be physically stored in different CockroachDB nodes around the world.
          </p>
          <small className='block text-brand-gray-b text-center'>
            If you want to save your art to the gallery, you must sign in before you start creating. If you don't want
            to save your art, you can still interact with the application.
          </small>
        </div>
      </article>

      <article className='flex flex-col gap-4 sm:gap-8 border-2 border-depth-2 p-4 sm:p-8'>
        <div className='flex flex-col gap-4 sm:gap-8'>
          <div className='flex flex-col gap-16 border-2 border-depth-2 p-4 sm:p-8'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl'>
                  <StepXofX value={2} /> Create art to store in the United States
                </h2>
                <strong>
                  This art will be written to <code>us-east-1</code> and replicated to <code>us-west-2</code>.
                </strong>
                <small className='text-brand-gray-b'>
                  Only users outside of Europe will be able to view this artwork in the gallery.
                </small>
              </div>
              <RegionHeading flag='🇺🇸' regionId='USA' region='us-east-1 | (N. Virginia)' />
              <LocalInterface regionId='us' regionName='us-east-1' />
            </div>

            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <strong>
                  This art will be written to <code>us-west-2</code> and replicated to <code> us-east-1</code>.
                </strong>
                <small className='text-brand-gray-b'>
                  Only users outside of Europe will be able to view this artwork in the gallery.
                </small>
                <RegionHeading flag='🇺🇸' regionId='USA' region='us-west-2 | (Oregon)' />
              </div>
              <LocalInterface regionId='us' regionName='us-east-1' />
            </div>
          </div>

          <div className='flex flex-col gap-16 border-2 border-depth-2 p-4 sm:p-8'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl font-sans'>
                  <StepXofX value={3} /> Create art to store in Europe
                </h2>
                <strong>
                  This art will be written to <code>eu-central-1</code>.
                </strong>
                <small className='text-brand-gray-b'>
                  Only users inside of Europe will be able to view this artwork in the gallery.
                </small>
              </div>
              <RegionHeading flag='🇩🇪' regionId='Germany' region='eu-central-1 | (Frankfurt)' />
              <LocalInterface regionId='eu' regionName='eu-central-1' />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-16 p-4 sm:p-8'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl font-sans'>
                <StepXofX value={4} /> Apply art settings globally
              </h2>
              <strong>
                Settings you apply here are written to <code>us-east-1</code>, <code>us-west-2</code> and{' '}
                <code>eu-central-1</code>.
              </strong>
              <small className='text-brand-gray-b'>
                You will be able to view the settings no matter where you're located.
              </small>
            </div>
            <div className='flex flex-col lg:flex-row gap-0 lg:gap-4'>
              <RegionHeading flag='🇺🇸' regionId='USA' region='us-east-1 | (N. Virginia)' />
              <RegionHeading flag='🇺🇸' regionId='USA' region='us-west-2 | (Oregon)' />
              <RegionHeading flag='🇩🇪' regionId='Germany' region='eu-central-1 | (Frankfurt)' />
            </div>
            <GlobalInterface regionId='global' regionName='global' />
          </div>
        </div>
      </article>

      <AppContext.Consumer>
        {({ session, isError }) => {
          return (
            <Fragment>
              {isError ? (
                <ErrorMessage />
              ) : (
                <article className='relative mx-auto w-full max-w-5xl flex flex-col justify-center gap-4 sm:gap-8 border-2 border-brand-evening-hush/50 overflow-hidden'>
                  <Image
                    src={previewGraphic}
                    alt='preview graphic'
                    width={1020}
                    height={306}
                    className='absolute top-0 left-0 m-0 w-full h-full object-fit object-cover'
                  />

                  <div className=' flex flex-col gap-4 px-8 py-8 sm:py-16 w-full z-10'>
                    <div className='flex flex-col gap-2'>
                      <h2 className='m-0 p-0 text-brand-white text-xl sm:text-3xl normal-case text-center tracking-normal font-sans !capitalize'>
                        <StepXofX value={5} />
                        preview your art!
                      </h2>
                      <p className='text-center mx-auto max-w-xl'>Open a large preview of your local artwork.</p>
                    </div>
                    <div className='flex justify-center'>
                      <Fragment>
                        {session ? (
                          <Link
                            className='link-button flex gap-2 items-center border-2 no-underline border-brand-pink text-brand-pink capitalize transition-color duration-300 hover:border-brand-white hover:text-brand-white'
                            href={`/preview/${session.user.id}`}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                              />
                            </svg>
                            open preview
                          </Link>
                        ) : (
                          <span className='flex gap-2 items-center  px-4 py-2 border-2 border-brand-evening-hush text-brand-evening-hush capitalize cursor-not-allowed font-medium'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                              />
                            </svg>
                            open preview
                          </span>
                        )}
                      </Fragment>
                    </div>
                  </div>
                </article>
              )}
            </Fragment>
          )
        }}
      </AppContext.Consumer>

      <article className='flex flex-col gap-16 mx-auto w-full max-w-5xl'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='heading-lg'>Data</h2>
            <p className='m-0'>
              Your creations will be stored as <code>JSON</code> in CockroachDB. This is what it looks like.
            </p>
            <p className='m-0'>
              To learn more about how data locality is set up in CockroachDB,{' '}
              <a
                href='https://www.cockroachlabs.com/docs/stable/multiregion-overview.html'
                rel='noopener'
                target='_blank'
                className='text-brand-iridescent-blue'
              >
                check out the docs
              </a>
              .
            </p>
          </div>
        </div>
        <AppContext.Consumer>
          {({ values }) => {
            return (
              <CodeHighlight
                codeBlock={JSON.stringify(
                  {
                    ...values,
                    solve_this_clue: 'https://www.cockroachlabs.com/'
                  },
                  null,
                  2
                )}
              />
            )
          }}
        </AppContext.Consumer>
      </article>

      <GetStartedWithCockroachDB />
    </section>
  )
}

export default Page
