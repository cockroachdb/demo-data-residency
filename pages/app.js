import React from 'react'
import { useSession } from 'next-auth/react'

import { AppContext } from '../context/app-context'

import RegionInterface from '../components/region-interface'
import RegionHeading from '../components/region-heading'
import GlobalInterface from '../components/global-interface'

const Page = () => {
  const { data: session } = useSession()

  return (
    <section className='flex flex-col gap-16'>
      <article className='flex flex-col gap-4'>
        <h1 className='heading-lg'>art</h1>
        <p className='mx-auto my-0 max-w-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
        </p>
        {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id turpis venenatis
                </small>
              </div>
              <RegionHeading flag='🇺🇸' country='USA' region='us-east-1 | (N. Virginia)' />
              <RegionInterface country='us' />
            </div>

            <div className='flex flex-col gap-8'>
              <RegionHeading flag='🇺🇸' country='USA' region='us-west-2 | (Oregon)' />
              <RegionInterface country='us' />
            </div>
          </div>

          <div className='flex flex-col gap-16 bg-depth-1 border-2 border-depth-2  p-4 sm:p-8'>
            <div className='flex flex-col gap-4'>
              <div>
                <h2 className='m-0 p-0 text-brand-white text-lg sm:text-3xl normal-case tracking-normal font-sans'>
                  Europe
                </h2>
                <small className='text-brand-gray-b'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id turpis venenatis
                </small>
              </div>
              <RegionHeading flag='🇩🇪' country='Germany' region='eu-central-1 | (Frankfurt)' />
              <RegionInterface country='eu' />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id turpis venenatis
              </small>
            </div>
            <div className='flex flex-col lg:flex-row gap-0 lg:gap-4'>
              <RegionHeading flag='🇺🇸' country='USA' region='us-east-1 | (N. Virginia)' />
              <RegionHeading flag='🇺🇸' country='USA' region='us-west-2 | (Oregon)' />
              <RegionHeading flag='🇩🇪' country='Germany' region='eu-central-1 | (Frankfurt)' />
            </div>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-3'>
              <GlobalInterface />
              <div />
              <div />
            </div>
          </div>
        </div>
      </article>

      <article className='flex flex-col gap-4'>
        <div>
          <h2 className='heading-lg'>data</h2>
          <p className='mx-auto my-0 max-w-lg text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
          </p>
        </div>
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
