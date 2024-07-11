'use client'
// components/CreateFolderBtn.js

import { CreateFolder } from '@/functions/CreateFolder'
import { ParentIdContext } from '@/utils/Context'
import React, { useContext, useEffect, useState } from 'react'
import FolderList from './FolderList'
import { fetchFolderData } from '@/functions/Fetchfolderdata'

const Folderbtn = () => {
  const { setFolderData, parentId } = useContext(ParentIdContext)
  const [foldername, setname] = useState('')

  const [FolderCreated, setCreated] = useState(false)
  const handleCreateFolder = async () => {
    try {
      await CreateFolder(foldername, parentId)
      setCreated(true)
    } catch (error) {
      // Handle error cases
      console.error('Error creating folder:', error)
      alert('Failed to create folder')
    }
  }
  const GetFolderData = async () => {
    const data = await fetchFolderData()
    setFolderData(data)
  }

  useEffect(() => {
    if (FolderCreated) {
      GetFolderData()
      setCreated(false)
    }
  }, [FolderCreated])

  return (
    <div>
      <button
        className="w-48 flex gap-2 items-center bg-green-600 hover:brightness-105 text-white rounded-lg p-3"
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        <span className="text-lg">Add A Folder</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add A Folder</h3>
          <div className="py-4 flex flex-col">
            <input
              value={foldername}
              onChange={(e) => setname(e.target.value)}
              type="text"
              placeholder="Enter Folder Name"
              className="p-3 w-full rounded-lg border-2 border-r-slate-100"
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={handleCreateFolder}
                className="px-3 py-1 hover:brightness-105 text-white bg-green-400 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Folderbtn
