import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

const TryDemoLink = ({ className }) => {
  return (
    <Link
      href='/app'
      className={`link-button flex gap-2 items-center border-2 border-brand-iridescent-blue text-brand-iridescent-blue  no-underline transition-color duration-300 hover:text-brand-white hover:border-brand-white ${className}`}
    >
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42'
        />
      </svg>
      Try the demo
    </Link>
  )
}

TryDemoLink.defaultProps = {
  className: 'self-center md:self-start'
}

TryDemoLink.propTypes = {
  /** Tailwind class names */
  className: PropTypes.string
}

export default TryDemoLink
