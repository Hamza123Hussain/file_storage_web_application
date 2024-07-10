'use client'
import { getFileStats } from '@/functions/GetFilesByType'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/Video.png'
const VideoStore = () => {
  const [fileStats, setFileStats] = useState([]) // Initialize as empty array
  const [error, setError] = useState(null)

  const GetfileData = async () => {
    const data = await getFileStats('mp4')
    setFileStats(data)
  }

  useEffect(() => {
    GetfileData()
  }, [])

  // Calculate total number of files and their cumulative size using reduce
  const { totalFiles, totalSize } = fileStats.reduce(
    (accumulator, file) => {
      accumulator.totalFiles++
      accumulator.totalSize += file.size // Assuming each file object in fileStats has a 'size' property
      return accumulator
    },
    { totalFiles: 0, totalSize: 0 }
  )

  console.log('Total number of files:', totalFiles)
  console.log('Total size of files:', totalSize)

  if (error) {
    return <div>Error: {error}</div> // Render an error message if there's an issue with API call
  }

  return (
    <div className="flex flex-col justify-center border-2 rounded-lg p-2 ">
      <div className=" flex justify-between items-center">
        {' '}
        <Image src={Logo} alt="Image" width={48} height={48} />
        <h1 className=" text-slate-700 font-bold">{totalSize.toFixed(2)} MB</h1>
      </div>
      <h1 className=" text-slate-700 font-bold"> {totalFiles} Video Files</h1>
    </div>
  )
}

export default VideoStore
