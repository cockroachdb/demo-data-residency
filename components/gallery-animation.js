import React, { useEffect, useRef } from 'react'
import { timeline } from 'motion'

import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion'

import galleryEu1 from '../public/images/gallery-eu-1.jpg'
import galleryEu2 from '../public/images/gallery-eu-2.jpg'
import galleryEu3 from '../public/images/gallery-eu-3.jpg'
import galleryEu4 from '../public/images/gallery-eu-4.jpg'

import galleryUs1 from '../public/images/gallery-us-1.jpg'
import galleryUs2 from '../public/images/gallery-us-2.jpg'
import galleryUs3 from '../public/images/gallery-us-3.jpg'
import galleryUs4 from '../public/images/gallery-us-4.jpg'

const duration = 0.4
const offset = 0.1
const pause = 4
let tl = null

const GalleryAnimation = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const gEuRef = useRef()
  const galleryEu1Ref = useRef()
  const galleryEu2Ref = useRef()
  const galleryEu3Ref = useRef()
  const galleryEu4Ref = useRef()

  const gUsRef = useRef()
  const galleryUs1Ref = useRef()
  const galleryUs2Ref = useRef()
  const galleryUs3Ref = useRef()
  const galleryUs4Ref = useRef()

  const refsReady = [
    gEuRef,
    galleryEu1Ref,
    galleryEu2Ref,
    galleryEu3Ref,
    galleryEu4Ref,
    gUsRef,
    galleryUs1Ref,
    galleryUs2Ref,
    galleryUs3Ref,
    galleryUs4Ref
  ].every((ref) => ref.current !== null)

  useEffect(() => {
    if (refsReady) {
      tl = timeline(
        [
          [galleryUs4Ref.current, { scale: 0 }, { duration: 0 }],
          [galleryUs3Ref.current, { scale: 0 }, { duration: 0 }],
          [galleryUs2Ref.current, { scale: 0 }, { duration: 0 }],
          [galleryUs1Ref.current, { scale: 0 }, { duration: 0 }],

          [gEuRef.current, { opacity: 1 }, { duration: pause }],
          [galleryEu1Ref.current, { scale: 0 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryUs1Ref.current, { scale: 1 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryEu2Ref.current, { scale: 0 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryUs2Ref.current, { scale: 1 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryEu4Ref.current, { scale: 0 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryUs4Ref.current, { scale: 1 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryEu3Ref.current, { scale: 0 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryUs3Ref.current, { scale: 1 }, { duration: duration, at: `-${duration + offset}` }],

          [gUsRef.current, { opacity: 1 }, { duration: pause }],
          [galleryUs1Ref.current, { scale: 0 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryEu1Ref.current, { scale: 1 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryUs2Ref.current, { scale: 0 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryEu2Ref.current, { scale: 1 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryUs4Ref.current, { scale: 0 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryEu4Ref.current, { scale: 1 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryUs3Ref.current, { scale: 0 }, { duration: duration, at: `-${duration + offset}` }],
          [galleryEu3Ref.current, { scale: 1 }, { duration: duration, at: `-${duration + offset}` }]
        ],
        {
          repeat: Infinity,
          defaultOptions: { ease: 'ease-in-out' }
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
    <div className='eu-isomorphic overflow-hidden absolute mx-auto w-11/12 sm:w-full max-w-lg shadow-3xl border-2 border-depth-2 z-10'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 400 250'
        className='relative w-full h-full z-10'
        aria-label='Gallery animation'
      >
        <g ref={gEuRef}>
          {/* EU */}
          <g
            style={{
              transform: 'translate(8px, 8px)'
            }}
          >
            <image
              ref={galleryEu1Ref}
              href={galleryEu1.src}
              alt='gallery-eu-1'
              width={323}
              height={194}
              className='w-[47%] h-auto art-shadow'
              style={{
                transformOrigin: 'bottom right',
                transformBox: 'fill-box',
                scale: 1
              }}
            />
          </g>

          <g
            style={{
              transform: 'translate(204px, 8px)'
            }}
          >
            <image
              ref={galleryEu2Ref}
              href={galleryEu2.src}
              alt='gallery-eu-2'
              width={323}
              height={194}
              className='w-[47%] h-auto art-shadow'
              style={{
                transformOrigin: 'bottom left',
                transformBox: 'fill-box',
                scale: 1
              }}
            />
          </g>

          <g
            style={{
              transform: 'translate(8px, 130px)'
            }}
          >
            <image
              ref={galleryEu3Ref}
              href={galleryEu3.src}
              alt='gallery-eu-3'
              width={323}
              height={194}
              className='w-[47%] h-auto art-shadow'
              style={{
                transformOrigin: 'top right',
                transformBox: 'fill-box',
                scale: 1
              }}
            />
          </g>

          <g
            style={{
              transform: 'translate(204px, 130px)'
            }}
          >
            <image
              ref={galleryEu4Ref}
              href={galleryEu4.src}
              alt='gallery-eu-4'
              width={323}
              height={194}
              className='w-[47%] h-auto art-shadow'
              style={{
                transformOrigin: 'top left',
                transformBox: 'fill-box',
                scale: 1
              }}
            />
          </g>
        </g>

        <g ref={gUsRef}>
          {/* US */}

          <g
            style={{
              transform: 'translate(8px, 8px)'
            }}
          >
            <image
              ref={galleryUs1Ref}
              href={galleryUs1.src}
              alt='gallery-us-1'
              width={323}
              height={194}
              className='w-[47%] h-auto art-shadow'
              style={{
                transformOrigin: 'bottom right',
                transformBox: 'fill-box',
                scale: 1
              }}
            />
          </g>

          <g
            style={{
              transform: 'translate(204px, 8px)'
            }}
          >
            <image
              ref={galleryUs2Ref}
              href={galleryUs2.src}
              alt='gallery-us-2'
              width={323}
              height={194}
              className='w-[47%] h-auto art-shadow'
              style={{
                transformOrigin: 'bottom left',
                transformBox: 'fill-box',
                scale: 1
              }}
            />
          </g>

          <g
            style={{
              transform: 'translate(8px, 130px)'
            }}
          >
            <image
              ref={galleryUs3Ref}
              href={galleryUs3.src}
              alt='gallery-us-3'
              width={323}
              height={194}
              className='w-[47%] h-auto art-shadow'
              style={{
                transformOrigin: 'top right',
                transformBox: 'fill-box',
                scale: 1
              }}
            />
          </g>

          <g
            style={{
              transform: 'translate(204px, 130px)'
            }}
          >
            <image
              ref={galleryUs4Ref}
              href={galleryUs4.src}
              alt='gallery-us-4'
              width={323}
              height={194}
              className='w-[47%] h-auto art-shadow'
              style={{
                transformOrigin: 'top left',
                transformBox: 'fill-box',
                scale: 1
              }}
            />
          </g>
        </g>
      </svg>
      <div className='absolute top-0 w-full h-full bg-brand-deep-purple z-0' />
    </div>
  )
}

export default GalleryAnimation
