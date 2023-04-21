import React from 'react'

import { AppContext } from '../context/app-context'

import RegionInterface from '../components/region-interface'
import RegionHeading from '../components/region-heading'
import GlobalInterface from '../components/global-interface'

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
          <div className='flex flex-col gap-16 bg-depth-1 border-2 border-depth-2  p-4 sm:p-8'>
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

          <div className='flex flex-col gap-16 bg-depth-1 border-2 border-depth-2  p-4 sm:p-8'>
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

      <article className='flex flex-col gap-4'>
        <h2 className='heading-lg'>data</h2>
        <p className='mx-auto my-0 max-w-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
        </p>
      </article>

      <article>
        <AppContext.Consumer>
          {({ values }) => {
            return <pre>{JSON.stringify(values, null, 2)}</pre>
          }}
        </AppContext.Consumer>
      </article>
    </section>
  )
}

export default Page
