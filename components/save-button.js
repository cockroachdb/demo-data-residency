import React from 'react'
import PropTypes from 'prop-types'

const SaveButton = ({ onClick, disabled }) => {
  return (
    <button
      className='flex lg:self-end justify-center px-4 py-2 border-2 text-brand-pink text-center border-brand-pink transition-color duration-300 hover:text-brand-white hover:border-brand-white disabled:text-brand-hidden-sapphire disabled:border-brand-hidden-sapphire disabled:cursor-not-allowed'
      onClick={onClick}
      disabled={disabled}
    >
      Save
    </button>
  )
}

SaveButton.propTypes = {
  /** onClick callback  */
  onClick: PropTypes.func.isRequired,
  /** sets disabled attribute */
  disabled: PropTypes.bool.isRequired
}

export default SaveButton
