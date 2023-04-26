import React, { Fragment } from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

import { imageLoader } from '../../utils/image-loader'

import CockroachLabsIcon from '../../components/cockroach-labs-icon'
import SiloLogo from '../../components/silo-logo'
import LoadingSpinner from '../../components/loading-spinner'
import ErrorMessage from '../../components/error-message'
import RegionHeading from '../../components/region-heading'

import images from '../../public/source-images.json'

const Page = ({ user_id }) => {
  const { isLoading, isError, data } = useQuery(
    {
      queryKey: ['artuser-query'],
      queryFn: async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_AWS_API_URL}/artuser`, {
            method: 'POST',
            body: JSON.stringify({
              user_id: user_id
            })
          })

          if (!response.ok) {
            throw new Error('Bad response')
          }

          const json = await response.json()

          if (json.data.length > 0) {
            const details = {
              'eu-central-1': {
                headings: [
                  {
                    flag: '🇩🇪',
                    regionId: 'Germany',
                    region: 'eu-central-1 | (Frankfurt)'
                  }
                ]
              },
              'us-east-1': {
                headings: [
                  {
                    flag: '🇺🇸',
                    regionId: 'USA',
                    region: 'us-east-1 | (N. Virginia)'
                  },
                  {
                    flag: '🇺🇸',
                    regionId: 'USA',
                    region: 'us-west-2 | (Oregon)'
                  }
                ]
              }
            }

            const lookup = json.region === 'eu-central-1' ? 'eu' : 'us'

            return {
              placeholder: {
                region: json.region === 'eu-central-1' ? 'us-east-1, us-west-2' : 'eu-central-1',
                message:
                  json.region === 'eu-central-1'
                    ? 'Access to data in these regions is not permitted'
                    : 'Access to data in this region is not permitted',
                headings: details[json.region === 'eu-central-1' ? 'us-east-1' : 'eu-central-1'].headings,
                image: {
                  name: images[lookup][0].credit,
                  url: images[lookup][0].s3_url
                }
              },
              results: {
                headings: details[json.region].headings,
                ...json.data[0]
              }
            }
          } else {
            return null
          }
        } catch (error) {
          console.error(error)
          return null
        }
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
                <h1 className='heading-lg'>preview</h1>
                <div className='flex flex-col gap-2 mx-auto max-w-lg'>
                  <p className='flex gap-2 m-0 text-center'>
                    Art created by <strong>{data.results.username}</strong>
                    <time className='text-inherit'>{`| ${data.results.local_last_update}`}</time>
                  </p>
                </div>
              </div>
              <div className='grid lg:grid-cols-2 gap-8 lg:gap-16'>
                <div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex gap-4'>
                      {data.results.headings.map((heading, index) => {
                        const { flag, regionId, region } = heading

                        return <RegionHeading key={index} flag={flag} regionId={regionId} region={region} />
                      })}
                    </div>
                    <div className='relative'>
                      <CockroachLabsIcon
                        className={`absolute w-1/12 h-1/12 z-20 ${
                          data.results.global_values ? data.results.global_values?.position?.classes : 'top-2 left-2'
                        }`}
                      />
                      <SiloLogo
                        background={
                          data.results.global_values
                            ? data.results.global_values?.theme?.classes[1]
                            : 'fill-brand-white'
                        }
                        foreground={
                          data.results.global_values
                            ? data.results.global_values?.theme?.classes[0]
                            : 'fill-brand-black'
                        }
                      />
                      <div className='relative grid grid-cols-5 z-10'>
                        {data.results.local_values.shapes.map((shape, s) => {
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
                                        fill: data.results.local_values.colors[s]
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
                        src={data.results.local_values.url}
                        alt={data.results.local_values.name}
                        width={500}
                        height={300}
                        priority
                        className='absolute m-0 top-0 z-0 w-full'
                      />
                      {data.results.global_values?.position ? (
                        <svg
                          viewBox='0 0 500 300'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute top-0 left-0 fill-brand-black/20'
                        >
                          <defs>
                            <pattern
                              id={`${data.results.global_values.pattern.id}`}
                              viewBox='0,0,200,200'
                              width='20%'
                              height='30%'
                            >
                              {data.results.global_values.pattern.paths.map((path, index) => {
                                return <path key={index} d={path} />
                              })}
                            </pattern>
                          </defs>
                          <rect width={500} height={300} fill={`url(#${data.results.global_values.pattern.id})`} />
                        </svg>
                      ) : null}
                    </div>

                    <div className='flex gap-2 justify-between bg-depth-1 p-2 text-xs text-brand-evening-hush'>
                      <span className='text-inherit'>{`Photograph by: ${data.results.local_values.credit}`}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex gap-4'>
                      {data.placeholder.headings.map((heading, index) => {
                        const { flag, regionId, region } = heading

                        return <RegionHeading key={index} flag={flag} regionId={regionId} region={region} />
                      })}
                    </div>
                    <div className='relative'>
                      <div className='absolute flex flex-col items-center justify-center  w-full h-full'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-16 h-16 stroke-brand-warning'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                          />
                        </svg>
                        <strong className='text-xl'>{data.placeholder.region}</strong>
                        <small className='block'>{data.placeholder.message}</small>
                      </div>
                      <Image
                        loader={imageLoader}
                        src={data.placeholder.image.url}
                        alt={data.placeholder.image.name}
                        width={500}
                        height={300}
                        priority
                        className='m-0 w-full border-2 border-depth-2'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className='flex flex-col gap-4'>
              <h1 className='heading-lg'>preview</h1>
              <div className='flex flex-col gap-2 mx-auto max-w-lg'>
                <p className='m-0 text-center'>No art to display</p>
              </div>
            </div>
          )}
        </Fragment>
      ) : null}
    </section>
  )
}

export async function getServerSideProps(context) {
  const {
    params: { id }
  } = context

  return {
    props: {
      user_id: id
    }
  }
}

export default Page
