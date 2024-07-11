'use client'
import React, { useContext, useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import FileItem from '@/components/Files/FileItem'
import { GetFiles } from '@/functions/GetFiles'
import { ParentIdContext } from '@/utils/Context'
import { useUser } from '@auth0/nextjs-auth0/client'

const Files = () => {
  const { user } = useUser()
  const Email = user?.email
  const { FileData, setFileData, loading, setLoading } =
    useContext(ParentIdContext)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await GetFiles(Email)
        setFileData(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    if (Email) {
      fetchData()
    }
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
    <div className="bg-white mt-4 p-3 rounded-lg">
      <h1 className="text-xl font-extrabold">All Files</h1>
      <div className="grid grid-cols-1 gap-2">
        {FileData.map((element) => (
          <div key={element.id}>
            <FileItem File={element} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Files
