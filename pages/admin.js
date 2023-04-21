import React from 'react'
import { useSession } from 'next-auth/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const Page = () => {
  const { data: session } = useSession()

  const query = useQuery({
    queryKey: ['admin-read-all'],
    queryFn: async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/api/admin-read-all/`, {
          method: 'GET'
        })

        const json = await response.json()

        if (!response.ok) {
          throw new Error('Bad response')
        }

        return json.data.rows
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <section className='flex flex-col gap-16 mx-auto max-w-6xl'>
      <div className='flex flex-col gap-2'>
        <h1 className='heading-lg'>admin</h1>
        <p className='mx-auto max-w-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
        </p>
      </div>
      {session?.user.admin ? (
        <div>
          {query.status === 'loading' ? (
            <div>Loading</div>
          ) : (
            <div>
              <table className='relative w-full m-0'>
                <thead className='text-primary font-bold'>
                  <tr>
                    <th className='sticky top-0 p-3 bg-thead text-left'>user_d</th>
                    <th className='sticky top-0 p-3 bg-thead text-left'>username</th>
                  </tr>
                </thead>
              </table>
              <tbody className='divide-y divide-divide bg-tbody text-text'>
                {query.data.map((d, i) => {
                  console.log(d)
                  const { user_id, username } = d
                  return (
                    <tr key={i} className='hover:bg-primary/10'>
                      <td className='text-xs text-secondary p-3'>{user_id}</td>
                      <td className='p-3 whitespace-nowrap'>{username}</td>
                      <td className='p-3 whitespace-nowrap'>
                        <button
                          className='min-w-[100px] min-h-[34px] rounded border border-red-800 bg-red-600 text-white px-2 py-1 text-primary disabled:border-neutral-700 disabled:bg-secondary disabled:cursor-not-allowed'
                          // disabled={mutation.isLoading && mutation.variables === id ? true : false}
                          onClick={() => {
                            // mutation.mutate(id);
                          }}
                        >
                          Delete
                          {/* {mutation.isLoading && mutation.variables === id ? <Spinner /> : 'Delete'} */}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <pre>{JSON.stringify(query.data, null, 2)}</pre>
            </div>
          )}
        </div>
      ) : null}
    </section>
  )
}

export default Page
