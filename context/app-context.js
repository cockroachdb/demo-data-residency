import React, { createContext, useState } from 'react'
import { useSession } from 'next-auth/react'

import images from '../public/source-images.json'
import shapes from '../public/shape-paths.json'
import hex from '../public/svg-hex.json'
import patterns from '../public/pattern-paths.json'
import positions from '../public/position-classes.json'
import themes from '../public/silo-themes.json'

const defaultUsColors = new Array(15).fill('none')
const defaultEuColors = new Array(15).fill('none')
const defaultShapes = new Array(15).fill(shapes[24])
const defaultGrid = new Array(15).fill('')

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const { data: session } = useSession()

  const [values, setValues] = useState({
    us: {
      name: images.us[0].location,
      url: images.us[0].s3_url,
      colors: [...defaultUsColors],
      shapes: [...defaultShapes]
    },
    eu: {
      name: images.eu[0].location,
      url: images.eu[0].s3_url,
      colors: [...defaultEuColors],
      shapes: [...defaultShapes]
    },
    global: {
      pattern: {
        name: patterns[0].name,
        paths: patterns[0].paths
      },
      position: {
        name: positions[0].name,
        classes: positions[0].classes
      },
      theme: {
        name: themes[0].name,
        classes: themes[0].classes
      }
    }
  })

  const handleImageChange = (event, country) => {
    setValues((prevState) => ({
      ...prevState,
      [country]: { ...prevState[country], ...event }
    }))
  }

  const handleShapeChange = (event, country, index) => {
    const newShapes = values[country].shapes
    newShapes.splice(index, 1, shapes[event])

    const newColors = values[country].colors
    newColors.splice(index, 1, country === 'us' ? '#bb133e' : '#FFD700')

    setValues((prevState) => ({
      ...prevState,
      [country]: { ...prevState[country], shapes: newShapes, colors: newColors }
    }))
  }

  const handleColorChange = (event, country, index) => {
    const newColors = values[country].colors
    newColors.splice(index, 1, event)

    setValues((prevState) => ({
      ...prevState,
      [country]: { ...prevState[country], colors: newColors }
    }))
  }

  const handlePatternChange = (event) => {
    setValues((prevState) => ({
      ...prevState,
      global: {
        ...prevState.global,
        pattern: {
          ...event
        }
      }
    }))
  }

  const handlePositionChange = (event) => {
    setValues((prevState) => ({
      ...prevState,
      global: {
        ...prevState.global,
        position: {
          ...event
        }
      }
    }))
  }

  const handleThemeChange = (event) => {
    setValues((prevState) => ({
      ...prevState,
      global: {
        ...prevState.global,
        theme: {
          ...event
        }
      }
    }))
  }

  const handelSave = () => {
    console.log('handleSave: ', {
      user_id: session.user.id,
      values
    })
  }

  return (
    <AppContext.Provider
      value={{
        session: session,
        grid: defaultGrid,
        values,
        images: {
          us: images.us.filter((image) => image.source_url),
          eu: images.eu.filter((image) => image.source_url)
        },
        shapes: shapes,
        hex: {
          us: hex.us,
          eu: hex.eu
        },
        patterns: patterns.filter((pattern) => pattern.paths.length),
        positions: positions,
        themes: themes,
        handleImageChange,
        handleShapeChange,
        handleColorChange,
        handlePatternChange,
        handlePositionChange,
        handleThemeChange,
        handelSave
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
