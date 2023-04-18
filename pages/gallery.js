import React from 'react'
import Image from 'next/image'
import { imageLoader } from '../utils/image-loader'

const Page = ({ data }) => {
  return (
    <section className='flex flex-col gap-16'>
      <div className='flex flex-col gap-2'>
        <h1 className='heading-lg'>gallery</h1>
        <p className='mx-auto max-w-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tincidunt nisl, sed interdum ante
        </p>
      </div>
      <div className='grid md:grid-cols-2 gap-8 lg:gap-16'>
        {data.map((art, index) => {
          const {
            data: { name, url, colors, shapes }
          } = art
          return (
            <div key={index} className='relative'>
              <div className='relative grid grid-cols-5 z-10'>
                {shapes.map((shape, index) => {
                  const { name, paths } = shape
                  return (
                    <svg
                      key={index}
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 200 200'
                      aria-label='Art'
                    >
                      {paths.map((path, index) => {
                        return (
                          <path
                            data-shape-name={name}
                            key={index}
                            d={path}
                            style={{
                              fill: colors[index]
                            }}
                          />
                        )
                      })}
                    </svg>
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
  try {
    const response = await client.query('SELECT * FROM art_local')

    return {
      props: {
        message: 'A Ok!',
        data: response.rows
      }
    }
  } catch (error) {
    return {
      props: {
        message: 'Error!',
        error: error.message
      }
    }
  } finally {
    client.release()
  }
}

export default Page
