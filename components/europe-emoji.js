import React from 'react'
import PropTypes from 'prop-types'

const EuropeEmoji = ({ isEurope }) => {
  return (
    <span className='relative'>
      {isEurope ? null : (
        <span className='absolute top-[3px] left-[2px] text-brand-danger'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-7 h-7'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
            />
          </svg>
        </span>
      )}
      <span role='img' aria-label='Flag: European Union' className='text-3xl'>
        🇪🇺
      </span>
    </span>
  )
}

EuropeEmoji.defaultProps = {
  isEurope: true
}

EuropeEmoji.propTypes = {
  /** Determines if the flag is crossed out */
  isEurope: PropTypes.bool
}

export default EuropeEmoji
