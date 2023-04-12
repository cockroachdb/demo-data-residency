import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import { imageLoader } from '../utils/image-loader'

import { AppContext } from '../context/app-context'
import RadixSelect from './radix-select'

import sourceImages from '../public/source-images.json'

const WorkArea = ({ country }) => {
  const [shapes, setShapes] = useState(new Array(15).fill(''))

  return (
    <AppContext.Consumer>
      {({ values, images, handleImageChange }) => {
        return (
          <div className='flex flex-col gap-8'>
            <div className='grid gap-8 lg:grid-cols-3'>
              <div className='relative flex flex-col gap-8'>
                <div className='relative grid grid-cols-5 z-10'>
                  {shapes.map((_, index) => {
                    return (
                      <svg
                        key={index}
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 100 100'
                        aria-label='Art Shapes'
                      >
                        <rect width='100' height='100' className='fill-transparent' />
                      </svg>
                    )
                  })}
                </div>
                <Image
                  loader={imageLoader}
                  src={values[country].url}
                  alt={values[country].name}
                  width={500}
                  height={300}
                  className='absolute m-0 top-0 z-0 w-full'
                />
                <div>
                  <RadixSelect
                    items={images[country]}
                    value={values[country].name}
                    onChange={(event) => handleImageChange(event, country)}
                  />
                </div>
              </div>
              <div className='relative grid grid-cols-5 z-10'>
                {shapes.map((_, index) => {
                  return (
                    <svg
                      key={index}
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 100 100'
                      aria-label='Art Shapes'
                    >
                      <rect width='100' height='100' className='fill-transparent' />
                    </svg>
                  )
                })}
              </div>
              <div className='relative grid grid-cols-5 z-10'>
                {shapes.map((_, index) => {
                  return (
                    <svg
                      key={index}
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 100 100'
                      aria-label='Art Shapes'
                    >
                      <rect width='100' height='100' className='fill-transparent' />
                    </svg>
                  )
                })}
              </div>
            </div>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

WorkArea.propTypes = {
  /** name of country  */
  country: PropTypes.string.isRequired
}

export default WorkArea
