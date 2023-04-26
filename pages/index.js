import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import { YouTubeLite } from 'react-youtube-lite'

import SiloLockup from '../components/silo-lockup'
import NewsletterForm from '../components/newsletter-form'

import howItWorksDots from '../public/images/how-it-works-dots.svg'
import usDots from '../public/images/us-dots.svg'
import usGraphic from '../public/images/us-graphic.jpg'
import euDots from '../public/images/eu-dots.svg'
import euGraphic from '../public/images/eu-graphic.jpg'
import GetStartedLink from '../components/get-started-link'

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
              className='text-brand-iridescent-blue transition-color duration-300 hover:text-brand-white'
            >
              CockroachDB Serverless
            </a>{' '}
            demo.
          </p>
        </div>
      </section>

      <section className='flex flex-col gap-8'>
        <div className='flex flex-col gap-8'>
          <h2 className='heading-lg'>how</h2>
          <p className='m-0 text-center mx-auto max-w-lg'>
            CockroachDB provides powerful tools for working with geographically distributed data. In this demo, we are
            running a single database, harnessing two of CockroachDB's topology patterns; GLOBAL TABLES and REGIONAL
            TABLES to demonstrate the ease with which data can be pinned to geographical regions and groups of regions.
            <br />
            <br />
            Here’s a video walkthrough of how the app works, and how you can make your own art!
            <br />
            <br />
          </p>
        </div>
        <div className='relative flex items-center justify-center mx-auto w-full md:w-1/2'>
          <Image src={howItWorksDots} alt='how it works' width={500} height={500} className='m-0 mx-auto' />

          <div className='absolute mx-auto w-11/12 max-w-lg shadow-3xl border-2 border-brand-iridescent-blue'>
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

      <section className='grid md:grid-cols-2 gap-16 items-center mx-auto max-w-4xl'>
        <div className='flex flex-col gap-8'>
          <h2 className='md:text-left md:pl-0 heading-lg'>us</h2>
          <p className='m-0 text-center md:text-left'>
            Data for users outside of Europe will reside in the United States and never be replicated outside of it.
            Data will be replicated between CockroachDB nodes on the East and West coasts to provide resilience.
          </p>
          <GetStartedLink />
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
        <div className='flex flex-col gap-8 md:order-1'>
          <h2 className='md:text-right pl-8 sm:pl-0 mr-0 sm:!-mr-8 heading-lg'>eu</h2>
          <p className='m-0 text-center md:text-right'>
            Data for users within Europe will reside in Europe and never be replicated outside of it. Following Schrems
            II, if you have European-based users, the invalidation of Privacy Shield makes this especially important.
          </p>
          <GetStartedLink className='self-center md:self-end' />
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

      <section className='flex flex-col gap-36 xl:gap-24'>
        <div className='flex flex-col gap-8'>
          <h2 className='heading-lg'>global</h2>
          <div className='flex flex-col gap-8'>
            <p className='m-0 text-center mx-auto max-w-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, mi a consequat rutrum, ipsum massa
              lobortis velit, at pretium odio massa quis turpis. In dapibus elit ipsum, id mattis lorem congue.
            </p>
            <div className='flex justify-center'>
              <label class='relative inline-flex items-center mr-5 cursor-pointer'>
                <input type='checkbox' value={currentRegion} class='sr-only peer' onChange={handleToggle} />
                <div class="w-11 h-6 bg-brand-electric-purple rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-600  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-900 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-iridescent-blue"></div>
                <span class='ml-3 text-sm font-medium text-brand-white uppercase'>{currentRegion}</span>
              </label>
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='relative bg-brand-deep-purple mx-auto overflow-auto max-h-[300px] xl:max-h-max xl:overflow-visible border-2 border-depth-3 w-full max-w-4xl shadow-3xl z-10'>
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
                  const { key, user_id, image, data, region } = body
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
                      <td className={`align-middle table-blur-${isActive}`}>{region}</td>
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

        <div className='flex flex-col gap-8'>
          <p className='m-0 text-center'></p>
        </div>
      </section>
      <NewsletterForm formId={process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID} />
    </div>
  )
}

export default Page
