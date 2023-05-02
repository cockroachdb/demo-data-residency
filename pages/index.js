import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { YouTubeLite } from 'react-youtube-lite'

import SiloLockup from '../components/silo-lockup'
import NewsletterForm from '../components/newsletter-form'

import howItWorksDots from '../public/images/how-it-works-dots.svg'
import usDots from '../public/images/us-dots.svg'
import usGraphic from '../public/images/us-graphic.jpg'
import euDots from '../public/images/eu-dots.svg'
import euGraphic from '../public/images/eu-graphic.jpg'
import TryDemoLink from '../components/try-demo-link'

import globalTable from '../public/global-table.json'

const Page = () => {
  const [currentRegion, setCurrentRegion] = useState('eu')

  const handleToggle = (event) => {
    const { value } = event.target
    setCurrentRegion(value === 'eu' ? 'us' : 'eu')
  }

  return (
    <div className='flex flex-col gap-24 sm:gap-48 mx-auto max-w-6xl'>
      <section className='flex flex-col gap-8 justify-items-center'>
        <SiloLockup className='max-w-4xl h-auto mx-auto' />
        <div className='flex flex-col gap-4 mx-auto max-w-4xl'>
          <h1 className='m-0 text-brand-white text-3xl md:text-5xl text-center normal-case font-sans md:leading-tight'>
            The Art of Data Residency and Application Architecture.
          </h1>
          <h2 className='m-0 text-brand-gray-b text-lg md:text-2xl font-normal text-center normal-case tracking-normal font-sans'>
            A demo of multi-region capabilities in CockroachDB.
          </h2>
        </div>
      </section>

      <section className='flex flex-col gap-16 mx-auto max-w-3xl'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <h2 className='heading-md'>why</h2>
          <div className='flex flex-col gap-4'>
            <p className='m-0'>
              When your application serves users across states, countries, or continents, you need to deploy your
              database in multiple cloud regions. But setting up and managing a multi-region database can be
              labor-intensive and expensive.
            </p>
            <p className='m-0'>
              In this demo, we illustrate CockroachDB's low-lift, developer-friendly tools for working with
              geographically distributed data. We are running a <b>single logical CockroachDB serverless instance</b>{' '}
              spanning three AWS regions (<code>us-east-1, us-west-1, and eu-central 1</code>). We show how data can
              easily be pinned to specific cloud regions to optimize latency, high availability, and comply with
              regional regulations.
            </p>
            <p className='m-0'>
              Here's a video walkthrough of how the app works, and how you can use it to{' '}
              <Link href='/app' className='text-brand-pink'>
                make your own art
              </Link>
              !
            </p>
          </div>
        </div>
        <div className='relative flex items-center justify-center w-full'>
          <div className='absolute mx-auto w-full max-w-3xl shadow-3xl border-2 border-brand-iridescent-blue'>
            <YouTubeLite
              url={`https://www.youtube.com/watch?v=${process.env.NEXT_PUBLIC_YOUTUBE_ID}`}
              title='How Data Residency Works'
            />
          </div>
          <Image src={howItWorksDots} alt='how it works' width={500} height={500} className='m-0 mx-auto' />
        </div>
      </section>

      <section className='flex flex-col gap-8 mx-auto max-w-3xl'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <h2 className='heading-md'>make your own art</h2>
          <div className='flex flex-col gap-8 text-center'>
            <p className='m-0'>
              We're demonstrating CockroachDB's data residency (<i>also called data domiciling</i>) by letting you
              create art that will reside in specific cloud regions. CockroachDB lets you control data residency down to
              the <b>row-level</b> in your tables, so you can control where data lives based on the requirements for
              individual rows.
            </p>

            <p className='m-0'>
              In this demo, some data is restricted either to the <b>United States</b> or <b>Europe</b>, while other
              data is available in both places.
            </p>

            <div className='mx-auto'>
              <TryDemoLink />
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-8 mx-auto max-w-3xl'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <h2 className='heading-md'>view the gallery</h2>
          <div className='flex flex-col gap-8 text-center'>
            <p className='m-0'>
              No matter where you're located, you can create art that resides in the <b>United States</b> and art that
              resides in <b>Europe</b>. That's because the app can write to any region from anywhere. But when you view
              the gallery, you'll only see art that resides in your current location. That's because the app can only
              read data from your closest region(s). Some data crosses all regions, so you'll always see it.
            </p>

            <div className='mx-auto'>
              <Link
                href='/gallery'
                className='flex gap-2 items-center px-4 py-2 border-2 border-brand-pink text-brand-pink capitalize no-underline transition-color duration-300 hover:text-brand-white hover:border-brand-white'
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
                    d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>
                view the gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-8 xl:gap-24 mx-auto max-w-4xl'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <h2 className='heading-md'>global data</h2>
          <div className='flex flex-col gap-8 text-center'>
            <p className='m-0 '>
              The artwork's pattern and logo settings are available globally. The data is replicated across all three
              regions in the CockroachDB cluster. This setting is useful for application data that's universally
              relevant.
            </p>
            <p className='m-0'>Use the toggle below to understand how the gallery data is represented in CockroachDB</p>
            <div className='flex justify-center'>
              <label className='relative inline-flex items-center mr-5 cursor-pointer'>
                <input type='checkbox' value={currentRegion} className='sr-only peer' onChange={handleToggle} />
                <div className="w-11 h-6 bg-brand-electric-purple rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-500  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-brand-white after:border-brand-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-iridescent-blue"></div>
                <span className='ml-3 text-sm font-medium text-brand-white uppercase'>{currentRegion}</span>
              </label>
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='relative bg-brand-deep-purple mx-auto overflow-auto xl:max-w-3xl w-full max-w-sm xs:w-full max-h-[450px] xl:max-h-max xl:overflow-visible border-2 border-depth-3 shadow-3xl z-10'>
            <table className='m-0 border-collapse'>
              <thead className='bg-depth-0 border-b-2 border-b-dashed border-b-depth-3'>
                <tr>
                  {globalTable.headings.map((heading, index) => {
                    return (
                      <th key={index} className='p-4 whitespace-nowrap'>
                        {heading}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {globalTable.body.map((body, index) => {
                  const { key, user_id, image, data, emoji, region } = body
                  const isActive = key === currentRegion || key === 'global' ? 'active' : 'inactive'

                  return (
                    <tr
                      key={index}
                      className={`odd:bg-depth-2 even:bg-depth-1 border-none text-center transition-all duration-300 table-scale-${isActive} ${region}`}
                    >
                      <td className={`align-middle table-blur-${isActive}`}>{user_id}</td>
                      <td className={`align-middle text-left table-blur-${isActive}`}>{image}</td>
                      <td className={`align-middle table-blur-${isActive}`}>
                        <div className='flex items-center gap-2'>
                          {data.colors ? (
                            <Fragment>
                              {data.colors.map((color, i) => {
                                return <span key={i}>{color}</span>
                              })}
                            </Fragment>
                          ) : null}
                          {data.positions ? (
                            <Fragment>
                              {data.positions.map((position, i) => {
                                return <span key={i}>{position}</span>
                              })}
                            </Fragment>
                          ) : null}
                        </div>
                      </td>
                      <td className={`flex items-center gap-1 whitespace-nowrap table-blur-${isActive}`}>
                        <span className='mt-1'>{emoji}</span>
                        <span>{region}</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='absolute w-full top-1/2 -translate-y-1/2 z-0'>
            <Image src={howItWorksDots} alt='how it works' width={500} height={500} className='m-0 mx-auto' />
          </div>
        </div>
      </section>

      <section className='grid md:grid-cols-2 gap-16 items-center mx-auto max-w-4xl'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <h2 className='md:text-left md:pl-0 heading-md'>united states data</h2>
          <div className='flex flex-col gap-8 text-center mx-auto max-w-4xl'>
            <p className='m-0 text-center md:text-left'>
              Certain images, colors, and shapes in the demo are restricted to the <b>United States</b> and will never
              be available outside of it. If you're located anywhere in the world except <b>Europe</b>, you will only be
              able to see <b>United States</b> data in the gallery. The data is replicated between CockroachDB instances
              on the East coast and West coast to provide high-availability and guard against regional outages
            </p>
            <TryDemoLink />
          </div>
        </div>
        <div className='relative flex items-center justify-center translate-x-0'>
          <Image src={usDots} alt='us data' width={500} height={500} />
          <Image
            src={usGraphic}
            alt='us interface'
            width={416}
            height={416}
            className='us-isomorphic absolute m-0 mx-auto w-11/12 sm:w-full max-w-lg shadow-3xl border-2 border-brand-iridescent-blue z-10'
          />
        </div>
      </section>

      <section className='grid md:grid-cols-2 gap-16 items-center mx-auto max-w-4xl'>
        <div className='flex flex-col md:order-1 gap-4 md:gap-8'>
          <h2 className='md:text-right heading-md'>european data</h2>
          <div className='flex flex-col gap-8 text-center mx-auto max-w-4xl'>
            <p className='m-0 text-center md:text-right'>
              Certain images, colors, and shapes in the demo are restricted to <b>Europe</b> and will never be available
              outside of it. If you're located in <b>Europe</b>, you will only be able to see European data. Given the
              stringent European data privacy regulations, this capability is especially important.
            </p>
            <TryDemoLink className='self-center md:self-end' />
          </div>
        </div>
        <div className='relative flex items-center justify-center translate-x-0'>
          <Image src={euDots} alt='us data' width={500} height={500} />
          <Image
            src={euGraphic}
            alt='eu interface'
            width={416}
            height={416}
            className='eu-isomorphic absolute m-0 mx-auto w-11/12 sm:w-full max-w-lg shadow-3xl border-2 border-brand-iridescent-blue z-10'
          />
        </div>
      </section>

      <section className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <h2 className='heading-md'>learn how it works</h2>
          <div className='flex flex-col gap-8 text-center mx-auto max-w-2xl'>
            <p className='m-0 '>We've written an in-depth blog post about how the demo works. Check it out!</p>
            <div className='mx-auto'>
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
          </div>
        </div>
      </section>

      <NewsletterForm formId={process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID} />
    </div>
  )
}

export default Page
