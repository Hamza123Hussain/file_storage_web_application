'use client'
import { CreateFile } from '@/functions/CreateFile'
import { ParentIdContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'

const CreateFileBTN = () => {
  const [File, setFileDetails] = useState({ Name: '', File: {} })
  const { parentId } = useContext(ParentIdContext)

  const AddFileTOSupabase = async () => {
    try {
      await CreateFile(File, parentId)
      // Optionally, you can handle success feedback here
    } catch (error) {
      // Handle error cases
      console.error('Error creating file:', error)
      alert('Failed to create File')
    }
  }

  const ChangeValue = (e) => {
    const { name, value, files } = e.target
    if (name === 'File') {
      setFileDetails((prev) => ({
        ...prev,
        [name]: files[0],
      }))
    } else {
      setFileDetails((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  console.log(File)

  return (
    <div>
      <button
        className="w-48 flex gap-2 items-center bg-blue-600 hover:brightness-105 text-white rounded-lg p-3"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        <span className="text-lg">Add A File</span>
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
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add A Folder</h3>
          <div className="py-4 flex flex-col">
            <input
              value={File.Name}
              name="Name"
              onChange={ChangeValue}
              type="text"
              placeholder="Enter File Name"
              className="p-3 w-full rounded-lg border-2 border-r-slate-100"
            />
            <input
              name="File"
              type="file"
              onChange={ChangeValue}
              placeholder="Enter File"
              className="p-3 w-full rounded-lg border-2 border-r-slate-100"
            />

            <div className="flex justify-end mt-2">
              <button
                onClick={AddFileTOSupabase}
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

export default CreateFileBTN
