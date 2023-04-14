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
                    <CockroachLabsIcon
                      className={`absolute w-8 h-8 xl:w-10 xl:h-10 z-20 ${values.global.position.classes}`}
                    />
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
