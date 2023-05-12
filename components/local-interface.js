import React from 'react'

import PropTypes from 'prop-types'
import Image from 'next/image'
import * as Select from '@radix-ui/react-select'

import { imageLoader } from '../utils/image-loader'
import { AppContext } from '../context/app-context'

import RadixSelect from './radix-select'
import RadixPopover from './radix-popover'
import CockroachLabsIcon from './cockroach-labs-icon'
import SiloLogo from './silo-logo'
import SaveButton from './save-button'
import LoadingSpinner from './loading-spinner'
import ErrorMessage from './error-message'
import ErrorSave from './error-save'

const LocalInterface = ({ regionId, regionName }) => {
  return (
    <AppContext.Consumer>
      {({
        session,
        grid,
        values,
        isFetching,
        isError,
        localIsLoading,
        localIsError,
        images,
        shapes,
        hex,
        handleImageChange,
        handleShapeChange,
        handleColorChange,
        handleLocalSave
      }) => {
        if (isError) {
          return <ErrorMessage />
        }
        return (
          <div className='flex flex-col gap-8'>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-3'>
              <div className='flex flex-col gap-4'>
                <strong className='text-brand-evening-hush'>Image</strong>
                <div className='relative flex flex-col gap-8'>
                  <div className='relative border border-brand-evening-hush'>
                    <CockroachLabsIcon className={`absolute w-1/12 h-1/12 z-20 ${values.global.position.classes}`} />
                    <SiloLogo background={values.global.theme.classes[1]} foreground={values.global.theme.classes[0]} />
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
                              {values[regionId].shapes[index].paths.map((path, p) => {
                                return (
                                  <path
                                    data-shape-name={values[regionId].shapes[index].name}
                                    key={p}
                                    d={path}
                                    style={{
                                      fill: values[regionId].colors[index]
                                    }}
                                  />
                                )
                              })}
                            </svg>
                          </div>
                        )
                      })}
                    </div>

                    {isFetching ? (
                      <LoadingSpinner className='absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-brand-deep-purple/80' />
                    ) : (
                      <Image
                        loader={imageLoader}
                        src={values[regionId].url}
                        alt={values[regionId].name}
                        width={500}
                        height={300}
                        priority
                        className='absolute m-0 top-0 z-0 w-full'
                      />
                    )}
                    <svg
                      viewBox='0 0 500 300'
                      xmlns='http://www.w3.org/2000/svg'
                      className='absolute top-0 left-0 fill-brand-black/20'
                    >
                      <defs>
                        <pattern id={`${values.global.pattern.id}`} viewBox='0,0,200,200' width='20%' height='30%'>
                          {values.global.pattern.paths.map((path, index) => {
                            return <path key={index} d={path} />
                          })}
                        </pattern>
                      </defs>
                      <rect width={500} height={300} fill={`url(#${values.global.pattern.id})`} />
                    </svg>
                  </div>
                  <div>
                    <RadixSelect
                      trigger={
                        <Select.Trigger className='link-button flex items-center justify-between text-left gap-4 bg-brand-deep-purple border-brand-evening-hush transition-color duration-300 hover:border-brand-white text-brand-evening-hush hover:bg-depth-0 w-full'>
                          <span
                            aria-label={values[regionId].name}
                            className='whitespace-nowrap overflow-hidden text-ellipsis'
                          >
                            {values[regionId].name}
                          </span>
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
                      value={values[regionId].name}
                      onChange={(event) => handleImageChange(event, regionId)}
                    >
                      <Select.Group className='max-w-[220px]'>
                        {images[regionId].map((item, index) => {
                          const { location, s3_url, credit } = item
                          return (
                            <Select.Item
                              key={index}
                              value={{
                                name: location,
                                url: s3_url,
                                credit: credit
                              }}
                              className='px-4 py-3 whitespace-nowrap cursor-pointer text-brand-white bg-brand-deep-purple border-b border-b-brand-evening-hush/30 hover:bg-depth-2 truncate'
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
                              {values[regionId].shapes[index].paths.map((path, p) => {
                                return (
                                  <path
                                    data-shape-name={values[regionId].shapes[index].name}
                                    key={p}
                                    d={path}
                                    style={{
                                      fill: values[regionId].colors[index]
                                    }}
                                  />
                                )
                              })}
                            </svg>
                          </Select.Trigger>
                        }
                        value={values[regionId].name}
                        onChange={(event) => handleShapeChange(event, regionId, index)}
                      >
                        <Select.Group className='grid grid-cols-4'>
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
                <div className='relative flex flex-col gap-8'>
                  <div className='grid grid-cols-5'>
                    {grid.map((_, index) => {
                      return (
                        <RadixSelect
                          height={265}
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
                                    fill: values[regionId].colors[index]
                                  }}
                                />
                              </svg>
                            </Select.Trigger>
                          }
                          value={values[regionId].name}
                          onChange={(event) => handleColorChange(event, regionId, index)}
                        >
                          <Select.Group>
                            {hex[regionId].map((color, index) => {
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
                  <div className='flex flex-col gap-4 sm:flex-row items-center sm:justify-end'>
                    <ErrorSave isError={localIsError} className='w-full sm:w-auto ' />
                    {session ? (
                      <SaveButton
                        onClick={handleLocalSave}
                        regionId={regionId}
                        regionName={regionName}
                        isLoading={isFetching || localIsLoading}
                        disabled={
                          values[regionId].url === 'a-placeholder.jpg' || isFetching || localIsLoading ? true : false
                        }
                      />
                    ) : (
                      <RadixPopover />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

LocalInterface.propTypes = {
  /**  context id  */
  regionId: PropTypes.string.isRequired,
  /** name to use in UPSERT */
  regionName: PropTypes.string.isRequired
}

export default LocalInterface
