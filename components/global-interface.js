import React from 'react'
import * as Select from '@radix-ui/react-select'

import { AppContext } from '../context/app-context'

import RadixSelect from './radix-select'
import RadixPopover from './radix-popover'
import SaveButton from './save-button'

const GlobalInterface = ({ regionId, regionName }) => {
  return (
    <AppContext.Consumer>
      {({
        session,
        values,
        isFetching,
        isError,
        globalIsLoading,
        globalIsDisabled,
        patterns,
        positions,
        themes,
        handlePatternChange,
        handlePositionChange,
        handleThemeChange,
        handleGlobalSave
      }) => {
        if (isError) return null

        return (
          <div className='flex flex-col gap-8'>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-3'>
              <label className='flex flex-col gap-4 text-brand-evening-hush'>
                Background Pattern
                <RadixSelect
                  height={270}
                  trigger={
                    <Select.Trigger className='flex items-center justify-between text-left px-4 gap-4 bg-brand-deep-purple border-brand-evening-hush transition-color duration-300 hover:border-brand-white text-brand-evening-hush hover:bg-depth-0 w-full'>
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
                  value={values.global.pattern.id}
                  onChange={(event) => handlePatternChange(event)}
                >
                  <Select.Group>
                    {patterns.map((item, index) => {
                      const { name, id, paths } = item
                      return (
                        <Select.Item
                          key={index}
                          value={{
                            name: name,
                            id: id,
                            paths: paths
                          }}
                          className='px-4 py-3 whitespace-nowrap cursor-pointer text-brand-white bg-brand-deep-purple border-b border-b-brand-evening-hush/30 hover:bg-depth-2'
                        >
                          {name}
                        </Select.Item>
                      )
                    })}
                  </Select.Group>
                </RadixSelect>
              </label>
              <label className='flex flex-col gap-4 text-brand-evening-hush'>
                Cockroach Position
                <RadixSelect
                  height={220}
                  trigger={
                    <Select.Trigger className='flex items-center justify-between text-left px-4 gap-4 bg-brand-deep-purple border-brand-evening-hush transition-color duration-300 hover:border-brand-white text-brand-evening-hush hover:bg-depth-0 w-full'>
                      <Select.Value aria-label={values.global.position.name}>
                        {values.global.position.name}
                      </Select.Value>
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
                          className='px-4 py-3 whitespace-nowrap cursor-pointer text-brand-white bg-brand-deep-purple border-b border-b-brand-evening-hush/30 hover:bg-depth-2'
                        >
                          {name}
                        </Select.Item>
                      )
                    })}
                  </Select.Group>
                </RadixSelect>
              </label>
              <label className='flex flex-col gap-4 text-brand-evening-hush'>
                Silo Theme
                <RadixSelect
                  height={325}
                  trigger={
                    <Select.Trigger className='flex items-center justify-between text-left px-4 gap-4 bg-brand-deep-purple border-brand-evening-hush transition-color duration-300 hover:border-brand-white text-brand-evening-hush hover:bg-depth-0 w-full'>
                      <Select.Value aria-label={values.global.theme.name}>{values.global.theme.name}</Select.Value>
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
                  value={values.global.theme.name}
                  onChange={(event) => handleThemeChange(event)}
                >
                  <Select.Group>
                    {themes.map((item, index) => {
                      const { name, classes } = item
                      return (
                        <Select.Item
                          key={index}
                          value={{
                            name: name,
                            classes: classes
                          }}
                          className='px-4 py-3 whitespace-nowrap cursor-pointer text-brand-white bg-brand-deep-purple border-b border-b-brand-evening-hush/30 hover:bg-depth-2'
                        >
                          {name}
                        </Select.Item>
                      )
                    })}
                  </Select.Group>
                </RadixSelect>
              </label>
            </div>
            {session ? (
              <SaveButton
                onClick={handleGlobalSave}
                regionId={regionId}
                regionName={regionName}
                isLoading={isFetching || globalIsLoading}
                disabled={isFetching || globalIsLoading || globalIsDisabled}
              />
            ) : (
              <RadixPopover />
            )}
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export default GlobalInterface
