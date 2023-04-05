import React from 'react'
import { useSession } from 'next-auth/react'

const Page = () => {
  const { data: session } = useSession()
  return (
    <section>
      <h1 className="text-center text-8xl">art</h1>
      <h2 className="text-center text-8xl">data</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  )
}

export default Page
