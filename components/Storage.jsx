'use client'
import React, { useContext, useEffect, useState } from 'react'
import ImageStorage from './Files/FileTypes/Image'
import VideoStore from './Files/FileTypes/Video'
import DocumentStore from './Files/FileTypes/Document'
import PDF from './Files/FileTypes/Pdf'
import Other from './Files/FileTypes/Other'
import { GetFiles } from '@/functions/GetFiles'
import { ParentIdContext } from '@/utils/Context'
import Loader from './Loader'
import { useUser } from '@auth0/nextjs-auth0/client'

const Storage = () => {
  const [error, setError] = useState(null)
  const { totalsize, settotalsize, FileData, setFileData } =
    useContext(ParentIdContext)
  const { user } = useUser()
  const GetfileData = async () => {
    // setLoading(true)
    const data = await GetFiles(user?.email)
    setFileData(data)
    // setLoading(false)
  }

  useEffect(() => {
    GetfileData()
  }, [])

  // Calculate total number of files and their cumulative size using reduce
  const { totalSize } = FileData.reduce(
    (accumulator, file) => {
      accumulator.totalSize += file.size // Assuming each file object in FileData has a 'size' property
      return accumulator
    },
    { totalSize: 0 }
  )

  settotalsize(totalSize)
  const SizeConsumed = (totalSize / 10000).toFixed(2) * 100

  if (FileData.length == 0) {
    return (
      <div className=" border-2 gap-3 sm:gap-5 rounded-lg border-slate-700 p-10 flex flex-col mt-20 justify-center items-center">
        {' '}
        <h1 className=" font-bold text-lg sm:text-xl">No Files Stored</h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 ">
      <h1 className=" text-lg font-bold">Storage Details</h1>
      <div className=" flex flex-col">
        <h1 className=" font-bold">
          {(totalsize / 1024).toFixed(2)} GB OUT OF 5 GB
        </h1>
        <div className=" border-2 h-fit ">
          {' '}
          <div
            style={{ width: `${SizeConsumed}%` }}
            className={`${
              SizeConsumed >= 80
                ? 'bg-red-500'
                : SizeConsumed >= 50
                ? 'bg-yellow-500'
                : 'bg-green-600'
            }  = text-transparent h-[12px]`}
          >
            {SizeConsumed}%
          </div>{' '}
        </div>
      </div>
      <div className=" flex flex-col gap-2 ">
        <ImageStorage />
        <VideoStore />
        <DocumentStore />
        <PDF />
        <Other />
      </div>
    </div>
  )
}

export default Storage
