import React from 'react'
import PropTypes from 'prop-types'

const TwitterLogo = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={`w-5 h-5 ${className}`}
      aria-label='GitHub Logo'
    >
      <path d='M20.49,7.64c.01,.19,.01,.38,.01,.57,0,5.79-4.41,12.47-12.47,12.47h0c-2.38,0-4.71-.68-6.72-1.97,.35,.04,.69,.06,1.04,.06,1.97,0,3.89-.66,5.44-1.88-1.87-.04-3.52-1.26-4.09-3.04,.66,.13,1.33,.1,1.98-.08-2.04-.41-3.51-2.21-3.51-4.29v-.06c.61,.34,1.29,.53,1.99,.55-1.93-1.29-2.52-3.85-1.36-5.85,2.22,2.74,5.51,4.4,9.03,4.58-.35-1.52,.13-3.12,1.27-4.19,1.76-1.66,4.54-1.57,6.2,.19,.98-.19,1.92-.55,2.78-1.06-.33,1.01-1.01,1.88-1.93,2.42,.87-.1,1.72-.33,2.52-.69-.59,.88-1.33,1.65-2.19,2.27Z' />
    </svg>
  )
}

TwitterLogo.defaultProps = {
  className: ''
}

TwitterLogo.propTypes = {
  /** CSS classes to apply  */
  className: PropTypes.string
}

export default TwitterLogo
