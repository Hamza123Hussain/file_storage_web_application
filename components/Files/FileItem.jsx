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
  const Getdata = async () => {
    setLoading(true)
    const data = await fetchData(user?.email)
    if (data) {
      console.log('DATA FETCHED', data)
      setFileData(data)
      setLoading(false)
    }
  }

  const RemoveFile = async () => {
    const Email = user?.email
    if (!Email) {
      console.error('User email is not available')
      return
    }

    const isSuccess = await CreateTrash(File, Email)
    if (isSuccess) {
      Getdata()
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
            <td className="p-4 flex items-center gap-2 w-1/4">
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
                width={20}
                height={20}
              />
              <h3 className="text-sm">{File.Name}</h3>
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
