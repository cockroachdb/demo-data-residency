import React from 'react'
import { useSession } from 'next-auth/react'

const Page = () => {
  const { data: session } = useSession()
  return (
    <section>
      <h1 className='m-0 text-center sm:text-8xl'>art</h1>
      <p className='mx-auto max-w-lg text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
      </p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <div className='flex flex-col gap-8 p-8 bg-depth-0'>
        <div className='flex flex-col gap-4'>
          <div className='bg-depth-1 p-4'>
            <p>US East 1</p>
            <p>US West 12</p>
          </div>
          <div className='bg-depth-1 p-4'>
            <p>Eu Central 1</p>
          </div>
        </div>
        Global
      </div>
      <h2 className='text-center text-4xl sm:text-8xl'>data</h2>
      <pre></pre>
    </section>
  )
}

export default Page
