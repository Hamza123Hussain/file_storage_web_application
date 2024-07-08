'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const FolderItems = ({ Folder, ICON }) => {
  const Router = useRouter()
  return (
    <div
      onClick={() => Router.push(`./Folder/${Folder.id}`)}
      className=" cursor-pointer w-48 flex flex-col border-2 p-3 mt-4 border-gray-100 rounded-md hover:shadow-md hover:shadow-amber-950"
    >
      {ICON}
      <h1 className=" text-sm font-bold">{Folder.FolderName}</h1>
    </div>
  )
}

export default FolderItems
