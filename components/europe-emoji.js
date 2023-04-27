import React from 'react'
import PropTypes from 'prop-types'

const EuropeEmoji = ({ isEurope }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-12 h-12'
    >
      <text width='20' height='20' style={{ transform: 'translate(4px, 18px)' }}>
        🇪🇺
      </text>

      {isEurope ? null : (
        <g>
          <path
            d='M17.66,6.34c-3.12-3.12-8.19-3.12-11.31,0l11.31,11.31c3.12-3.12,3.12-8.19,0-11.31Z'
            fill='none'
            className='stroke-brand-danger'
            stroke-miterlimit='10'
          />
          <path
            d='M6.34,6.34c-3.12,3.12-3.12,8.19,0,11.31s8.19,3.12,11.31,0L6.34,6.34Z'
            fill='none'
            className='stroke-brand-danger'
            stroke-miterlimit='10'
          />
        </g>
      )}
    </svg>
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
