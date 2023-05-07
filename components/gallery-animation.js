import React, { useEffect, useRef } from 'react'

const GalleryAnimation = () => {
  const gEuRef = useRef()
  const gUsRef = useRef()

  return (
    <div className='eu-isomorphic overflow-hidden absolute mx-auto w-11/12 sm:w-full max-w-lg shadow-3xl border-2 border-brand-iridescent-blue z-10'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 416 250'
        className='relative w-full h-full z-10'
        aria-label='Make your own art'
      >
        <g ref={gEuRef}>{/* EU */}</g>

        <g ref={gUsRef}>{/* US */}</g>
      </svg>
      <div className='absolute top-0 w-full h-full bg-brand-deep-purple z-0' />
    </div>
  )
}

export default GalleryAnimation
