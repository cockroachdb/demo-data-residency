import React from 'react'
import PropTypes from 'prop-types'

const LinkedInLogo = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={`${className}`}
      aria-label='LinkedIn Logo'
    >
      <path d='M18.66,18.66h-2.8v-4.39c0-1.05-.02-2.4-1.46-2.4s-1.68,1.14-1.68,2.32v4.47h-2.8V9.63h2.69v1.23h.04c.55-.94,1.57-1.5,2.66-1.46,2.84,0,3.37,1.87,3.37,4.3v4.96ZM6.75,8.4c-.9,0-1.63-.73-1.63-1.63s.73-1.63,1.63-1.63c.9,0,1.63,.73,1.63,1.63s-.73,1.63-1.63,1.63h0m1.4,10.27h-2.81V9.63h2.81v9.03ZM20.06,2.54H3.93c-.76,0-1.39,.6-1.4,1.36V20.1c0,.76,.63,1.37,1.4,1.37H20.06c.76,0,1.39-.6,1.4-1.37V3.9c-.01-.76-.64-1.37-1.4-1.36' />
    </svg>
  )
}

LinkedInLogo.defaultProps = {
  className: ''
}

LinkedInLogo.propTypes = {
  /** CSS classes to apply  */
  className: PropTypes.string
}

export default LinkedInLogo
