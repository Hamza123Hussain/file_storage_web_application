'use client'
import { CreateTrash } from '@/functions/StoreTrash'
import { Delete, Download, Trash } from 'lucide-react'
import Image from 'next/image'
import React, { useContext } from 'react'
import DOC from '../../public/DOC.png'
import PDF from '../../public/Pdf.png'
import Images from '../../public/Image.png'
import Video from '../../public/Video.png'
import Other from '../../public/Other.png'

import { useUser } from '@auth0/nextjs-auth0/client'
import { fetchData } from '@/functions/FetchDataFiles'
import { ParentIdContext } from '@/utils/Context'
import Link from 'next/link'

const FileItem = ({ File }) => {
  const { parentId, setFileData, setLoading } = useContext(ParentIdContext)
  const { user } = useUser()

  const RemoveFile = async () => {
    setLoading(true)
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
        setLoading(false)
      } else {
        console.error('Failed to move file to trash')
        setLoading(false)
      }
    } catch (error) {
      console.error('Error in RemoveFile:', error)
      setLoading(false)
    }
  }

  return (
    <div className="overflow-x-auto border-2 w-full border-slate-100 rounded-lg hover:shadow-md hover:shadow-black mb-4">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left w-1/4">Name</th>
            <th className="p-4 text-left w-1/4">Created At</th>
            <th className="p-4 text-left w-1/4">Size</th>
            <th className="p-4 text-left w-1/4">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="p-4 flex items-center gap-2 w-2/4">
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
              <h3 className="text-xs">{File.Name}</h3>
            </td>
            <td className="p-4 text-sm w-1/4">{File.LastModified}</td>
            <td className="p-4 text-sm w-1/4">{File.size} MB</td>
            <td className="p-4 flex gap-4 items-center w-1/4">
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
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FileItem
