import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import * as Select from '@radix-ui/react-select'

import { imageLoader } from '../utils/image-loader'

import { AppContext } from '../context/app-context'
import RadixSelect from './radix-select'

const WorkArea = ({ country }) => {
  return (
    <AppContext.Consumer>
      {({ grid, values, images, shapes, hex, handleImageChange, handleShapeChange, handleColorChange }) => {
        return (
          <div className='flex flex-col gap-8'>
            <div className='grid gap-8 lg:grid-cols-3'>
              <div className='relative flex flex-col gap-8'>
                <div className='relative grid grid-cols-5 z-10'>
                  {grid.map((_, index) => {
                    return (
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
                    trigger={
                      <Select.Trigger className='inline-flex items-center justify-between text-left px-4 gap-4 bg-brand-deep-purple border-brand-evening-hush text-brand-evening-hush hover:bg-depth-0'>
                        <Select.Value aria-label={values[country].name}>
                          <span className='block whitespace-nowrap overflow-hidden text-ellipsis w-64'>
                            {values[country].name}
                          </span>
                        </Select.Value>
                        <Select.Icon>
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
                    <Select.Group>
                      {images[country].map((item, index) => {
                        const { location, s3_url } = item
                        return (
                          <Select.Item
                            key={index}
                            value={{
                              name: location,
                              url: s3_url
                            }}
                            className='p-2 whitespace-nowrap cursor-pointer bg-brand-deep-purple hover:bg-depth-0'
                          >
                            {location}
                          </Select.Item>
                        )
                      })}
                    </Select.Group>
                  </RadixSelect>
                </div>
              </div>
              <div>
                <div className='relative grid grid-cols-5'>
                  {grid.map((_, index) => {
                    return (
                      <RadixSelect
                        key={index}
                        sideOffset={-60}
                        alignOffset={20}
                        trigger={
                          <Select.Trigger className='p-0 aspect-square hover:bg-depth-2 border'>
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
                              <Select.Item key={index} value={index} className='p-4 w-16 h-16 cursor-pointer'>
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
              <div>
                <div className='grid grid-cols-5'>
                  {grid.map((_, index) => {
                    return (
                      <RadixSelect
                        key={index}
                        sideOffset={-60}
                        alignOffset={20}
                        trigger={
                          <Select.Trigger className='p-0 aspect-square hover:bg-depth-2 border'>
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
                              <Select.Item key={index} value={color} className='p-4 w-16 h-16 cursor-pointer'>
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

WorkArea.propTypes = {
  /** name of country  */
  country: PropTypes.string.isRequired
}

export default WorkArea
