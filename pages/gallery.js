import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'

import { imageLoader } from '../utils/image-loader'

import CockroachLabsIcon from '../components/cockroach-labs-icon'
import SiloLogo from '../components/silo-logo'
import LoadingSpinner from '../components/loading-spinner'
import ErrorMessage from '../components/error-message'

const Page = () => {
  const { isLoading, isError, data } = useQuery(
    {
      queryKey: ['gallery-query'],
      queryFn: async () => {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/api/gallery`, {
        const response = await fetch(`${process.env.NEXT_PUBLIC_AWS_API_URL}/gallery`, {
          method: 'GET'
        })

        if (!response.ok) {
          throw new Error()
        }
        const json = await response.json()

        console.log(('gallery-query db_total: ', json.metrics.db_total / 1000).toFixed(2))

        return {
          isEurope: json.region === 'eu-central-1' ? true : false,
          region: json.region,
          results: json.data
        }
      },
      useErrorBoundary: (error) => {
        console.error('error gallery-query: ', error)
      }
    },
    {
      retry: 10
    }
  )

  return (
    <section className='flex flex-col gap-16 mx-auto max-w-6xl'>
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
              <div className='flex flex-col gap-4'>
                <h1 className='heading-lg'>gallery</h1>
                <div className='flex flex-col gap-2 mx-auto max-w-lg'>
                  <p className='flex items-center justify-center m-0 font-bold text-center'>
                    You're <Fragment>{data.isEurope ? 'in' : 'outside of'} Europe</Fragment>
                  </p>
                  <p className='m-0 text-center'>
                    This gallery will only show artwork stored in{' '}
                    {data.isEurope ? (
                      <Fragment>
                        <code>eu-central-1</code>.
                      </Fragment>
                    ) : (
                      <Fragment>
                        <code>us-east-1</code> and <code>us-west-1</code>.
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <div className='grid lg:grid-cols-2 gap-8 lg:gap-16'>
                {data.results.map((art, index) => {
                  const {
                    username,
                    local_last_update,
                    local_values: { url, name, credit, shapes, colors },
                    global_values
                  } = art

                  return (
                    <div key={index} className='flex flex-col gap-2'>
                      <div className='relative'>
                        <CockroachLabsIcon
                          className={`absolute w-1/12 h-1/12 z-20 ${
                            global_values ? global_values?.position?.classes : 'top-2 left-2'
                          }`}
                        />
                        <SiloLogo
                          background={global_values ? global_values?.theme?.classes[1] : 'fill-brand-white'}
                          foreground={global_values ? global_values?.theme?.classes[0] : 'fill-brand-black'}
                        />

                        <div className='relative grid grid-cols-5 z-10'>
                          {shapes.map((shape, s) => {
                            const { name, paths } = shape

                            return (
                              <div key={s}>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='currentColor'
                                  viewBox='0 0 200 200'
                                  aria-label='Art'
                                >
                                  {paths.map((path, p) => {
                                    return (
                                      <path
                                        data-shape-name={name}
                                        key={p}
                                        d={path}
                                        style={{
                                          fill: colors[s]
                                        }}
                                      />
                                    )
                                  })}
                                </svg>
                              </div>
                            )
                          })}
                        </div>
                        <Image
                          loader={imageLoader}
                          src={url}
                          alt={name}
                          width={500}
                          height={300}
                          className='absolute m-0 top-0 z-0 w-full'
                        />
                        {global_values?.position ? (
                          <svg
                            viewBox='0 0 500 300'
                            xmlns='http://www.w3.org/2000/svg'
                            className='absolute top-0 left-0 fill-brand-black/20'
                          >
                            <defs>
                              <pattern
                                id={`${global_values.pattern.id}`}
                                viewBox='0,0,200,200'
                                width='20%'
                                height='30%'
                              >
                                {global_values.pattern.paths.map((path, index) => {
                                  return <path key={index} d={path} />
                                })}
                              </pattern>
                            </defs>
                            <rect width={500} height={300} fill={`url(#${global_values.pattern.id})`} />
                          </svg>
                        ) : null}
                      </div>
                      <div className='flex flex-col gap-2 bg-depth-1 p-2 text-xs text-brand-evening-hush'>
                        <span className='text-inherit'>{`Photograph by: ${credit}`}</span>
                        <div className='flex gap-2 justify-between text-inherit'>
                          <span className='text-inherit'>{`Art by: ${username}`}</span>
                          <time className='text-inherit'>{local_last_update}</time>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Fragment>
          ) : null}
        </Fragment>
      ) : null}
    </section>
  )
}

export default Page
