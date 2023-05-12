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
              <LoadingSpinner className='h-full items-center' color='fill-brand-pink' />
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
                  d='M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z'
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
