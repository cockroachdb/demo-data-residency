import React, { createContext, useState } from 'react'

import images from '../public/source-images.json'
import shapes from '../public/svg-paths.json'
import hex from '../public/svg-hex.json'

const defaultUsColors = new Array(15).fill('none')
const defaultEuColors = new Array(15).fill('none')
const defaultShapes = new Array(15).fill(shapes[24])
const defaultGrid = new Array(15).fill('')

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [values, setValues] = useState({
    us: {
      name: images.us[1].location,
      url: images.us[1].s3_url,
      colors: [...defaultUsColors],
      shapes: [...defaultShapes]
    },
    eu: {
      name: images.eu[1].location,
      url: images.eu[1].s3_url,
      colors: [...defaultEuColors],
      shapes: [...defaultShapes]
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

  return (
    <AppContext.Provider
      value={{
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
        handleImageChange,
        handleShapeChange,
        handleColorChange
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
