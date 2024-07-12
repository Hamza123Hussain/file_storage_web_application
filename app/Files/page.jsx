'use client'
import React, { useContext, useEffect } from 'react'
import Loader from '@/components/Loader'
import FileItem from '@/components/Files/FileItem'
import { ParentIdContext } from '@/utils/Context'
import { useUser } from '@auth0/nextjs-auth0/client'
import CreateFileBTN from '@/components/Files/CreateFile'

const Files = () => {
  const { user } = useUser()
  const { FileData, setFileData, setLoading, loading, GetfileData } =
    useContext(ParentIdContext)

  useEffect(() => {
    if (user?.email) {
      GetfileData()
    }
  }, [user?.email])

  if (FileData.length === 0 && !loading) {
    return (
      <div className="border-2 gap-3 sm:gap-5 rounded-lg border-slate-700 p-10 flex flex-col mt-20 justify-center items-center">
        <h1 className="font-bold text-lg sm:text-xl">NO FILES STORED</h1>
        <CreateFileBTN />
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center">
        <Loader />
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
