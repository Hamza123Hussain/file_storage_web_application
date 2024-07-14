'use client'
import { CreateTrash } from '@/functions/StoreTrash'
import { Download, Star, Trash } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import DOC from '../../public/DOC.png'
import PDF from '../../public/Pdf.png'
import Images from '../../public/Image.png'
import Video from '../../public/Video.png'
import Other from '../../public/Other.png'

import { useUser } from '@auth0/nextjs-auth0/client'

import { ParentIdContext } from '@/utils/Context'
import Link from 'next/link'

import toast from 'react-hot-toast'
import { ToggleImportant } from '@/functions/ToggleImporant'

const FileItem = ({ File }) => {
  const { setFileData, GetfileData } = useContext(ParentIdContext)
  const { user } = useUser()
  const [important, setImportant] = useState(File.important || false)

  const RemoveFile = async () => {
    const Email = user?.email
    if (!Email) {
      console.error('User email is not available')
      return
    }
    try {
      const data = await CreateTrash(File, Email)
      if (data) {
        console.log('File moved to trash and data fetched successfully', data)
        setFileData(data)
      } else {
        console.error('Failed to move file to trash')
      }
    } catch (error) {
      console.error('Error in RemoveFile:', error)
    }
  }

  const handleToggleImportant = async () => {
    const result = await ToggleImportant(File.id, important)

    if (result) {
      await GetfileData()
      console.log('Important status updated successfully', result)
      setImportant(!important)
      toast.success(
        `File marked as ${important ? 'not important' : 'important'}`
      )
    } else {
      console.error('Failed to update important status')
      toast.error('Error updating important status')
    }
  }

  return (
    <div className="overflow-x-auto border-2 w-full border-slate-100 rounded-lg hover:shadow-md hover:shadow-black mb-4">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 sm:text-lg text-sm text-left w-1/5">Name</th>
            <th className="p-4 sm:text-lg text-sm text-left w-1/5">
              <div className="flex gap-1">
                {' '}
                <h6>Created</h6>At <h6></h6>
              </div>
            </th>
            <th className="p-4 sm:text-lg text-sm text-left w-1/5">Size</th>
            <th className="p-4 sm:text-lg text-sm text-left w-1/5">Options</th>
            <th className="p-4 sm:text-lg text-sm text-left w-1/5">
              Important
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="p-4 border-l-2  flex items-center gap-2 w-3/6">
              <Image
                src={
                  File.type === 'pdf'
                    ? PDF
                    : File.type === 'document'
                    ? DOC
                    : File.type === 'image'
                    ? Images
                    : File.type === 'mp4'
                    ? Video
                    : Other
                }
                alt={File.type}
                width={30}
                height={30}
              />
              <h3 className="sm:text-sm text-xs">{File.Name}</h3>
            </td>
            <td className="p-4 border-l-2  sm:text-sm text-xs  w-1/6">
              {File.LastModified}
            </td>
            <td className="p-4 sm:text-sm text-xs border-l-2   w-1/6">
              <div className=" flex gap-1">
                <h6> {File.size}</h6> <h6>MB</h6>
              </div>
            </td>
            <td className="p-4 flex gap-4 border-l-2  items-center text-xs sm:text-sm w-1/6">
              <Link target="_blank" href={File.url} className="text-sm">
                <Download
                  className="hover:text-green-500 text-green-900"
                  size={20}
                />
              </Link>
              <button onClick={RemoveFile} className="text-sm">
                <Trash className="hover:text-red-500 text-red-900" size={20} />
              </button>
            </td>
            <td className="p-4 px-8 sm:px-12 border-l-2  cursor-pointer sm:text-sm text-xs   w-1/6">
              <Star
                size={20}
                className={` text-black self-center ${
                  important ? 'text-yellow-400' : ''
                }`}
                onClick={handleToggleImportant}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FileItem
