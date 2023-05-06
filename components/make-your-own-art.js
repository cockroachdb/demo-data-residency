import React, { useEffect, useRef } from 'react'

import { timeline } from 'motion'

import partEuArt from '../public/images/part-eu-art.jpg'
import partEuColors from '../public/images/part-eu-colors.jpg'
import partEuShapes from '../public/images/part-eu-shapes.jpg'
import partEuColorsUi from '../public/images/part-eu-colors-ui.jpg'
import partEuShapesUi from '../public/images/part-eu-shapes-ui.jpg'

import partUsArt from '../public/images/part-us-art.jpg'
import partUsColors from '../public/images/part-us-colors.jpg'
import partUsShapes from '../public/images/part-us-shapes.jpg'
import partUsColorsUi from '../public/images/part-us-colors-ui.jpg'
import partUsShapesUi from '../public/images/part-us-shapes-ui.jpg'

const MakeYouOwnArt = () => {
  const partEuArtRef = useRef()
  const partEuColorsRef = useRef()
  const partEuShapesRef = useRef()
  const partEuColorsUiRef = useRef()
  const partEuShapesUiRef = useRef()

  const partUsArtRef = useRef()
  const partUsColorsRef = useRef()
  const partUsShapesRef = useRef()
  const partUsColorsUiRef = useRef()
  const partUsShapesUiRef = useRef()

  useEffect(() => {
    const refsReady = [
      partEuArtRef,
      partEuColorsRef,
      partEuShapesRef,
      partEuColorsUiRef,
      partEuShapesUiRef,
      partUsArtRef,
      partUsColorsRef,
      partUsShapesRef,
      partUsColorsUiRef,
      partUsShapesUiRef
    ].every((ref) => ref.current !== null)

    if (refsReady) {
      timeline(
        [
          // EU - in
          [partEuArtRef.current, { transform: 'translateY(-246px)' }, { duration: 1.2 }],
          [partEuColorsRef.current, { transform: 'translateY(-180px)' }, { duration: 1.2, at: '-0.8' }],
          [partEuShapesRef.current, { transform: 'translateY(-128px)' }, { duration: 1.2, at: '-1.4' }],
          [partEuColorsUiRef.current, { transform: 'translateY(-180px)' }, { duration: 1.2, at: '-1.2' }],
          [partEuShapesUiRef.current, { transform: 'translateY(-220px)' }, { duration: 1.2, at: '-1.3' }],
          // EU - out
          [partEuArtRef.current, { transform: 'translateY(10px)' }, { duration: 1.2, at: '+1.3' }],
          [partEuColorsRef.current, { transform: 'translateY(100px)' }, { duration: 1.2, at: '-0.8' }],
          [partEuShapesRef.current, { transform: 'translateY(10px)' }, { duration: 1.2, at: '-1.4' }],
          [partEuColorsUiRef.current, { transform: 'translateY(10px)' }, { duration: 1.2, at: '-1.2' }],
          [partEuShapesUiRef.current, { transform: 'translateY(60px)' }, { duration: 1.2, at: '-1.3' }],
          // US - in
          [partUsArtRef.current, { transform: 'translateY(-246px)' }, { duration: 1.2 }],
          [partUsColorsRef.current, { transform: 'translateY(-180px)' }, { duration: 1.2, at: '-0.8' }],
          [partUsShapesRef.current, { transform: 'translateY(-128px)' }, { duration: 1.2, at: '-1.4' }],
          [partUsColorsUiRef.current, { transform: 'translateY(-180px)' }, { duration: 1.2, at: '-1.2' }],
          [partUsShapesUiRef.current, { transform: 'translateY(-220px)' }, { duration: 1.2, at: '-1.3' }],
          // US - out
          [partUsArtRef.current, { transform: 'translateY(10px)' }, { duration: 1.2, at: '+1.3' }],
          [partUsColorsRef.current, { transform: 'translateY(100px)' }, { duration: 1.2, at: '-0.8' }],
          [partUsShapesRef.current, { transform: 'translateY(10px)' }, { duration: 1.2, at: '-1.4' }],
          [partUsColorsUiRef.current, { transform: 'translateY(10px)' }, { duration: 1.2, at: '-1.2' }],
          [partUsShapesUiRef.current, { transform: 'translateY(60px)' }, { duration: 1.2, at: '-1.3' }]
        ],
        { repeat: Infinity, defaultOptions: { ease: 'ease-in-out' } }
      )
    }
  }, [])

  return (
    <div className='us-isomorphic overflow-hidden absolute mx-auto w-11/12 sm:w-full max-w-lg shadow-3xl border-2 border-brand-iridescent-blue z-10'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 416 250'
        className='relative w-full h-full z-10'
        aria-label='Make your own art'
      >
        {/* EU */}
        <image
          ref={partEuShapesRef}
          href={partEuShapes.src}
          alt='part-eu-shapes'
          width={458}
          height={275}
          x='49%'
          y='100%'
          className='w-1/2 h-auto'
        />
        <image
          ref={partEuColorsRef}
          href={partEuColors.src}
          alt='part-eu-colors'
          width={458}
          height={275}
          x='24%'
          y='100%'
          className='w-1/2 h-auto art-shadow'
        />
        <image
          ref={partEuArtRef}
          href={partEuArt.src}
          alt='part-eu-art'
          width={458}
          height={275}
          x='1%'
          y='100%'
          className='w-1/2 h-auto art-shadow'
        />
        <image
          ref={partEuColorsUiRef}
          href={partEuColorsUi.src}
          alt='part-eu-colors-ui'
          width={82}
          height={319}
          x='38%'
          y='100%'
          className='w-[41px] h-auto art-shadow'
        />
        <image
          ref={partEuShapesUiRef}
          href={partEuShapesUi.src}
          alt='part-eu-shapes-ui'
          width={273}
          height={378}
          x='60%'
          y='100%'
          className='w-[136px] h-auto art-shadow'
        />

        {/* US */}
        <image
          ref={partUsShapesRef}
          href={partUsShapes.src}
          alt='part-us-shapes'
          width={458}
          height={275}
          x='49%'
          y='100%'
          className='w-1/2 h-auto'
        />
        <image
          ref={partUsColorsRef}
          href={partUsColors.src}
          alt='part-us-colors'
          width={458}
          height={275}
          x='24%'
          y='100%'
          className='w-1/2 h-auto art-shadow'
        />
        <image
          ref={partUsArtRef}
          href={partUsArt.src}
          alt='part-us-art'
          width={458}
          height={275}
          x='1%'
          y='100%'
          className='w-1/2 h-auto art-shadow'
        />
        <image
          ref={partUsColorsUiRef}
          href={partUsColorsUi.src}
          alt='part-us-colors-ui'
          width={82}
          height={319}
          x='38%'
          y='100%'
          className='w-[41px] h-auto art-shadow'
        />
        <image
          ref={partUsShapesUiRef}
          href={partUsShapesUi.src}
          alt='part-us-shapes-ui'
          width={273}
          height={378}
          x='60%'
          y='100%'
          className=' w-[136px] h-auto art-shadow'
        />
      </svg>
      <div className='absolute top-0 w-full h-full bg-brand-deep-purple z-0' />
    </div>
  )
}

export default MakeYouOwnArt
