import React, { useState } from 'react'
import { useSession } from 'next-auth/react'

import WorkArea from '../components/work-area'
import RegionHeading from '../components/region-heading'
import { AppContext } from '../context/app-context'

const Page = () => {
  const { data: session } = useSession()

  return (
    <section className='flex flex-col gap-16'>
      <article>
        <h1 className='heading-lg'>art</h1>
        <p className='mx-auto max-w-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
        </p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </article>

      <article className='flex flex-col gap-4 sm:gap-8 bg-depth-0 border-2 border-depth-2 p-4 sm:p-8'>
        <div className='flex flex-col gap-4 sm:gap-8'>
          <div className='flex flex-col gap-16 bg-depth-1 border-2 border-depth-2  p-4 sm:p-8'>
            <div className='flex flex-col gap-4'>
              <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl normal-case tracking-normal font-sans'>
                United States of America
              </h2>
              <RegionHeading flag='🇺🇸' country='USA' region='us-east-1 | (N. Virginia)' />
              <WorkArea country='us' />
            </div>

            <div className='flex flex-col gap-8'>
              <RegionHeading flag='🇺🇸' country='USA' region='us-west-2 | (Oregon)' />
              <WorkArea country='us' />
            </div>
          </div>

          <div className='flex flex-col gap-16 bg-depth-1 border-2 border-depth-2  p-4 sm:p-8'>
            <div className='flex flex-col gap-4'>
              <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl normal-case tracking-normal font-sans'>
                Europe
              </h2>
              <RegionHeading flag='🇩🇪' country='Germany' region='eu-central-1 | (Frankfurt)' />
              <WorkArea country='eu' />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-16 bg-depth-1 border-2 border-depth-2  p-4 sm:p-8'>
          <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl normal-case tracking-normal font-sans'>Global</h2>
          <div className='flex flex-col lg:flex-row gap-0 lg:gap-4'>
            <RegionHeading flag='🇺🇸' country='USA' region='us-east-1 | (N. Virginia)' />
            <RegionHeading flag='🇺🇸' country='USA' region='us-west-2 | (Oregon)' />
            <RegionHeading flag='🇩🇪' country='Germany' region='eu-central-1 | (Frankfurt)' />
          </div>
        </div>
      </article>

      <article>
        <h2 className='heading-lg'>data</h2>
        <div className='flex flex-col gap-4 sm:gap-8 bg-depth-0 border-2 border-depth-2 p-4 sm:p-8'>
          <AppContext.Consumer>
            {({ values }) => {
              return <pre>{JSON.stringify(values, null, 2)}</pre>
            }}
          </AppContext.Consumer>
        </div>
      </article>
    </section>
  )
}

export default Page
