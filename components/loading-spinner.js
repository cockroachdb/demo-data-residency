import React from 'react'
import PropTypes from 'prop-types'

const LoadingSpinner = ({ className, color }) => {
  return (
    <div className={`flex text-brand-${color} ${className}`} role='status'>
      <svg
        aria-hidden='true'
        aria-label='Loading spinner...'
        className='not-prose flex animate-spin w-5 h-5'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='transparent' />
            <stop offset='50%' stopColor='transparent' />
            <stop
              offset='50%'
              className='[--start-color:theme(colors.brand.deep-purple)]'
              stopColor='var(--start-color)'
            />
            <stop
              offset='100%'
              className='[--start-color:theme(colors.brand.deep-purple)]'
              stopColor='var(--start-color)'
            />
          </linearGradient>
        </defs>
        <circle fill='transparent' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth={1.5} />
        <circle fill='transparent' cx='12' cy='12' r='10' stroke='url(#linear)' strokeWidth={1.5} />
      </svg>
    </div>
  )
}

LoadingSpinner.defaultProps = {
  className: '',
  color: 'iridescent-blue'
}

LoadingSpinner.propTypes = {
  /** The color of the spinner */
  color: PropTypes.string,
  /** The class names to apply */
  className: PropTypes.string
}

export default LoadingSpinner
