import React, { useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { AppContext } from '../context/app-context'

import SignInLink from '../components/sign-in-link'
import LocalInterface from '../components/local-interface'
import RegionHeading from '../components/region-heading'
import GlobalInterface from '../components/global-interface'
import CodeHighlight from '../components/code-highlight'
import OpenPreviewLink from '../components/open-preview-link'

import previewGraphic from '../public/images/preview-graphic.jpg'
import ErrorMessage from '../components/error-message'
import StepXofX from '../components/step-x-of-x'
import GetStartedWithCockroachDB from '../components/get-started-with-cockroachdb'

import store from '../store'

const Page = () => {
  const router = useRouter()
  const [agnostic] = store.useState('providerAgnostic')

  const usEast = agnostic ? 'US East' : 'us-east-1'
  const usEastFull = agnostic ? 'US East' : 'us-east-1 | (N. Virginia)'
  const usWest = agnostic ? 'US West' : 'us-west-2'
  const usWestFull = agnostic ? 'US West' : 'us-west-2 | (Oregon)'
  const euCentral = agnostic ? 'EU Central' : 'eu-central-1'
  const euCentralFull = agnostic ? 'EU Central' : 'eu-central-1 | (Frankfurt)'

  useEffect(() => {
    if (router.asPath) {
      router.replace('/app')
    }
  }, [])

  return (
    <section className='flex flex-col gap-24'>
      <article className='flex flex-col gap-4 text-center mx-auto max-w-3xl'>
        <h1 className='heading-lg'>Make your own art</h1>
        <div className='flex flex-col gap-4 mx-auto max-w-xl'>
          <div>
            <h2 className=' m-0 p-0 text-brand-white text-lg sm:text-3xl'>
              <StepXofX value={1} /> Sign in with GitHub or LinkedIn
            </h2>
            <p className='m-0 text-center'>
              Create artwork that will be physically stored in different CockroachDB nodes around the world.
            </p>
          </div>
          <div>
            <SignInLink />
          </div>
          <small className='block text-brand-gray-b text-center'>
            If you want to save your art to the Gallery, you must sign in before you start creating. If you don't want
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
                  This art will be written to <code suppressHydrationWarning>{usEast}</code> and replicated to{' '}
                  <code suppressHydrationWarning>{usWest}</code>.
                </strong>
                <small className='text-brand-gray-b'>
                  Only users outside of Europe will be able to view this artwork in the Gallery.
                </small>
              </div>
              <RegionHeading flag='🇺🇸' regionId='USA' region={usEastFull} agnostic suppressHydrationWarning />
              <LocalInterface regionId='us' regionName='us-east-1' />
            </div>

            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <strong>
                  This art will be written to <code suppressHydrationWarning>{usWest}</code> and replicated to{' '}
                  <code suppressHydrationWarning>{usEast}</code>.
                </strong>
                <small className='text-brand-gray-b'>
                  Only users outside of Europe will be able to view this artwork in the Gallery.
                </small>
                <RegionHeading flag='🇺🇸' regionId='USA' region={usWestFull} agnostic suppressHydrationWarning />
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
                  This art will be written to <code suppressHydrationWarning>{euCentral}</code>.
                </strong>
                <small className='text-brand-gray-b'>
                  Only users inside of Europe will be able to view this artwork in the Gallery.
                </small>
              </div>
              <RegionHeading flag='🇩🇪' regionId='Germany' region={euCentralFull} agnostic suppressHydrationWarning />
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
                Settings you apply here are written to <code suppressHydrationWarning>{usEast}</code>,{' '}
                <code suppressHydrationWarning>{usWest}</code>, and <code suppressHydrationWarning>{euCentral}</code>.
              </strong>
              <small className='text-brand-gray-b'>
                You will be able to view the settings no matter where you're located.
              </small>
            </div>
            <div className='flex flex-col lg:flex-row gap-0 lg:gap-4'>
              <RegionHeading flag='🇺🇸' regionId='USA' region={usEastFull} agnostic suppressHydrationWarning />
              <RegionHeading flag='🇺🇸' regionId='USA' region={usWestFull} agnostic suppressHydrationWarning />
              <RegionHeading flag='🇩🇪' regionId='Germany' region={euCentralFull} agnostic suppressHydrationWarning />
            </div>
            <GlobalInterface regionId='global' regionName='global' />
          </div>
        </div>
      </article>

      <AppContext.Consumer>
        {({ session, values, isError }) => {
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
                      <h2 className='m-0 p-0 text-brand-white text-xl sm:text-3xl normal-case text-center tracking-normal font-sans'>
                        <StepXofX value={5} />
                        Preview your art
                      </h2>
                      <p className='text-center mx-auto max-w-xl'>Open a large preview of your artwork.</p>
                    </div>
                    <div className='flex justify-center'>
                      <OpenPreviewLink
                        session={session}
                        disabled={values.us.url === 'a-placeholder.jpg' || values.eu.url === 'a-placeholder.jpg'}
                      />
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
              Your artwork will be stored as <code>JSON</code> in CockroachDB. This is what it looks like.
            </p>
            <p className='m-0'>
              To learn more about how data residency is set up in CockroachDB,{' '}
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
                    riddle_me_this: 'https://www.cockroachlabs.com/img/23-1-scavenger-32016.png'
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
