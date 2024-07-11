// lib/ParentIdContext.js
'use client'
import React, { createContext, useState } from 'react'

export const ParentIdContext = createContext()

export const ParentIdProvider = ({ children }) => {
  const [parentId, setParentId] = useState(null)
  const [SearchState, setSearchState] = useState(false)
  const [searchData, setsearchdata] = useState([])
  const [loading, setLoading] = useState(false)
  const [FileData, setFileData] = useState([])
  const [folderData, setFolderData] = useState([])
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
        FileData,
        setFileData,
        folderData,
        setFolderData,
      }}
    >
      {children}
    </ParentIdContext.Provider>
  )
}
