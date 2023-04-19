import React from 'react'
import { useSession } from 'next-auth/react'

const Page = () => {
  const { data: session } = useSession()

  return (
    <section className='flex flex-col gap-16'>
      <div className='flex flex-col gap-2'>
        <h1 className='heading-lg'>admin</h1>
        <p className='mx-auto max-w-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
        </p>
      </div>
      {session?.user.admin ? <pre>{JSON.stringify(session, null, 2)}</pre> : null}
    </section>
  )
}

export default Page
