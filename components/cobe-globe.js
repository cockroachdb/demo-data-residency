import React, { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

import { hexToRgb } from '../utils/hex-to-rgb'

const CobeGlobe = () => {
  const canvasRef = useRef()
  const markerScale = 0.1

  const regions = {
    eucentral1: {
      name: 'eu-central-1',
      lat: 50.110924,
      long: 8.682127
    },
    useast1: {
      name: 'us-east-1',
      lat: 37.44228,
      long: -76.420822
    },
    uswest2: {
      name: 'us-west-2',
      lat: 43.804134,
      long: -120.554199
    }
  }

  useEffect(() => {
    let width = 0
    let phi = 0

    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 300,
      phi: 0,
      theta: 0.3,
      dark: 0.7,
      diffuse: 0.5,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 8,
      baseColor: hexToRgb('#2f1773'),
      markerColor: hexToRgb('#00fced'),
      glowColor: hexToRgb('#583aad'),
      offset: [0, 0],
      opacity: 0.4,
      markers: [
        { location: [regions.eucentral1.lat, regions.eucentral1.long], size: markerScale },
        { location: [regions.useast1.lat, regions.useast1.long], size: markerScale },
        { location: [regions.uswest2.lat, regions.uswest2.long], size: markerScale }
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.005
        state.width = width * 2
        state.height = width * 2
      }
    })
    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <div className='relative'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 300 300'
        className='relative w-full h-full'
        aria-label='3D globe'
      ></svg>
      <canvas ref={canvasRef} className='absolute top-0 w-full h-full' />
    </div>
  )
}

export default CobeGlobe
