'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { ParentIdContext } from '@/utils/Context'
import Loader from '@/components/Loader'
import FILETYPE from './Files/FileType'

const FileStatistics = () => {
  const { totalsize, settotalsize, FileData, GetfileData, loading } =
    useContext(ParentIdContext)
  const { user } = useUser()

  useEffect(() => {
    if (user?.email) {
      GetfileData()
    }
  }, [user?.email])

  // Calculate total number of files, their cumulative size, and count by type using reduce
  const fileStats = FileData.reduce(
    (accumulator, file) => {
      const fileSize = file.size // Assuming each file object in FileData has a 'size' property
      accumulator.totalSize += fileSize

      if (accumulator.types[file.type]) {
        accumulator.types[file.type].size += fileSize
        accumulator.types[file.type].count += 1
      } else {
        accumulator.types[file.type] = { size: fileSize, count: 1 }
      }

      return accumulator
    },
    { totalSize: 0, types: {} }
  )

  settotalsize(fileStats.totalSize)
  const SizeConsumed = ((fileStats.totalSize / 5000) * 100).toFixed(2)

  if (FileData.length === 0) {
    return (
      <div className="border-2 gap-3 sm:gap-5 rounded-lg border-slate-700 p-10 flex flex-col mt-20 justify-center items-center">
        <h1 className="font-bold text-lg sm:text-xl">No Files Stored</h1>
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
        {Object.entries(fileStats.types).map(([type, stats]) => (
          <div key={type} className="text-sm">
            <FILETYPE
              key={type}
              type={type}
              size={stats.size}
              count={stats.count}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FileStatistics
