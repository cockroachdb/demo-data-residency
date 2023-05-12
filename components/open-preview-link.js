import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const OpenPreviewLink = ({ session, disabled }) => {
  const childElements = () => {
    return (
      <Fragment>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
          />
        </svg>
        Open Preview
      </Fragment>
    )
  }

  if (!session || disabled) {
    return (
      <span className='link-button flex gap-2 items-center border-2 border-brand-evening-hush text-brand-evening-hush cursor-not-allowed select-none font-medium'>
        {childElements()}
      </span>
    )
  }

  return (
    <Link
      className='link-button flex gap-2 items-center border-2 no-underline border-brand-pink text-brand-pink transition-color duration-300 hover:border-brand-white hover:text-brand-white'
      href={`/preview/${session.user.id}`}
    >
      {childElements()}
    </Link>
  )
}

OpenPreviewLink.propTypes = {
  /** The session object */
  session: PropTypes.any,
  /** sets disabled attribute */
  disabled: PropTypes.bool
}

export default OpenPreviewLink
