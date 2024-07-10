'use client'
import React, { useContext, useEffect, useState } from 'react'
import FileItem from './FileItem'
import Loader from '../Loader'
import { ParentIdContext } from '@/utils/Context'
import { fetchData } from '@/functions/FetchDataFiles'
const FileList = () => {
  const { FileData, setFileData, loading, setLoading } =
    useContext(ParentIdContext)

  const Getdata = async () => {
    setLoading(true)
    const data = await fetchData()
    if (data) {
      console.log('DATA FETCHED', data)
      setFileData(data)
      setLoading(false)
    }
  }

  useEffect(() => {
    Getdata()
  }, [])

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )

  // if (FileData.length > 1) console.log('File data:', FileData)

  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <h1 className=" text-xl font-extrabold">Recent Files</h1>
      <div className=" grid grid-cols-1 gap-2   ">
        {FileData.map((element) => {
          return (
            <div key={element.id}>
              <FileItem File={element} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FileList
