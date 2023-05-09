import React, { useEffect, useRef } from 'react'
import { timeline } from 'motion'

import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion'

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

const duration = 0.6
const offset = 0.14
const pause = 2
let tl = null

const MakeYouOwnArtAnimation = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const gEuRef = useRef()
  const partEuArtRef = useRef()
  const partEuColorsRef = useRef()
  const partEuShapesRef = useRef()
  const partEuColorsUiRef = useRef()
  const partEuShapesUiRef = useRef()

  const gUsRef = useRef()
  const partUsArtRef = useRef()
  const partUsColorsRef = useRef()
  const partUsShapesRef = useRef()
  const partUsColorsUiRef = useRef()
  const partUsShapesUiRef = useRef()

  const refsReady = [
    gEuRef,
    partEuArtRef,
    partEuColorsRef,
    partEuShapesRef,
    partEuColorsUiRef,
    partEuShapesUiRef,
    gUsRef,
    partUsArtRef,
    partUsColorsRef,
    partUsShapesRef,
    partUsColorsUiRef,
    partUsShapesUiRef
  ].every((ref) => ref.current !== null)

  useEffect(() => {
    if (refsReady) {
      tl = timeline(
        [
          // EU out
          [gEuRef.current, { opacity: 1 }, { duration: pause }],
          [partEuArtRef.current, { transform: 'translate(-220px, 3px)' }, { duration: duration }],
          [
            partEuColorsRef.current,
            { transform: 'translate(118px, -140px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partEuShapesRef.current,
            { transform: 'translate(430px, 120px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partEuColorsUiRef.current,
            { transform: 'translate(154px, 260px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partEuShapesUiRef.current,
            { transform: 'translate(252px, -220px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          // US in
          [partUsArtRef.current, { transform: 'translate(204px, 100px)' }, { duration: duration }],
          [
            partUsColorsRef.current,
            { transform: 'translate(104px, 4px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partUsShapesRef.current,
            { transform: 'translate(4px, 120px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partUsColorsUiRef.current,
            { transform: 'translate(350px, 40px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partUsShapesUiRef.current,
            { transform: 'translate(20px, 20px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [gUsRef.current, { opacity: 1 }, { duration: pause }],
          // Us out
          [partUsArtRef.current, { transform: 'translate(204px, -130px)' }, { duration: duration }],
          [
            partUsColorsRef.current,
            { transform: 'translate(-220px, 4px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partUsShapesRef.current,
            { transform: 'translate(4px, 250px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partUsColorsUiRef.current,
            { transform: 'translate(350px, 250px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partUsShapesUiRef.current,
            { transform: 'translate(-150px, 20px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          // EU in
          [partEuArtRef.current, { transform: 'translate(4px, 3px)' }, { duration: duration }],
          [
            partEuColorsRef.current,
            { transform: 'translate(118px, 66px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partEuShapesRef.current,
            { transform: 'translate(204px, 120px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partEuColorsUiRef.current,
            { transform: 'translate(154px, 60px)' },
            { duration: duration, at: `-${duration + offset}` }
          ],
          [
            partEuShapesUiRef.current,
            { transform: 'translate(252px, 20px)' },
            { duration: duration, at: `-${duration + offset}` }
          ]
        ],
        {
          repeat: Infinity,
          defaultOptions: { ease: 'ease-out' }
        }
      )
    }
  }, [refsReady])

  useEffect(() => {
    if (prefersReducedMotion) {
      tl.stop()
    } else {
      tl.play()
    }
  }, [prefersReducedMotion])

  return (
    <div className='overflow-hidden absolute mx-auto w-11/12 sm:w-full max-w-lg shadow-3xl border-2 border-depth-2 z-10'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 416 250'
        className='relative w-full h-full z-10'
        aria-label='Make your own art animation'
      >
        <g ref={gEuRef}>
          {/* EU */}
          <image
            ref={partEuShapesRef}
            href={partEuShapes.src}
            alt='part-eu-shapes'
            width={458}
            height={275}
            className='w-1/2 h-auto'
            style={{
              transform: 'translate(204px, 120px)'
            }}
          />
          <image
            ref={partEuColorsRef}
            href={partEuColors.src}
            alt='part-eu-colors'
            width={458}
            height={275}
            className='w-1/2 h-auto art-shadow'
            style={{
              transform: 'translate(118px, 66px)'
            }}
          />
          <image
            ref={partEuArtRef}
            href={partEuArt.src}
            alt='part-eu-art'
            width={458}
            height={275}
            className='w-1/2 h-auto art-shadow'
            style={{
              transform: 'translate(4px, 3px)'
            }}
          />
          <image
            ref={partEuColorsUiRef}
            href={partEuColorsUi.src}
            alt='part-eu-colors-ui'
            width={82}
            height={319}
            className='w-[41px] h-auto art-shadow'
            style={{
              transform: 'translate(154px, 60px)'
            }}
          />
          <image
            ref={partEuShapesUiRef}
            href={partEuShapesUi.src}
            alt='part-eu-shapes-ui'
            width={273}
            height={378}
            className='w-[136px] h-auto art-shadow'
            style={{
              transform: 'translate(252px, 20px)'
            }}
          />
        </g>

        <g ref={gUsRef}>
          {/* US */}
          <image
            ref={partUsColorsRef}
            href={partUsColors.src}
            alt='part-us-colors'
            width={458}
            height={275}
            className='w-1/2 h-auto art-shadow'
            style={{
              transform: 'translate(-220px, 4px)'
            }}
          />
          <image
            ref={partUsShapesRef}
            href={partUsShapes.src}
            alt='part-us-shapes'
            width={458}
            height={275}
            className='w-1/2 h-auto'
            style={{
              transform: 'translate(4px, 250px)'
            }}
          />
          <image
            ref={partUsArtRef}
            href={partUsArt.src}
            alt='part-us-art'
            width={458}
            height={275}
            className='w-1/2 h-auto art-shadow'
            style={{
              transform: 'translate(204px, -130px)'
            }}
          />
          <image
            ref={partUsColorsUiRef}
            href={partUsColorsUi.src}
            alt='part-us-colors-ui'
            width={82}
            height={319}
            className='w-[41px] h-auto art-shadow'
            style={{
              transform: 'translate(350px, 250px)'
            }}
          />
          <image
            ref={partUsShapesUiRef}
            href={partUsShapesUi.src}
            alt='part-us-shapes-ui'
            width={273}
            height={378}
            className=' w-[136px] h-auto art-shadow'
            style={{
              transform: 'translate(-150px, 20px)'
            }}
          />
        </g>
      </svg>
      <div className='absolute top-0 w-full h-full bg-depth-0 z-0' />
    </div>
  )
}

export default MakeYouOwnArtAnimation
