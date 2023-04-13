import React from 'react'
import PropTypes from 'prop-types'
import * as Select from '@radix-ui/react-select'

const RadixSelect = ({ trigger, sideOffset, alignOffset, value, onChange, children }) => {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      {trigger}
      <Select.Content
        position='popper'
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className='bg-depth-0 border-2 border-brand-evening-hush overscroll-auto h-[260px] z-30'
      >
        <Select.ScrollUpButton className='p-1 text-brand-pink hover:bg-depth-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            fill='currentColor'
            className='mx-auto w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
          </svg>
        </Select.ScrollUpButton>
        <Select.Viewport>{children}</Select.Viewport>
        <Select.ScrollDownButton className='p-1 text-brand-pink hover:bg-depth-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            fill='currentColor'
            className='mx-auto w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Root>
  )
}

RadixSelect.defaultProps = {
  alignOffset: 0,
  sideOffset: 6
}

RadixSelect.propTypes = {
  /** The select trigger */
  trigger: PropTypes.any.isRequired,
  /** top offset for the content */
  sideOffset: PropTypes.number,
  /** left offset for the content*/
  alignOffset: PropTypes.number,
  /** Current selected value */
  value: PropTypes.any.isRequired,
  /** The height for the overflow */
  height: PropTypes.number,
  /** onChange callback */
  onChange: PropTypes.func.isRequired
}

export default RadixSelect
