import React from 'react'

const GetStartedWithCockroachDB = () => {
  const list = ['No credit card required.', 'Free up to 5 GB storage.', 'Single-click deployment.']

  return (
    <section className='border-2 border-depth-2 grid gap-8 p-8 md:p-16 w-full mx-auto max-w-5xl'>
      <div className='flex flex-col gap-4 justify-center mx-auto'>
        <h2 className='flex flex-col lg:flex-row lg:gap-2 heading-md text-transparent bg-clip-text bg-gradient-to-r from-brand-electric-purple to-brand-iridescent-blue'>
          <span className='text-transparent'>Get Started With</span>
          <span className='text-transparent'>CockroachDB Today</span>
        </h2>
        <ul className='mx-auto m-0 p-0 space-y-2 lg:columns-3'>
          {list.map((item, index) => {
            return (
              <li key={index} className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='w-6 h-6 mt-0.5 mr-1.5 text-brand-iridescent-blue flex-shrink-0'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                    clipRule='evenodd'
                  />
                </svg>

                {item}
              </li>
            )
          })}
        </ul>
      </div>

      <div className='mx-auto'>
        <a
          href='      https://cockroachlabs.cloud/signup'
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
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
            />
          </svg>
          sign up
        </a>
      </div>
    </section>
  )
}

export default GetStartedWithCockroachDB
