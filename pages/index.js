import React from 'react'

import CockroachLabsLogo from '../components/cockroach-labs-logo'

const Page = () => {
  return (
    <section className="flex flex-col gap-2 justify-items-center">
      <CockroachLabsLogo color="brand-white" className="w-[160px] mx-auto" />
      <h1 className="m-0 text-lg text-center">The Art of Data Residency and Application Architecture.</h1>
      <span className="block text-sm text-center">
        A{' '}
        <a className="font-bold" href="https://www.cockroachlabs.com/" target="_blank" rel="noopener">
          CockroachDB Serverless
        </a>{' '}
        demo.
      </span>
    </section>
  )
}

export default Page
