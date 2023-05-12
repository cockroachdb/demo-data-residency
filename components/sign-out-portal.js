import React from 'react'
import { useSession } from 'next-auth/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import SignOutButton from './sign-out-button'

const SignOutPortal = () => {
  const { data: session } = useSession()
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='p-1 border-0'>
        <span
          role='button'
          className='flex border-none items-center justify-end gap-2 p-0 transition-color duration-300 hover:text-brand-white hover:border-brand-white group'
          aria-label='Sign out'
        >
          <img
            alt={session.user.name}
            src={session.user.image}
            className='rounded-full border-2 border-brand-pink w-10 h-10 transition-color duration-300 group-hover:text-brand-white group-hover:border-brand-white'
          />

          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-4 h-4 stroke-brand-pink transition-color duration-300 group-hover:stroke-brand-white'
            aria-label='Down chevron'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' aria-hidden />
          </svg>
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align='end'
          className='hidden md:flex flex-col items-center bg-brand-deep-purple border-2 border-depth-2 shadow-lg px-4 py-6 w-52 mt-2 z-50'
        >
          <DropdownMenu.Item disabled>
            <span className='block text-center text-xs text-brand-white'>{`Signed in with ${session.user.provider}`}</span>
            <strong className='block text-center font-bold text-lg text-brand-white'>{session.user.name}</strong>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className='w-full h-px my-4 bg-depth-1' />

          <DropdownMenu.Item asChild>
            <SignOutButton />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default SignOutPortal
