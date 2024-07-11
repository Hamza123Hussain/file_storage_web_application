'use client'
import React, { useContext, useEffect, useState } from 'react'
import FileItem from './FileItem'
import Loader from '../Loader'
import { ParentIdContext } from '@/utils/Context'
import { fetchData } from '@/functions/FetchDataFiles'
import { useUser } from '@auth0/nextjs-auth0/client'
const FileList = () => {
  const { FileData, setFileData, loading, setLoading } =
    useContext(ParentIdContext)
  const { user } = useUser()
  const Email = user?.email
  const Getdata = async () => {
    setLoading(true)
    const data = await fetchData(Email)
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

  if (FileData.length == 0) {
    return (
      <div className=" border-2 border-slate-700 p-10 flex mt-20 justify-center items-center">
        {' '}
        <h1>NO FILES STORED</h1>
      </div>
    )
  }

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
