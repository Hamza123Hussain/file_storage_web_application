'use client'
import { CreateFolder } from '@/functions/CreateFolder'

import React, { useState } from 'react'

const CreateFolderBtn = () => {
  const [foldername, setname] = useState('')

  return (
    <div>
      <button
        className=" w-48 flex gap-2 items-center bg-green-600 hover:brightness-105 text-white rounded-lg p-3"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        <span className=" text-lg">Add A Folder</span>
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
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add A Folder</h3>
          <div className="py-4 flex flex-col">
            {' '}
            <input
              value={foldername}
              onChange={(e) => setname(e.target.value)}
              type="text"
              placeholder="Enter Folder Name"
              className=" p-3 w-full rounded-lg border-2 border-r-slate-100"
            />
            <div className=" flex justify-end mt-2">
              <button
                onClick={() => CreateFolder(foldername)}
                className=" px-3 py-1 hover:brightness-105 text-white bg-green-400 rounded-lg"
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

export default CreateFolderBtn
