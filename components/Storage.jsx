'use client'
import React, { useEffect, useState } from 'react'
import ImageStorage from './Files/FileTypes/Image'
import VideoStore from './Files/FileTypes/Video'
import DocumentStore from './Files/FileTypes/Document'
import PDF from './Files/FileTypes/Pdf'
import Other from './Files/FileTypes/Other'
import { GetFiles } from '@/functions/GetFiles'

const Storage = () => {
  const [fileStats, setFileStats] = useState([]) // Initialize as empty array
  const [error, setError] = useState(null)

  const GetfileData = async () => {
    const data = await GetFiles()
    setFileStats(data)
  }

  useEffect(() => {
    GetfileData()
  }, [])

  // Calculate total number of files and their cumulative size using reduce
  const { totalSize } = fileStats.reduce(
    (accumulator, file) => {
      accumulator.totalSize += file.size // Assuming each file object in fileStats has a 'size' property
      return accumulator
    },
    { totalSize: 0 }
  )

  const SizeConsumed = (totalSize / 10000).toFixed(2) * 100

  if (error) {
    return <div>Error: {error}</div> // Render an error message if there's an issue with API call
  }

  return (
    <div className="flex flex-col gap-2 ">
      <h1 className=" text-lg font-bold">Storage Details</h1>
      <div className=" flex flex-col">
        <h1 className=" font-bold">
          {(totalSize / 1024).toFixed(2)} GB OUT OF 10 GB
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
