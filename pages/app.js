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

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.asPath) {
      router.replace('/app')
    }
  }, [])

  return (
    <section className='flex flex-col gap-16'>
      <article className='flex flex-col gap-4 text-center'>
        <h1 className='heading-lg'>make your own art</h1>
        <div>
          <p className='my-0'>
            Create artwork that will be physically stored in different CockroachDB nodes around the world.
          </p>
          <small className='text-brand-gray-b'>
            Note: you must sign in <b>before</b> creating artwork if you want to save it to the gallery.
          </small>
        </div>
      </article>

      <article className='flex flex-col gap-4 sm:gap-8 bg-depth-0 border-2 border-depth-2 p-4 sm:p-8'>
        <div className='flex flex-col gap-4 sm:gap-8'>
          <div className='flex flex-col gap-16 bg-depth-1 border-2 border-depth-2 p-4 sm:p-8'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl normal-case tracking-normal font-sans'>
                  Create art to store in the United States
                </h2>
                <strong>
                  This art will be written to <code>us-east-1</code> and replicated to <code>us-west-2</code>.
                </strong>
                <small className='text-brand-gray-b'>
                  Anyone can view this art in the gallery, unless you're located in Europe. You must sign in and click
                  “save” to write the data to CockroachDB and view your art in the gallery.
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
                  Anyone can view this art in the gallery, unless you're located in Europe. You must sign in and click
                  “save” to write the data to CockroachDB and view your art in the gallery.
                </small>
                <RegionHeading flag='🇺🇸' regionId='USA' region='us-west-2 | (Oregon)' />
              </div>
              <LocalInterface regionId='us' regionName='us-east-1' />
            </div>
          </div>

          <div className='flex flex-col gap-16 bg-depth-1 border-2 border-depth-2 p-4 sm:p-8'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl normal-case tracking-normal font-sans'>
                  Create art to store in Europe
                </h2>
                <strong>
                  This art will be written to <code>eu-central-1</code>.
                </strong>
                <small className='text-brand-gray-b'>
                  You will only be able to view this art in the gallery if you're located in Europe. You must sign in
                  and click “save” to write the data to CockroachDB and view your art in the gallery.
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
              <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl normal-case tracking-normal font-sans'>
                Apply art settings globally
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
        {({ session }) => {
          return (
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
                    preview your art!
                  </h2>
                  <p className='text-center mx-auto max-w-xl'>Open a large preview of your local artwork.</p>
                </div>
                <div className='flex justify-center'>
                  <Fragment>
                    {session ? (
                      <Link
                        className='px-4 py-2 border-2 no-underline border-brand-pink text-brand-pink capitalize transition-color duration-300 hover:border-brand-white hover:text-brand-white'
                        href={`/preview/${session.user.id}`}
                      >
                        open preview
                      </Link>
                    ) : (
                      <span className='px-4 py-2 border-2 border-brand-evening-hush text-brand-evening-hush capitalize cursor-not-allowed font-medium'>
                        open preview
                      </span>
                    )}
                  </Fragment>
                </div>
              </div>
            </article>
          )
        }}
      </AppContext.Consumer>

      <article className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2 text-center'>
          <h2 className='heading-lg'>data</h2>
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
      </article>

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
    </section>
  )
}

export default Page
