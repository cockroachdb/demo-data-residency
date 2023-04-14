import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import * as Select from '@radix-ui/react-select'

import { imageLoader } from '../utils/image-loader'
import { AppContext } from '../context/app-context'

import RadixSelect from './radix-select'
import CockroachLabsIcon from './cockroach-labs-icon'

const RegionInterface = ({ country }) => {
  return (
    <AppContext.Consumer>
      {({ grid, values, images, shapes, hex, handleImageChange, handleShapeChange, handleColorChange }) => {
        return (
          <div className='flex flex-col gap-8'>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-3'>
              <div className='flex flex-col gap-4'>
                <strong className='text-brand-evening-hush'>Image</strong>
                <div className='relative flex flex-col gap-8'>
                  <div className='relative border border-brand-evening-hush'>
                    <CockroachLabsIcon className={`absolute w-1/12 h-1/12 z-20 ${values.global.position.classes}`} />
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 600 250'
                      className={`absolute w-1/4 top-[calc(50%-8.5%)] left-[calc(50%-13%)] z-20 ${values.global.theme.classes[0]}`}
                    >
                      <rect className={`${values.global.theme.classes[1]}`} width='600' height='249.86' />
                      <path
                        d='M99.12,180.35c-9.93,0-17.08-2.47-21.47-7.41s-6.58-12.81-6.58-23.6v-10.62h21.5v13.59c0,2.51,0.38,4.48,1.14,5.9
		c0.76,1.42,2.09,2.13,3.98,2.13c1.98,0,3.35-0.58,4.11-1.73c0.76-1.15,1.14-3.05,1.14-5.68c0-3.34-0.33-6.13-0.99-8.37
		c-0.66-2.24-1.8-4.39-3.43-6.42c-1.63-2.04-3.88-4.42-6.76-7.13l-9.76-9.27c-7.29-6.88-10.93-14.74-10.93-23.6
		c0-9.27,2.15-16.33,6.46-21.19c4.3-4.86,10.53-7.29,18.69-7.29c9.97,0,17.04,2.66,21.22,7.97c4.18,5.31,6.27,13.38,6.27,24.22
		H101.6v-7.47c0-1.48-0.42-2.63-1.27-3.46c-0.84-0.82-1.99-1.24-3.43-1.24c-1.73,0-3,0.48-3.8,1.45c-0.8,0.97-1.2,2.21-1.2,3.74
		c0,1.52,0.41,3.17,1.24,4.94c0.82,1.77,2.45,3.81,4.88,6.12l12.54,12.05c2.51,2.39,4.82,4.91,6.92,7.57
		c2.1,2.66,3.79,5.74,5.07,9.27c1.28,3.52,1.91,7.81,1.91,12.88c0,10.21-1.88,18.21-5.65,24
		C115.03,177.46,108.47,180.35,99.12,180.35z'
                      />
                      <path d='M226.67,179.36V70.64h21v108.72H226.67z' />
                      <path d='M349.89,179.36V70.64h21.74v90.19H394v18.53H349.89z' />
                      <path
                        d='M500.7,180.35c-8.69,0-15.33-2.63-19.92-7.88c-4.59-5.25-6.89-12.84-6.89-22.76V98.07c0-9.31,2.28-16.37,6.83-21.19
		c4.55-4.82,11.21-7.23,19.98-7.23s15.43,2.41,19.98,7.23c4.55,4.82,6.83,11.88,6.83,21.19v51.64c0,9.93-2.3,17.51-6.89,22.76
		C516.03,177.72,509.39,180.35,500.7,180.35z M500.88,160.33c3.29,0,4.94-3.19,4.94-9.57V97.7c0-5.35-1.61-8.03-4.82-8.03
		c-3.62,0-5.44,2.74-5.44,8.22v53c0,3.38,0.41,5.8,1.24,7.26C497.63,159.6,498.99,160.33,500.88,160.33z'
                      />
                      <path d='M600,249.93H-0.5V0.07H600V249.93z M9.42,240.01h580.66V9.99H9.42V240.01z' />
                    </svg>
                    <div className='relative grid grid-cols-5 z-10'>
                      {grid.map((_, index) => {
                        return (
                          <div key={index}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 200 200'
                              aria-label='Art Shape'
                            >
                              {values[country].shapes[index].paths.map((path, p) => {
                                return (
                                  <path
                                    data-shape-name={values[country].shapes[index].name}
                                    key={p}
                                    d={path}
                                    style={{
                                      fill: values[country].colors[index]
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
                      src={values[country].url}
                      alt={values[country].name}
                      width={500}
                      height={300}
                      className='absolute m-0 top-0 z-0 w-full'
                    />
                    <svg
                      viewBox='0 0 500 300'
                      xmlns='http://www.w3.org/2000/svg'
                      className='absolute top-0 left-0 fill-brand-black/10'
                    >
                      <defs>
                        <pattern id='pattern' viewBox='0,0,200,200' width='20%' height='20%'>
                          {values.global.pattern.paths.map((path, index) => {
                            return <path key={index} d={path} />
                          })}
                        </pattern>
                      </defs>
                      <rect width={500} height={300} fill='url(#pattern)' />
                    </svg>
                  </div>
                  <div>
                    <RadixSelect
                      trigger={
                        <Select.Trigger className='flex items-center justify-between text-left px-4 gap-4 bg-brand-deep-purple border-brand-evening-hush text-brand-evening-hush hover:bg-depth-0 w-full'>
                          <Select.Value aria-label={values[country].name}>{values[country].name}</Select.Value>
                          <Select.Icon className='text-brand-pink'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              fill='currentColor'
                              className='w-6 h-6'
                            >
                              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                            </svg>
                          </Select.Icon>
                        </Select.Trigger>
                      }
                      value={values[country].name}
                      onChange={(event) => handleImageChange(event, country)}
                    >
                      <Select.Group className='max-w-[220px]'>
                        {images[country].map((item, index) => {
                          const { location, s3_url } = item
                          return (
                            <Select.Item
                              key={index}
                              value={{
                                name: location,
                                url: s3_url
                              }}
                              className='px-4 py-3 whitespace-nowrap cursor-pointer bg-brand-deep-purple border-b border-b-brand-evening-hush/30 hover:bg-depth-2 truncate'
                            >
                              {location}
                            </Select.Item>
                          )
                        })}
                      </Select.Group>
                    </RadixSelect>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                <strong className='text-brand-evening-hush'>Shapes</strong>
                <div className='relative grid grid-cols-5'>
                  {grid.map((_, index) => {
                    return (
                      <RadixSelect
                        key={index}
                        sideOffset={-60}
                        alignOffset={20}
                        trigger={
                          <Select.Trigger className='p-0 aspect-square bg-brand-deep-purple hover:bg-depth-2 border border-brand-evening-hush'>
                            <svg
                              key={index}
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 200 200'
                              aria-label='Art Shape'
                            >
                              {values[country].shapes[index].paths.map((path, p) => {
                                return (
                                  <path
                                    data-shape-name={values[country].shapes[index].name}
                                    key={p}
                                    d={path}
                                    style={{
                                      fill: values[country].colors[index]
                                    }}
                                  />
                                )
                              })}
                            </svg>
                          </Select.Trigger>
                        }
                        value={values[country].name}
                        onChange={(event) => handleShapeChange(event, country, index)}
                      >
                        <Select.Group>
                          {shapes.map((shape, index) => {
                            const { paths } = shape

                            return (
                              <Select.Item
                                key={index}
                                value={index}
                                className='p-4 w-16 h-16 cursor-pointer hover:bg-depth-2'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='currentColor'
                                  viewBox='0 0 200 200'
                                  aria-label='Art Shape List'
                                >
                                  {paths.map((path, index) => {
                                    return <path key={index} d={path} className='fill-white' />
                                  })}
                                </svg>
                              </Select.Item>
                            )
                          })}
                        </Select.Group>
                      </RadixSelect>
                    )
                  })}
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                <strong className='text-brand-evening-hush'>Colors</strong>
                <div className='grid grid-cols-5'>
                  {grid.map((_, index) => {
                    return (
                      <RadixSelect
                        key={index}
                        sideOffset={-60}
                        alignOffset={20}
                        trigger={
                          <Select.Trigger className='p-0 aspect-square bg-brand-deep-purple hover:bg-depth-2 border border-brand-evening-hush'>
                            <svg
                              key={index}
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 200 200'
                              aria-label='Art Color'
                            >
                              <rect
                                width='200'
                                height='200'
                                style={{
                                  fill: values[country].colors[index]
                                }}
                              />
                            </svg>
                          </Select.Trigger>
                        }
                        value={values[country].name}
                        onChange={(event) => handleColorChange(event, country, index)}
                      >
                        <Select.Group>
                          {hex[country].map((color, index) => {
                            return (
                              <Select.Item
                                key={index}
                                value={color}
                                className='p-4 w-16 h-16 cursor-pointer hover:bg-depth-2'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='currentColor'
                                  viewBox='0 0 200 200'
                                  aria-label='Art Color List'
                                >
                                  <rect
                                    width='200'
                                    height='200'
                                    style={{
                                      fill: color
                                    }}
                                  />
                                </svg>
                              </Select.Item>
                            )
                          })}
                        </Select.Group>
                      </RadixSelect>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

RegionInterface.propTypes = {
  /** name of country  */
  country: PropTypes.string.isRequired
}

export default RegionInterface
