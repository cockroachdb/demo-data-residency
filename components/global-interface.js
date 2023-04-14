import React from 'react'
import * as Select from '@radix-ui/react-select'

import { AppContext } from '../context/app-context'

import RadixSelect from './radix-select'

const GlobalInterface = () => {
  return (
    <AppContext.Consumer>
      {({ values, patterns, positions, handlePatternChange, handlePositionChange }) => {
        return (
          <div className='grid gap-8 grid-cols-1 lg:grid-cols-3'>
            <label className='flex flex-col gap-4 text-brand-evening-hush'>
              Pattern
              <RadixSelect
                trigger={
                  <Select.Trigger className='flex items-center justify-between text-left px-4 gap-4 bg-brand-deep-purple border-brand-evening-hush text-brand-evening-hush hover:bg-depth-0 w-full'>
                    <Select.Value aria-label={values.global.pattern.name}>{values.global.pattern.name}</Select.Value>
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
                value={values.global.pattern.name}
                onChange={(event) => handlePatternChange(event)}
              >
                <Select.Group>
                  {patterns.map((item, index) => {
                    const { name, paths } = item
                    return (
                      <Select.Item
                        key={index}
                        value={{
                          name: name,
                          paths: paths
                        }}
                        className='px-4 py-3 whitespace-nowrap cursor-pointer bg-brand-deep-purple border-b border-b-brand-evening-hush/30 hover:bg-depth-2'
                      >
                        {name}
                      </Select.Item>
                    )
                  })}
                </Select.Group>
              </RadixSelect>
            </label>
            <label className='flex flex-col gap-4 text-brand-evening-hush'>
              Logo Position
              <RadixSelect
                trigger={
                  <Select.Trigger className='flex items-center justify-between text-left px-4 gap-4 bg-brand-deep-purple border-brand-evening-hush text-brand-evening-hush hover:bg-depth-0 w-full'>
                    <Select.Value aria-label={values.global.position.name}>{values.global.position.name}</Select.Value>
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
                value={values.global.position.name}
                onChange={(event) => handlePositionChange(event)}
              >
                <Select.Group>
                  {positions.map((item, index) => {
                    const { name, classes } = item
                    return (
                      <Select.Item
                        key={index}
                        value={{
                          name: name,
                          classes: classes
                        }}
                        className='px-4 py-3 whitespace-nowrap cursor-pointer bg-brand-deep-purple border-b border-b-brand-evening-hush/30 hover:bg-depth-2'
                      >
                        {name}
                      </Select.Item>
                    )
                  })}
                </Select.Group>
              </RadixSelect>
            </label>
            <div />
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export default GlobalInterface
