'use client'
import FileItem from '@/components/Files/FileItem'
import Loader from '@/components/Loader'
import { GetImportant } from '@/functions/GetImportant'
import { ParentIdContext } from '@/utils/Context'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useContext, useEffect, useState } from 'react'

const Important = () => {
  const { important, loading } = useContext(ParentIdContext)

  const { user } = useUser()

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )

  if (important.length == 0) {
    return (
      <div className=" bg-white justify-center items-center flex py-20 mt-20">
        <h1 className=" text-lg font-extrabold">
          NO FILES MARKED AS IMPORTANT{' '}
        </h1>
      </div>
    )
  }

  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <h1 className=" text-xl font-extrabold">Important</h1>
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
