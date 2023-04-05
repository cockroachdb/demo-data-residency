import React from 'react'

import { useSession, signIn, signOut } from 'next-auth/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import GitHubLogo from './github-logo'

const LoginButton = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="flex border-none items-center justify-end gap-2 p-1 min-w-[115px]" aria-label="Sign out">
            <img
              alt={session.user.name}
              src={session.user.image}
              className="rounded-full border-2 border-brand-pink w-10 h-10"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 stroke-brand-pink"
              aria-label="Down chevron"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" aria-hidden />
            </svg>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            className="flex flex-col items-center bg-brand-deep-purple border-2 border-depth-2 shadow-lg px-4 py-6 w-52 mt-2 z-50"
          >
            <DropdownMenu.Item disabled>
              <span className="block text-center text-xs text-brand-white">Signed in as</span>
              <strong className="block text-center font-bold text-lg text-brand-white">{session.user.name}</strong>
            </DropdownMenu.Item>

            <DropdownMenu.Separator className="w-full h-px my-4 bg-depth-1" />

            <DropdownMenu.Item asChild>
              <button
                aria-label="Sign out"
                className="grow border-2 border-brand-pink text-brand-pink w-full"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    )
  }
  return (
    <button
      aria-label="Sign in"
      className="flex gap-2 items-center text-brand-pink border-brand-pink min-w-[115px]"
      onClick={() => signIn('github')}
    >
      <GitHubLogo />
      Sign in
    </button>
  )
}

export default LoginButton
