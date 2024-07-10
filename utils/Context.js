// lib/ParentIdContext.js
'use client'
import React, { createContext, useState } from 'react'

export const ParentIdContext = createContext()

export const ParentIdProvider = ({ children }) => {
  const [parentId, setParentId] = useState(null)
  const [SearchState, setSearchState] = useState(false)
  const [searchData, setsearchdata] = useState([])
  const [loading, setLoading] = useState(false)
  return (
    <ParentIdContext.Provider
      value={{
        parentId,
        setParentId,
        SearchState,
        setSearchState,
        searchData,
        setsearchdata,
        loading,
        setLoading,
      }}
    >
      {children}
    </ParentIdContext.Provider>
  )
}
