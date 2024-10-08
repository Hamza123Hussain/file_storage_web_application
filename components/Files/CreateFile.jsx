'use client'
import { useContext, useState } from 'react'
import { ParentIdContext } from '@/utils/Context'
import { useUser } from '@auth0/nextjs-auth0/client'
import { handleUpload } from '@/functions/FileMaker'
import toast from 'react-hot-toast'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { getFileType } from '@/functions/FileTypesShort'

const CreateFileBTN = () => {
  const [File, setFileDetails] = useState({ Name: '', File: {}, FileType: '' })
  const { parentId, GetfileData } = useContext(ParentIdContext)
  const { user } = useUser()

  const handleUploadClick = async () => {
    if ((File.File.size / (1024 * 1024)).toFixed(2) < 50) {
      if (File.File && File.Name && user) {
        const result = await handleUpload(
          File.File,
          File.Name,
          File.FileType,
          user,
          parentId
        )
        if (result.success) {
          console.log('File uploaded successfully', result)
          toast.success('New File Uploaded')
          await GetfileData() // Update storage details
          setFileDetails({ Name: '', File: {}, FileType: '' })
        } else {
          console.error('Error uploading file:', result.message)
        }
      }
    } else {
      toast.error('File Size is Greater than 50MB')
    }
  }

  const ChangeValue = (e) => {
    const { name, value, files } = e.target
    if (name === 'File') {
      const fileType = getFileType(files[0]?.type)
      setFileDetails((prev) => ({
        ...prev,
        [name]: files[0],
        FileType: fileType,
      }))
    } else {
      setFileDetails((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
    console.log(File)
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button className="w-48 flex gap-2 items-center bg-blue-600 hover:brightness-105 text-white rounded-lg p-3">
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
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h3 className="font-bold text-lg">Add A File</h3>
            </DialogTitle>
            <DialogDescription>
              <div className="py-4 flex flex-col">
                <input
                  value={File.Name}
                  name="Name"
                  onChange={ChangeValue}
                  type="text"
                  placeholder="Enter File Name"
                  className="p-3 w-full rounded-lg border-2 border-r-slate-100"
                />
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="relative w-full mt-4">
                    <label className="flex items-center hover:shadow-amber-900 hover:shadow-md justify-center w-full p-3 rounded-full bg-green-500 text-white cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out">
                      <span>Add A File You Want to Upload</span>
                      <input
                        name="File"
                        type="file"
                        onChange={ChangeValue}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col justify-center items-center px-12">
                    <h4 className="text-xs text-gray-400 capitalize">
                      Note: Only A File Upto 50MB can be Uploaded on This
                      Platform
                    </h4>
                    <h4 className="text-[10px] text-gray-400">
                      File Types Supported: .ppt, .pptx, .zip, .rar, .pdf, .doc,
                      .docx, .jpeg, .webp, .jpg, .png
                    </h4>
                  </div>
                  {File?.File?.size > 0 && (
                    <div className="flex justify-between gap-10 items-center text-xs sm:text-sm text-green-400 font-bold">
                      <h3>FileType: {File.FileType}</h3>
                      <h3>
                        Size: {(File.File.size / (1024 * 1024)).toFixed(2)} MB
                      </h3>
                    </div>
                  )}
                </div>
                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleUploadClick}
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

export default CreateFileBTN
