import React from 'react'
import Image from 'next/image'
import { imageLoader } from '../utils/image-loader'

import CockroachLabsIcon from '../components/cockroach-labs-icon'
import SiloLogo from '../components/silo-logo'
import GetStartedLink from '../components/get-started-link'

const Page = ({ data, region, message }) => {
  if (!data) return <div>{message}</div>

  return (
    <section className='flex flex-col gap-16 mx-auto max-w-6xl' aria-details={region}>
      <div className='flex flex-col gap-2'>
        <h1 className='heading-lg'>gallery</h1>
        <p className='mx-auto max-w-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
        </p>

        <div className='mx-auto'>
          <GetStartedLink />
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-8 lg:gap-16'>
        {data.map((art, index) => {
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
    </section>
  )
}

export async function getServerSideProps() {
  const { getDB } = require('../pg')
  const client = await getDB().connect()

  const region = process.env.AWS_REGION ? `aws-${process.env.AWS_REGION}` : 'aws-us-east-1'
  // const region = process.env.AWS_REGION ? `aws-${process.env.AWS_REGION}` : 'aws-eu-central-1'

  try {
    const response = await client.query(
      'SELECT l.user_id, l.username, l.region, l.last_updated AS local_last_update, l.values AS local_values, g.last_updated AS global_last_update, g.values AS global_values FROM art_local l LEFT JOIN art_global g ON l.user_id = g.user_id WHERE region = $1',
      [region]
    )

    if (!response.rows) {
      throw new Error('Bad Response')
    }

    const newResponse = response.rows.map((data) => {
      const { user_id, username, local_last_update, local_values, global_values } = data

      return {
        user_id,
        username,
        local_last_update: new Date(local_last_update).toLocaleString('default', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }),
        local_values,
        global_values
      }
    })

    return {
      props: {
        message: 'A Ok!',
        region: region,
        data: newResponse
      }
    }
  } catch (error) {
    return {
      props: {
        message: 'Error!'
      }
    }
  } finally {
    client.release()
  }
}

export default Page
