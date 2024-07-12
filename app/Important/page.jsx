'use client'
import FileItem from '@/components/Files/FileItem'
import Loader from '@/components/Loader'

import { ParentIdContext } from '@/utils/Context'

import React, { useContext } from 'react'

const Important = () => {
  const { important, loading } = useContext(ParentIdContext)

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )

  if (important.length == 0) {
    return (
      <div className=" border-2 gap-3 sm:gap-5 rounded-lg border-slate-700 p-10 flex flex-col mt-20 justify-center items-center">
        {' '}
        <h1 className=" font-bold text-lg sm:text-xl">
          No Files Marked As Important
        </h1>
      </div>
    )
  }
  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <h1 className=" text-xl font-extrabold">Important Files</h1>
      <div className=" grid grid-cols-1 gap-2   ">
        {important.map((element) => {
          return (
            <div key={element.id}>
              <FileItem File={element} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Important
