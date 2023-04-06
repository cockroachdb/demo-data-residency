import React from 'react'
import PropTypes from 'prop-types'

const CockroachLabsIcon = ({ className }) => {
  return (
    <a href='https://www.cockroachlabs.com/' target='_blank' rel='noopener'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 20 24'
        aria-label='Cockroach Labs Icon'
        className={className}
      >
        <linearGradient id='logo-gradient' gradientUnits='userSpaceOnUse' x1='0' y1='12' x2='19.2675' y2='12'>
          <stop
            offset='0.3'
            className='[--start-color:theme(colors.brand.electric-purple)]'
            stopColor='var(--start-color)'
          />
          <stop
            offset='1'
            className='[--end-color:theme(colors.brand.bright-turquoise)]'
            stopColor='var(--end-color)'
          />
        </linearGradient>
        <path
          fill='url(#logo-gradient)'
          d='M16.65,0c-2.59,0-5,0.75-7.03,2.04C7.6,0.75,5.19,0,2.6,0C1.71,0,0.84,0.09,0,0.26l0.31,1.29
          C1.05,1.4,1.82,1.33,2.6,1.33c2.13,0,4.13,0.57,5.85,1.56C5.48,5.27,3.58,8.92,3.58,13.02s1.9,7.75,4.87,10.14
          c0.37,0.3,0.77,0.58,1.17,0.84c0.41-0.26,0.8-0.54,1.17-0.84c2.97-2.39,4.87-6.04,4.87-10.14s-1.9-7.75-4.87-10.14
          c1.72-0.99,3.72-1.56,5.85-1.56c0.79,0,1.56,0.08,2.3,0.23l0.31-1.29C18.42,0.09,17.55,0,16.65,0z M8.97,15.04v6.84
          C2.84,16.21,5.45,9.51,5.45,9.51c0.58,1.08,2.06,2.6,2.06,2.6C9.18,13.43,8.97,15.04,8.97,15.04z M10.27,21.88v-6.84
          c0,0-0.21-1.6,1.46-2.92c0,0,1.47-1.52,2.06-2.6C13.79,9.51,16.41,16.21,10.27,21.88z M9.63,12.18v0.01
          C9.63,12.19,9.63,12.19,9.63,12.18c-0.01,0.01-0.01,0.01-0.01,0.01v-0.01c-0.76-0.76-6.35-3.91-0.01-8.53V3.64
          c0,0,0.01,0.01,0.01,0.01c0,0,0.01-0.01,0.01-0.01v0.02C15.98,8.27,10.39,11.42,9.63,12.18z'
        />
      </svg>
    </a>
  )
}

CockroachLabsIcon.propTypes = {
  /** Tailwind class names */
  className: PropTypes.string
}

export default CockroachLabsIcon
