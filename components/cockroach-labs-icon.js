import React from 'react'
import PropTypes from 'prop-types'

const CockroachLabsIcon = ({ className, background }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 24 24'
      aria-label='Cockroach Labs Icon'
      className={className}
    >
      <linearGradient id='logo-gradient' gradientUnits='userSpaceOnUse' x1='0' y1='12' x2='19.2675' y2='12'>
        <stop
          offset='0.3'
          className='[--start-color:theme(colors.brand.electric-purple)]'
          stopColor='var(--start-color)'
        />
        <stop offset='1' className='[--end-color:theme(colors.brand.bright-turquoise)]' stopColor='var(--end-color)' />
      </linearGradient>
      <circle cx='12' cy='12' r='12' className={background} />
      <path
        fill='url(#logo-gradient)'
        d='M16.22,5.27c-1.56,0-3.01,0.45-4.23,1.23c-1.22-0.78-2.67-1.23-4.23-1.23
          c-0.54,0-1.06,0.05-1.57,0.16L6.39,6.2c0.45-0.09,0.9-0.13,1.38-0.13c1.28,0,2.49,0.34,3.52,0.94c-1.79,1.44-2.93,3.64-2.93,6.1
          s1.14,4.67,2.93,6.1c0.23,0.18,0.46,0.35,0.71,0.51c0.25-0.16,0.48-0.32,0.71-0.51c1.79-1.44,2.93-3.64,2.93-6.1
          s-1.14-4.67-2.93-6.1c1.04-0.6,2.24-0.94,3.52-0.94c0.47,0,0.94,0.05,1.39,0.14l0.19-0.78C17.29,5.32,16.76,5.27,16.22,5.27z
           M11.6,14.32v4.12C7.91,15.03,9.48,11,9.48,11c0.35,0.65,1.24,1.56,1.24,1.56C11.73,13.36,11.6,14.32,11.6,14.32z M12.38,18.44
          v-4.12c0,0-0.13-0.96,0.88-1.76c0,0,0.89-0.92,1.24-1.56C14.5,11,16.08,15.03,12.38,18.44z M12,12.6L12,12.6
          C12,12.61,12,12.61,12,12.6C11.99,12.61,11.99,12.61,12,12.6L12,12.6c-0.47-0.46-3.83-2.36-0.01-5.13V7.46c0,0,0,0,0.01,0.01
          c0,0,0,0,0.01-0.01v0.01C15.82,10.25,12.46,12.15,12,12.6z'
      />
    </svg>
  )
}

CockroachLabsIcon.defaultProps = {
  background: 'fill-depth-0'
}

CockroachLabsIcon.propTypes = {
  /** Tailwind class names */
  className: PropTypes.string,
  /** The background color of the circle */
  background: PropTypes.string
}

export default CockroachLabsIcon
