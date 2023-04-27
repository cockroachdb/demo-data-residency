import React from 'react'
import PropTypes from 'prop-types'
import LoadingSpinner from './loading-spinner'

const SaveButton = ({ onClick, regionId, regionName, isLoading, disabled }) => {
  return (
    <button
      className='flex items-center justify-center px-4 py-1 border-2 text-brand-pink text-center border-brand-pink w-full sm:w-auto min-w-[80px] min-h-[48px] transition-color duration-300 enabled:hover:text-brand-white enabled:hover:border-brand-white disabled:text-brand-hidden-sapphire disabled:border-brand-hidden-sapphire disabled:cursor-not-allowed'
      onClick={() => onClick.mutate({ regionId, regionName })}
      disabled={disabled}
    >
      {isLoading ? <LoadingSpinner className='h-full items-center' color='fill-brand-pink' /> : 'Save'}
    </button>
  )
}

SaveButton.propTypes = {
  /** onClick callback  */
  onClick: PropTypes.any.isRequired,
  /**  context id  */
  regionId: PropTypes.string.isRequired,
  /** name to use in UPSERT */
  regionName: PropTypes.string.isRequired,
  /** sets disabled attribute */
  disabled: PropTypes.bool.isRequired
}

export default SaveButton
