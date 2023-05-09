import React from 'react'
import DottedMap from 'dotted-map/without-countries'

import dottedMapString from '../utils/dotted-map-string'

import partUsJson from '../public/images/part-us-json.png'
const UsDottedMap = () => {
  const map = new DottedMap({ map: JSON.parse(dottedMapString) })

  const svgMap = map.getSVG({
    radius: 0.22,
    color: '#5c4f80',
    shape: 'circle',
    backgroundColor: 'transparent'
  })

  return (
    <div className='overflow-hidden absolute mx-auto w-11/12 sm:w-full max-w-lg shadow-3xl border-2 border-depth-2 z-10'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 400 250'
        className='relative w-full h-full z-10'
        aria-label='US data map'
      >
        <image href={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`} className='w-auto h-full' />
        <g>
          <circle cx='83' cy='79' r='4' className='fill-brand-danger' />
          <circle
            cx='83'
            cy='79'
            r='6'
            className='fill-brand-danger motion-safe:animate-ping '
            style={{
              transformOrigin: 'center',
              transformBox: 'fill-box'
            }}
          />
        </g>
        <g>
          <circle cx='147' cy='93' r='4' className='fill-brand-blue' />
          <circle
            cx='147'
            cy='93'
            r='6'
            className='fill-brand-blue motion-safe:animate-ping'
            style={{
              transformOrigin: 'center',
              transformBox: 'fill-box',
              animationDelay: '250ms'
            }}
          />
        </g>

        <image
          href={partUsJson.src}
          alt='json-us'
          className='w-[40%] h-auto art-shadow'
          style={{
            transform: 'translate(225px, 18px)'
          }}
        />
      </svg>
      <div className='absolute top-0 w-full h-full bg-brand-deep-purple z-0' />
    </div>
  )
}

export default UsDottedMap
