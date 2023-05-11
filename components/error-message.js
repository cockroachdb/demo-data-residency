import React from 'react'

const ErrorMessage = () => {
  return (
    <div className='w-full p-8 border-2 border-depth-2  '>
      <div className='flex flex-col gap-2 justify-content text-center text-brand-danger'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mx-auto w-10 h-10'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
          />
        </svg>
        <strong className='text-inherit'>There's been error</strong>
      </div>
    </div>
  )
}

export default ErrorMessage
