import { Delete, Download } from 'lucide-react'
import React from 'react'

const FilePreview = ({ File, ICON }) => {
  return (
    <div className="cursor-pointer items-center w-48 flex gap-2  border-2 p-3 mt-4 border-gray-100 rounded-md hover:shadow-md hover:shadow-amber-950">
      {ICON}
      <h1>{File.Name}</h1>
    </div>
  )
}

export default FilePreview
