import React, { createContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useMutation, useQuery } from '@tanstack/react-query'

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
  const { data: session, status } = useSession()

  const defaultValues = {
    us: {
      name: images.us[0].location,
      credit: images.us[0].credit,
      url: images.us[0].s3_url,
      colors: [...defaultUsColors],
      shapes: [...defaultShapes]
    },
    eu: {
      name: images.eu[0].location,
      credit: images.eu[0].credit,
      url: images.eu[0].s3_url,
      colors: [...defaultEuColors],
      shapes: [...defaultShapes]
    },
    global: {
      pattern: {
        name: patterns[0].name,
        id: patterns[0].id,
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
  }

  const [values, setValues] = useState(defaultValues)

  const {
    data,
    isLoading: queryIsLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['user-query'],
    queryFn: async () => {
      if (session) {
        try {
          // const response = await fetch(`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/api/user`, {
          const response = await fetch(`${process.env.NEXT_PUBLIC_AWS_API_URL}/user`, {
            method: 'POST',
            body: JSON.stringify({ user_id: session.user.id })
          })

          if (!response.ok) {
            throw new Error(response.statusText)
          }
          const json = await response.json()

          return json.data
        } catch (error) {
          console.error(error)
        }
      } else {
        return defaultValues
      }
    },
    onSuccess: async (data) => {
      // console.log('query onSuccess: ', data)

      const { local, global } = data

      setValues({
        us: local?.us || defaultValues.us,
        eu: local?.eu || defaultValues.eu,
        global: global || defaultValues.global
      })
    },
    enabled: false
  })

  useEffect(() => {
    // This is the nextAuth status
    // console.log(status)
    if (status !== 'loading') {
      setTimeout(() => {
        refetch()
      }, 1000)
    }
  }, [status])

  const handleLocalSave = useMutation(
    async ({ regionId, regionName }) => {
      try {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/api/artlocal`, {
        const response = await fetch(`${process.env.NEXT_PUBLIC_AWS_API_URL}/artlocal`, {
          method: 'POST',
          body: JSON.stringify({
            user_id: session.user.id,
            username: session.user.name,
            region: regionName,
            values: values[regionId]
          })
        })

        if (!response.ok) {
          throw new Error(response.statusText)
        }
      } catch (error) {
        console.error(error)
      }
    },
    {
      onSuccess: async () => {
        // refetch()
      }
    }
  )

  const handleGlobalSave = useMutation(
    async ({ regionId }) => {
      try {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/api/artglobal`, {
        const response = await fetch(`${process.env.NEXT_PUBLIC_AWS_API_URL}/artglobal`, {
          method: 'POST',
          body: JSON.stringify({
            user_id: session.user.id,
            username: session.user.name,
            values: values[regionId]
          })
        })

        if (!response.ok) {
          throw new Error(response.statusText)
        }
      } catch (error) {
        console.error(error)
      }
    },
    {
      onSuccess: async () => {
        // refetch()
      }
    }
  )

  const handleImageChange = (event, regionId, credit) => {
    setValues((prevState) => ({
      ...prevState,
      [regionId]: { ...prevState[regionId], ...event }
    }))
  }

  const handleShapeChange = (event, regionId, index) => {
    const newShapes = values[regionId].shapes
    newShapes.splice(index, 1, shapes[event])

    const newColors = values[regionId].colors
    newColors.splice(index, 1, '#fcfcfc') // default colors when shape is created

    setValues((prevState) => ({
      ...prevState,
      [regionId]: { ...prevState[regionId], shapes: newShapes, colors: newColors }
    }))
  }

  const handleColorChange = (event, regionId, index) => {
    const newColors = values[regionId].colors
    newColors.splice(index, 1, event)

    setValues((prevState) => ({
      ...prevState,
      [regionId]: { ...prevState[regionId], colors: newColors }
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

  return (
    <AppContext.Provider
      value={{
        session: session,
        grid: defaultGrid,
        values,
        queryIsLoading,
        globalIsLoading: handleGlobalSave.isLoading,
        globalIsDisabled: [data?.local?.eu, data?.local?.us].some((value) => value === null),
        localIsLoading: handleLocalSave.isLoading,
        isError,
        images: {
          us: images.us.filter((image) => image.source_url),
          eu: images.eu.filter((image) => image.source_url)
        },
        shapes: shapes,
        hex: {
          us: hex.us,
          eu: hex.eu
        },
        patterns: patterns,
        positions: positions,
        themes: themes,
        handleImageChange,
        handleShapeChange,
        handleColorChange,
        handlePatternChange,
        handlePositionChange,
        handleThemeChange,
        handleLocalSave,
        handleGlobalSave
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
