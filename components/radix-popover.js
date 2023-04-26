import React from 'react'
import * as Popover from '@radix-ui/react-popover'

const RadixPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className='flex items-center lg:self-end justify-center px-4 py-1 border-2 text-brand-hidden-sapphire min-w-[80px] min-h-[48px] text-center border-brand-hidden-sapphire transition-color duration-300 hover:text-brand-white hover:border-brand-white '>
          Save
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className='' side='bottom' sideOffset={20}>
          <div className='p-2 text-brand-warning text-xs border-2 border-brand-hidden-sapphire'>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 border-l-2 border-t-2 border-brand-hidden-sapphire bg-brand-deep-purple'></div>
            Sign in to save
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default RadixPopover
