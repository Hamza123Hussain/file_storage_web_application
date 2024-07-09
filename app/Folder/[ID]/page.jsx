// pages/Folder.jsx
'use client'

import React, { useContext, useEffect, useState } from 'react'
import { ParentIdContext } from '@/utils/Context'
import { FileIcon, FolderClosed } from 'lucide-react'
import { getFolderData } from '@/functions/GetFolderDataById'
import FolderItems from '@/components/Folder/FolderItems'
import { GetFileData } from '@/functions/GetFileDataById'
import FileItem from '@/components/Files/FileItem'
import FilePreview from '@/components/Files/FilePreview'

const Folder = ({ params }) => {
  const { setParentId } = useContext(ParentIdContext)
  const [folderData, setFolderData] = useState([])
  const [fileData, setFileData] = useState([])
  const GETDATA = async () => {
    const data = await getFolderData(params.ID)
    const Fdata = await GetFileData(params.ID)
    setFolderData(data)
    setFileData(Fdata)
  }

  useEffect(() => {
    setParentId(params.ID)
    GETDATA()
  }, [])

  if (folderData.length > 0) {
    console.log(folderData)
  }
  if (fileData.length > 0) {
    console.log(fileData)
  }
  return (
    <div className=" flex flex-col  ">
      <div className=" border-2 rounded-lg p-4 mt-5">
        <h1 className=" font-extrabold text-lg ">Folders</h1>
        <div className=" grid grid-cols-1 gap-2  sm:grid-cols-3 ">
          {folderData.map((Element) => {
            return (
              <div key={Element.id}>
                <FolderItems Folder={Element} ICON={<FolderClosed />} />
              </div>
            )
          })}
        </div>
      </div>{' '}
      <div className=" border-2 rounded-lg p-4 mt-5">
        <h1 className=" font-extrabold text-lg ">Files</h1>
        <div className=" grid grid-cols-1 gap-2  sm:grid-cols-3 ">
          {fileData.map((Element) => {
            return (
              <div key={Element.id}>
                <FilePreview File={Element} ICON={<FileIcon />} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Folder
