import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { imageLoader } from '../utils/image-loader'

import { useQuery } from '@tanstack/react-query'

import LoadingSpinner from '../components/loading-spinner'
import CockroachLabsIcon from '../components/cockroach-labs-icon'
import SiloLogo from '../components/silo-logo'
import ErrorMessage from '../components/error-message'

const Page = () => {
  const query = useQuery({
    queryKey: ['gallery-read-query'],
    queryFn: async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`, {
          method: 'GET'
        })

        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()

        return {
          region: json.region,
          results: json.data
        }
      } catch (error) {
        console.error(error)
      }
    }
  })

  return (
    <section className='flex flex-col gap-16 mx-auto max-w-6xl'>
      {query.isError ? <ErrorMessage /> : null}
      {query.status === 'loading' ? (
        <div className='flex justify-center'>
          <LoadingSpinner />
        </div>
      ) : null}
      {!query.isError && query.status !== 'loading' ? (
        <Fragment>
          <div className='flex flex-col gap-4'>
            <h1 className='heading-lg'>gallery</h1>
            <div className='flex flex-col gap-2 mx-auto max-w-lg'>
              <p className='m-0 text-center'>
                {query.data.region === 'eu-central-1' ? "You're in Europe." : "You're not in Europe."}
              </p>
              <p className='m-0 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl,{' '}
                <Link href='/app' className='text-brand-iridescent-blue'>
                  create your own artwork!
                </Link>
              </p>
            </div>
          </div>
          <div className='grid md:grid-cols-2 gap-8 lg:gap-16'>
            {query.data.results.map((art, index) => {
              const {
                username,
                local_last_update,
                local_values: { url, name, shapes, colors },
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
                          <pattern id={`${global_values.pattern.id}`} viewBox='0,0,200,200' width='20%' height='30%'>
                            {global_values.pattern.paths.map((path, index) => {
                              return <path key={index} d={path} />
                            })}
                          </pattern>
                        </defs>
                        <rect width={500} height={300} fill={`url(#${global_values.pattern.id})`} />
                      </svg>
                    ) : null}
                  </div>

                  <div className='flex gap-2 justify-between bg-depth-1 p-2 text-xs text-brand-evening-hush'>
                    <span className='text-inherit'>{`Created by: ${username}`}</span>
                    <time className='text-inherit'>{local_last_update}</time>
                  </div>
                </div>
              )
            })}
          </div>
        </Fragment>
      ) : null}
    </section>
  )
}

export default Page
