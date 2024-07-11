'use client'
import { Folder } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import FolderItems from './FolderItems'
import Loader from '../Loader'
import Link from 'next/link'
import { ParentIdContext } from '@/utils/Context'
import { fetchFolderData } from '@/functions/Fetchfolderdata'

const FolderList = () => {
  const { folderData, setFolderData, loading, setLoading } =
    useContext(ParentIdContext)

  const [error, setError] = useState(null)

  const GetFolderData = async () => {
    setLoading(true)
    const data = await fetchFolderData()
    setFolderData(data)
  }

  useEffect(() => {
    GetFolderData()
  }, [])

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )

  if (folderData.length > 0) {
    setLoading(false)
  }
  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <div className=" flex justify-between">
        <h1 className=" text-xl font-extrabold">Recent Folders</h1>
        <Link href={'/Folders'} className=" hover:text-blue-500 text-blue-300">
          View All
        </Link>
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
