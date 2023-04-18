import React, { useEffect, useState, useRef } from 'react'
import createGlobe from 'cobe'
import * as Select from '@radix-ui/react-select'

import RadixSelect from './radix-select'

const CobeGlobe = () => {
  const canvasRef = useRef()
  const focusRef = useRef(['', 0, 0])
  const markerScale = 0.07

  const [value, setValue] = useState('Select country...')

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

  const locations = {
    // locations
    France: {
      flag: '🇫🇷',
      region: regions.eucentral1
    },
    Norway: {
      flag: '🇳🇴',
      region: regions.eucentral1
    },
    Spain: {
      flag: '🇪🇸',
      region: regions.eucentral1
    },
    Sweden: {
      flag: '🇸🇪',
      region: regions.eucentral1
    },
    Ukraine: {
      flag: '🇺🇦',
      region: regions.eucentral1
    },

    // Asia
    China: {
      flag: '🇨🇳',
      region: regions.useast1
    },
    India: {
      flag: '🇮🇳',
      region: regions.useast1
    },
    Kazakhstan: {
      flag: '🇰🇿',
      region: regions.useast1
    },
    'Saudi Arabia': {
      flag: '🇸🇦',
      region: regions.useast1
    },
    Turkey: {
      flag: '🇹🇷',
      region: regions.useast1
    },

    // Africa
    Algeria: {
      flag: '🇩🇿',
      region: regions.useast1
    },
    Chad: {
      flag: '🇹🇩',
      region: regions.useast1
    },
    Libya: {
      flag: '🇱🇾',
      region: regions.useast1
    },
    Niger: {
      flag: '🇳🇪',
      region: regions.useast1
    },
    Sudan: {
      flag: '🇸🇩',
      region: regions.useast1
    },

    // north America
    Canada: {
      flag: '🇨🇦',
      region: regions.useast1
    },
    Greenland: {
      flag: '🇬🇱',
      region: regions.useast1
    },
    Mexico: {
      flag: '🇲🇽',
      region: regions.useast1
    },
    'United States': {
      flag: '🇺🇸',
      region: regions.useast1
    },
    Nicaragua: {
      flag: '🇳🇮',
      region: regions.useast1
    },

    // south America
    Argentina: {
      flag: '🇦🇷',
      region: regions.useast1
    },
    Brazil: {
      flag: '🇧🇷',
      region: regions.useast1
    },
    Colombia: {
      flag: '🇨🇴',
      region: regions.useast1
    },
    Peru: {
      flag: '🇵🇪',
      region: regions.useast1
    },
    Venezuela: {
      flag: '🇻🇪',
      region: regions.useast1
    },

    // australia/oceania
    Australia: {
      flag: '🇦🇺',
      region: regions.useast1
    },
    Indonesia: {
      flag: '🇮🇩',
      region: regions.useast1
    },
    'Papua New Guinea': {
      flag: '🇵🇬',
      region: regions.useast1
    },
    'New Zealand': {
      flag: '🇳🇿',
      region: regions.useast1
    },
    'Solomon Islands': {
      flag: '🇸🇧',
      region: regions.useast1
    }
  }

  const locationToAngles = (name, lat, long) => {
    return [name, Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
  }

  useEffect(() => {
    let width = 0
    let currentPhi = 0
    let currentTheta = 0
    const doublePi = Math.PI * 2

    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 500,
      height: 500,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      scale: 1.2,
      mapSamples: 16000,
      mapBrightness: 4,
      baseColor: [59 / 255, 31 / 255, 132 / 255],
      markerColor: [1 / 255, 252 / 255, 237 / 255],
      glowColor: [72 / 255, 46 / 255, 142 / 255],
      offset: [0, 0],
      markers: [
        { location: [regions.eucentral1.lat, regions.eucentral1.long], size: markerScale },
        { location: [regions.useast1.lat, regions.useast1.long], size: markerScale },
        { location: [regions.uswest2.lat, regions.uswest2.long], size: markerScale }
      ],
      onRender: (state) => {
        state.phi = currentPhi
        state.theta = currentTheta
        const [_, focusPhi, focusTheta] = focusRef.current
        const distPositive = (focusPhi - currentPhi + doublePi) % doublePi
        const distNegative = (currentPhi - focusPhi + doublePi) % doublePi
        // Control the speed
        if (distPositive < distNegative) {
          currentPhi += distPositive * 0.08
        } else {
          currentPhi -= distNegative * 0.08
        }
        currentTheta = currentTheta * 0.92 + focusTheta * 0.08
        state.width = width * 2
        state.height = width * 2
      }
    })
    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <div className='flex flex-col gap-16 justify-center mx-auto max-w-lg'>
      <RadixSelect
        trigger={
          <Select.Trigger className='inline-flex self-center items-center justify-between text-left px-4 gap-4 bg-brand-deep-purple border-brand-evening-hush text-brand-evening-hush hover:bg-depth-0 w-60'>
            <Select.Value aria-label={value}>{value}</Select.Value>
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
        value={value}
        onChange={(event) => {
          const { name, lat, long } = event
          focusRef.current = locationToAngles(name, lat, long)
          setValue(name)
        }}
      >
        <Select.Group>
          {Object.entries(locations).map((item, index) => {
            const {
              flag,
              region: { lat, long }
            } = item[1]
            const country = `${flag} ${item[0]}`
            return (
              <Select.Item
                key={index}
                value={{
                  name: country,
                  lat: lat,
                  long: long
                }}
                className='px-4 py-3 whitespace-nowrap cursor-pointer bg-brand-deep-purple border-b border-b-brand-evening-hush/30 hover:bg-depth-2'
              >
                {country}
              </Select.Item>
            )
          })}
        </Select.Group>
      </RadixSelect>
      <pre className='m-0'>SELECT * from art WHERE region = process.env.AWS_REGION</pre>
      <canvas ref={canvasRef} className='max-w-md mx-auto w-full h-full aspect-square' />
    </div>
  )
}

export default CobeGlobe
