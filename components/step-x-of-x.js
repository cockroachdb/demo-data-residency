import React from 'react'
import PropTypes from 'prop-types'

const StepXofX = ({ value }) => {
  return (
    <div className='text-sm font-normal'>
      Step{' '}
      <span className='inline-flex justify-center items-center bg-brand-pink text-brand-white rounded-full w-5 h-5 font-bold text-center'>
        {value}
      </span>{' '}
      <span className='lowercase'>of</span> <span className='text-brand-pink font-bold'>5</span>
    </div>
  )
}

StepXofX.propTypes = {
  /** The step number   */
  value: PropTypes.number
}

export default StepXofX
