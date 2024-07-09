'use client'
import { Folder } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import FolderItems from './FolderItems'
import { GetFolder } from '@/functions/GetFolder'
import Loader from '../Loader'

const FolderList = () => {
  const [folderData, setFolderData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetFolder()
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

  // if (folderData.length > 1) console.log('Folder data:', folderData)

  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <div className=" flex justify-between">
        <h1 className=" text-xl font-extrabold">Recent Folders</h1>
        <h6 className=" text-blue-300">View All</h6>
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
