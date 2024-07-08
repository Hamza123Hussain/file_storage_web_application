// lib/ParentIdContext.js
'use client'
import React, { createContext, useState } from 'react'

export const ParentIdContext = createContext()

export const ParentIdProvider = ({ children }) => {
  const [parentId, setParentId] = useState(null)

  return (
    <ParentIdContext.Provider value={{ parentId, setParentId }}>
      {children}
    </ParentIdContext.Provider>
  )
}
