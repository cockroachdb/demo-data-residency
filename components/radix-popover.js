import React from 'react'
import * as Popover from '@radix-ui/react-popover'

const RadixPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className='link-button gap-2 flex items-center justify-center border-2 text-brand-hidden-sapphire w-full sm:w-auto min-w-[80px] text-center border-brand-hidden-sapphire transition-color duration-300 hover:text-brand-white hover:border-brand-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z'
            />
          </svg>
          Save
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className='shadow' side='bottom' sideOffset={20}>
          <div className='p-2 text-brand-white text-xs bg-brand-pink'>Sign in to save</div>
          <Popover.Arrow className='fill-brand-pink' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default RadixPopover
