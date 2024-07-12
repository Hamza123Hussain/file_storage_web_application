'use client'
import { Folder } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import FolderItems from './FolderItems'
import Loader from '../Loader'
import Link from 'next/link'
import { ParentIdContext } from '@/utils/Context'
import { fetchFolderData } from '@/functions/Fetchfolderdata'
import { useUser } from '@auth0/nextjs-auth0/client'
import Folderbtn from './CreateFolderBtn'

const FolderList = () => {
  const { folderData, setFolderData, loading, setLoading } =
    useContext(ParentIdContext)

  const [error, setError] = useState(null)
  const { user } = useUser()
  const GetFolderData = async () => {
    try {
      const data = await fetchFolderData(user?.email)
      setFolderData(data)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    GetFolderData()
  }, [])

  if (folderData.length == 0) {
    return (
      <div className=" border-2 gap-3 sm:gap-5 rounded-lg border-slate-700 p-10 flex flex-col mt-20 justify-center items-center">
        {' '}
        <h1 className=" font-bold text-lg sm:text-xl">NO FOLDERS STORED</h1>
        <Folderbtn />
      </div>
    )
  }

  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <div className="flex justify-between">
        <h1 className="text-xl font-extrabold">Recent Folders</h1>
        <Link href={'/Folders'} className="hover:text-blue-500 text-blue-300">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
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
