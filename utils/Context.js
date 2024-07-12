// lib/ParentIdContext.js
'use client'
import { GetFiles } from '@/functions/GetFiles'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { createContext, useState } from 'react'

export const ParentIdContext = createContext()

export const ParentIdProvider = ({ children }) => {
  const [parentId, setParentId] = useState(null)
  const [SearchState, setSearchState] = useState(false)
  const [searchData, setsearchdata] = useState([])
  const [loading, setLoading] = useState(false)
  const [FileData, setFileData] = useState([])
  const [totalsize, settotalsize] = useState(0) // Initialize as empty array

  const [folderData, setFolderData] = useState([])
  const [trashData, settrashData] = useState([])

  const { user } = useUser()
  const Email = user?.email
  const GetfileData = async () => {
    try {
      setLoading(true)
      const data = await GetFiles(Email)
      setFileData(data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }
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
        GetfileData,
        setFolderData,
        trashData,
        settrashData,
        totalsize,
        settotalsize,
      }}
    >
      {children}
    </ParentIdContext.Provider>
  )
}
