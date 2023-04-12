import React, { createContext, useState } from 'react'

import sourceImages from '../public/source-images.json'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [values, setValues] = useState({
    us: {
      name: sourceImages.us[0].location,
      url: sourceImages.us[0].s3_url
    },
    eu: {
      name: sourceImages.eu[0].location,
      url: sourceImages.eu[0].s3_url
    }
  })

  const handleImageChange = (event, country) => {
    setValues({ ...values, [country]: { ...event } })
  }

  return (
    <AppContext.Provider
      value={{
        foo: 'bar',
        values,
        images: {
          us: sourceImages.us.filter((image) => image.source_url),
          eu: sourceImages.eu.filter((image) => image.source_url)
        },
        handleImageChange
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
