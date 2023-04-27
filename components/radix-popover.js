import React from 'react'
import * as Popover from '@radix-ui/react-popover'

const RadixPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className='flex items-center justify-center px-4 py-1 border-2 text-brand-hidden-sapphire w-full sm:w-auto min-w-[80px] min-h-[48px] text-center border-brand-hidden-sapphire transition-color duration-300 hover:text-brand-white hover:border-brand-white '>
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
