import React from 'react'

const FolderItems = ({ Name, ICON }) => {
  return (
    <div className=" w-48 flex flex-col border-2 p-3 mt-4 border-gray-100 rounded-md hover:shadow-md hover:shadow-amber-950">
      {ICON}
      <h1 className=" text-sm font-bold">{Name}</h1>
    </div>
  )
}

export default FolderItems
