import React, { Fragment } from 'react'
import { useSession } from 'next-auth/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import LoadingSpinner from '../components/loading-spinner'
import ErrorMessage from '../components/error-message'

const Page = () => {
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  const { isLoading, isError, data } = useQuery(
    {
      queryKey: ['admin-query'],
      queryFn: async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/api/admin-read-all`, {
          method: 'GET'
        })

        if (!response.ok) {
          throw new Error()
        }

        const json = await response.json()

        // return json.data.sort((a, b) => a.username.localeCompare(b.username))
        return json.data.filter((a, index, array) => array.findIndex((b) => b.user_id === a.user_id) === index)
      }
    },
    {
      retry: 3
    }
  )

  const mutation = useMutation(
    async (user_id) => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/api/admin-delete-by-id`, {
          method: 'DELETE',
          body: JSON.stringify({
            user_id: user_id
          })
        })

        const json = await response.json()

        if (!response.ok) {
          throw new Error()
        }

        return json
      } catch (error) {
        console.error(error)
        return null
      }
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(['admin-query'])
      }
    }
  )

  return (
    <section className='flex flex-col gap-16 mx-auto max-w-6xl'>
      <div className='flex flex-col gap-2'>
        <h1 className='heading-lg'>Admin</h1>
        <p className='mx-auto max-w-lg text-center'>
          {session?.user.admin ? 'A place to delete users if required' : "You don't have permission to view this page"}
        </p>
      </div>
      {session?.user.admin ? (
        <div>
          {isError ? <ErrorMessage /> : null}
          {isLoading ? (
            <div className='flex justify-center'>
              <LoadingSpinner />
            </div>
          ) : null}
          {!isError && !isLoading ? (
            <Fragment>
              {data ? (
                <Fragment>
                  <div>
                    <table className='m-0 table-auto'>
                      <thead className='p-3 text-primary font-bold border-depth-2'>
                        <tr className='text-brand-white'>
                          <th className='text-inherit'>ID</th>
                          <th className='text-inherit'>Username</th>
                          <th className='text-inherit'>Super Region</th>
                          <th className='text-inherit text-right'>Action</th>
                        </tr>
                      </thead>
                      <tbody className=''>
                        {data.map((d, index) => {
                          const { user_id, username, super_region } = d

                          return (
                            <tr key={index} className='border-depth-2 text-brand-neutral-400'>
                              <td className='text-inherit'>{user_id}</td>
                              <td className='text-inherit'>{username}</td>
                              <td className='text-inherit uppercase'>{super_region || 'global'}</td>
                              <td className='text-inherit text-right'>
                                <button
                                  className='link-button flex items-center justify-center border-brand-danger text-brand-danger ml-auto min-w-[100px] min-h-[44px]'
                                  disabled={mutation.isLoading && mutation.variables === user_id ? true : false}
                                  onClick={() => {
                                    mutation.mutate(user_id)
                                  }}
                                >
                                  {mutation.isLoading && mutation.variables === user_id ? (
                                    <LoadingSpinner color='danger' />
                                  ) : (
                                    'Delete'
                                  )}
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                  {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
                </Fragment>
              ) : null}
            </Fragment>
          ) : null}
        </div>
      ) : null}
    </section>
  )
}

export default Page
