import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { AppContext } from '../context/app-context'

import RegionInterface from '../components/region-interface'
import RegionHeading from '../components/region-heading'
import GlobalInterface from '../components/global-interface'

import previewGraphic from '../public/images/preview-graphic.jpg'

const Page = () => {
  return (
    <section className='flex flex-col gap-16'>
      <article className='flex flex-col gap-4'>
        <h1 className='heading-lg'>art</h1>
        <p className='mx-auto my-0 max-w-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
        </p>
      </article>

      <article className='flex flex-col gap-4 sm:gap-8 bg-depth-0 border-2 border-depth-2 p-4 sm:p-8'>
        <div className='flex flex-col gap-4 sm:gap-8'>
          <div className='flex flex-col gap-16 bg-depth-1 border-2 border-depth-2 p-4 sm:p-8'>
            <div className='flex flex-col gap-4'>
              <div>
                <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl normal-case tracking-normal font-sans'>
                  United States of America
                </h2>
                <small className='text-brand-gray-b'>
                  Settings here are saved to <code>us-east-1</code> and available to all countries except Europe.
                </small>
              </div>
              <RegionHeading flag='🇺🇸' regionId='USA' region='us-east-1 | (N. Virginia)' />
              <RegionInterface regionId='us' regionName='us-east-1' />
            </div>

            <div className='flex flex-col gap-8'>
              <RegionHeading flag='🇺🇸' regionId='USA' region='us-west-2 | (Oregon)' />
              <RegionInterface regionId='us' regionName='us-east-1' />
            </div>
          </div>

          <div className='flex flex-col gap-16 bg-depth-1 border-2 border-depth-2 p-4 sm:p-8'>
            <div className='flex flex-col gap-4'>
              <div>
                <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl normal-case tracking-normal font-sans'>
                  Europe
                </h2>
                <small className='text-brand-gray-b'>
                  Settings here are saved to <code>eu-central-1</code> and only available to countries in Europe.
                </small>
              </div>
              <RegionHeading flag='🇩🇪' regionId='Germany' region='eu-central-1 | (Frankfurt)' />
              <RegionInterface regionId='eu' regionName='eu-central-1' />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-16 p-4 sm:p-8'>
          <div className='flex flex-col gap-4'>
            <div>
              <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl normal-case tracking-normal font-sans'>
                Global
              </h2>
              <small className='text-brand-gray-b'>
                Settings here are saved to <code>us-east-1</code>, <code>us-west-2</code> and <code>eu-central-1</code>{' '}
                and are available to all countries.
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
        {({ session, globalIsDisabled }) => {
          return (
            <article className='relative mx-auto w-full max-w-5xl flex flex-col justify-center gap-4 sm:gap-8 border-2 border-brand-evening-hush/50 overflow-hidden'>
              <Image
                src={previewGraphic}
                alt='preview graphic'
                width={1020}
                height={306}
                className='absolute top-0 left-0 m-0 w-full h-auto object-fit object-cover'
              />

              {session ? (
                <div className=' flex flex-col gap-4 px-8 py-8 sm:py-16 w-full z-10'>
                  <div className='flex flex-col gap-3'>
                    <h2 className='m-0 p-0 text-brand-white text-lg sm:text-4xl normal-case text-center tracking-normal font-sans !capitalize'>
                      preview your art!
                    </h2>
                    <p className='text-center mx-auto max-w-xl'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper vitae. Proin neque
                      libero, pretium quis bibendum mattis, congue eu urna
                    </p>
                  </div>
                  <div className='flex justify-center'>
                    {globalIsDisabled ? (
                      <span className='px-4 py-2 border-2 border-brand-evening-hush text-brand-evening-hush capitalize cursor-not-allowed font-medium'>
                        open preview
                      </span>
                    ) : (
                      <Link
                        className='px-4 py-2 border-2 no-underline border-brand-pink text-brand-pink capitalize transition-color duration-300 hover:border-brand-white hover:text-brand-white'
                        href={`/preview/${session.user.id}`}
                        target='_blank'
                      >
                        open preview
                      </Link>
                    )}
                  </div>
                </div>
              ) : null}
              {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
            </article>
          )
        }}
      </AppContext.Consumer>

      <article className='flex flex-col gap-4'>
        <h2 className='heading-lg'>data</h2>
        <p className='mx-auto my-0 max-w-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
        </p>
      </article>

      <AppContext.Consumer>
        {({ values }) => {
          return (
            <article>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </article>
          )
        }}
      </AppContext.Consumer>
    </section>
  )
}

export default Page
