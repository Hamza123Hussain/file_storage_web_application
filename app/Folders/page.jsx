'use client'
import { Folder } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import { GetFolders } from '@/functions/GetFolders'
import FolderItems from '@/components/Folder/FolderItems'
import Loader from '@/components/Loader'
import { useUser } from '@auth0/nextjs-auth0/client'

const FolderList = () => {
  const { user } = useUser()
  const [folderData, setFolderData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetFolders(user?.email)
        setFolderData(data.data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [folderData])

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )

  if (folderData.length == 0) {
    return (
      <div className=" border-2 border-slate-700 p-10 flex mt-20 justify-center items-center">
        {' '}
        <h1>NO FOLDERS STORED</h1>
      </div>
    )
  }

  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <div className=" flex justify-between">
        <h1 className=" text-xl font-extrabold">All Folders</h1>
      </div>
      <div className=" grid grid-cols-1 gap-2  sm:grid-cols-3 ">
        {folderData.map((element, index) => (
          <div key={index}>
            <FolderItems Folder={element} ICON={<Folder />} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FolderList
