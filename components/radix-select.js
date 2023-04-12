import React from 'react'
import PropTypes from 'prop-types'
import * as Select from '@radix-ui/react-select'

const RadixSelect = ({ items, value, onChange }) => {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className='inline-flex items-center justify-between text-left px-4 gap-4 bg-brand-deep-purple border-brand-evening-hush text-brand-evening-hush hover:bg-depth-0'>
        <Select.Value aria-label={value.name}>
          <span className='block whitespace-nowrap overflow-hidden text-ellipsis w-64'>{value}</span>
        </Select.Value>
        <Select.Icon>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            fill='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Content position='popper' sideOffset={6} className='bg-depth-0 border-2 border-brand-evening-hush z-10'>
        <Select.ScrollUpButton>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            fill='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
          </svg>
        </Select.ScrollUpButton>
        <Select.Viewport>
          <Select.Group>
            <Select.Label className='p-2 bg-brand-deep-purple text-brand-neutral-400 text-xs'>Images</Select.Label>
            {items.map((item, index) => {
              const { location, s3_url } = item
              return (
                <Select.Item
                  key={index}
                  value={{
                    name: location,
                    url: s3_url
                  }}
                  className='p-2 whitespace-nowrap cursor-pointer bg-brand-deep-purple hover:bg-depth-0'
                >
                  {location}
                </Select.Item>
              )
            })}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  )
}

RadixSelect.propTypes = {
  /** Items to display in list  */
  items: PropTypes.any.isRequired,
  /** Current selected value */
  value: PropTypes.any.isRequired,
  /** onChange callback */
  onChange: PropTypes.func.isRequired
}

export default RadixSelect
