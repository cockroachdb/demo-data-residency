import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import LoadingSpinner from './loading-spinner'
import * as Popover from '@radix-ui/react-popover'

const SaveButton = ({ onClick, regionId, regionName, isLoading, session, disabled }) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className={`link-button flex gap-2 items-center justify-center border-2  w-full sm:w-auto min-w-[100px] transition-color duration-300 ${
            disabled || !session
              ? 'text-brand-hidden-sapphire border-brand-hidden-sapphire cursor-not-allowed'
              : 'text-brand-pink text-center border-brand-pink  hover:text-brand-white hover:border-brand-white'
          }`}
          onClick={() => (disabled || !session ? () => {} : onClick.mutate({ regionId, regionName }))}
        >
          <Fragment>
            {isLoading ? (
              <LoadingSpinner className='h-full items-center' color='pink' />
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                />
              </svg>
            )}
            Save
          </Fragment>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className='shadow' side='bottom' sideOffset={20}>
          {!isLoading && !session ? (
            <Fragment>
              <Popover.Arrow className='fill-brand-pink' />
              <div className='p-2 text-brand-white text-xs bg-brand-pink'>Sign in to save</div>
            </Fragment>
          ) : null}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

SaveButton.propTypes = {
  /** onClick callback  */
  onClick: PropTypes.any.isRequired,
  /**  context id  */
  regionId: PropTypes.string.isRequired,
  /** name to use in UPSERT */
  regionName: PropTypes.string.isRequired,
  /** sets disabled attribute */
  disabled: PropTypes.bool.isRequired,
  /** Yhe session object */
  session: PropTypes.any
}

export default SaveButton
