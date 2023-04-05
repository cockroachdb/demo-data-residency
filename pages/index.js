import React from 'react'

import CockroachLabsLogo from '../components/cockroach-labs-logo'
import SiloLockup from '../components/silo-lockup'

const Page = () => {
  return (
    <section className="flex flex-col gap-8 justify-items-center">
      <SiloLockup className="max-w-[800px] h-auto mx-auto" />
      <CockroachLabsLogo color="brand-white" className="w-[160px] mx-auto" />
      <div className="flex flex-col gap-2">
        <h1 className="m-0 text-brand-white text-xl text-center normal-case tracking-normal font-sans">
          The Art of Data Residency and Application Architecture.
        </h1>
        <span className="block text-sm text-center">
          A{' '}
          <a className="font-bold" href="https://www.cockroachlabs.com/" target="_blank" rel="noopener">
            CockroachDB Serverless
          </a>{' '}
          demo.
        </span>
      </div>
    </section>
  )
}

export default Page
