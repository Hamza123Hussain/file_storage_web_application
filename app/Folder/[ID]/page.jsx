// pages/Folder.jsx
'use client'

import React, { useContext, useEffect, useState } from 'react'
import { ParentIdContext } from '@/utils/Context'
import { FolderClosed } from 'lucide-react'
import { getFolderData } from '@/functions/GetFolderDataById'
import FolderItems from '@/components/Folder/FolderItems'

const Folder = ({ params }) => {
  const { setParentId } = useContext(ParentIdContext)
  const [folderData, setFolderData] = useState([])

  const GETDATA = async () => {
    const data = await getFolderData(params.ID)
    setFolderData(data)
  }

  useEffect(() => {
    setParentId(params.ID)
    GETDATA()
  }, [])

  if (folderData.length > 0) {
    console.log(folderData)
  }
  return (
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
    </div>
  )
}

export default Folder
