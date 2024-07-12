'use client'
import { CreateFolder } from '@/functions/CreateFolder'
import { ParentIdContext } from '@/utils/Context'
import React, { useContext, useEffect, useState } from 'react'
import { fetchFolderData } from '@/functions/Fetchfolderdata'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useUser } from '@auth0/nextjs-auth0/client'

const Folderbtn = () => {
  const { user } = useUser()
  const { setFolderData, parentId } = useContext(ParentIdContext)
  const [foldername, setname] = useState('')
  const [FolderCreated, setCreated] = useState(false)

  const handleCreateFolder = async () => {
    try {
      await CreateFolder(foldername, parentId, user?.email)
      setCreated(true)
    } catch (error) {
      console.error('Error creating folder:', error)
      alert('Failed to create folder')
    }
  }

  const GetFolderData = async () => {
    const data = await fetchFolderData(user?.email)
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
      <Dialog>
        <DialogTrigger asChild>
          <button className="w-48 flex gap-2 items-center justify-center bg-green-600 hover:brightness-105 text-white rounded-lg p-3">
            <span className="text-lg">Add A Folder</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h3 className="font-bold text-lg">Add A Folder</h3>
            </DialogTitle>
            <DialogDescription>
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
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Folderbtn
