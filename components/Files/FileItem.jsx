'use client'
import { CreateTrash } from '@/functions/StoreTrash'
import { Delete, Download, Star, Trash } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import DOC from '../../public/DOC.png'
import PDF from '../../public/Pdf.png'
import Images from '../../public/Image.png'
import Video from '../../public/Video.png'
import Other from '../../public/Other.png'

import { useUser } from '@auth0/nextjs-auth0/client'
import { fetchData } from '@/functions/FetchDataFiles'
import { ParentIdContext } from '@/utils/Context'
import Link from 'next/link'
import { CreateImportant } from '@/functions/CreateImportant'

import toast from 'react-hot-toast'
import { ToggleImportant } from '@/functions/ToggleImporant'
import { GetImportant } from '@/functions/GetImportant'

const FileItem = ({ File }) => {
  const { parentId, setFileData, setLoading, setimportant } =
    useContext(ParentIdContext)
  const { user } = useUser()
  const [important, setImportant] = useState(File.important || false)

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

  const fetchData = async () => {
    try {
      setLoading(true)
      const data = await GetImportant(user?.email)
      console.log('IMPORTANT:', data)
      setimportant(data)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }

  const handleToggleImportant = async () => {
    const result = await ToggleImportant(File.id, important)
    if (result) {
      console.log('Important status updated successfully', result)
      setImportant(!important)
      toast.success(
        `File marked as ${important ? 'not important' : 'important'}`
      )
      await fetchData()
    } else {
      console.error('Failed to update important status')
      toast.error('Error updating important status')
      setLoading(false)
    }
  }
  /**  const handleAddImportantFile = async () => {
    setimportant(!imporant)
    const email = user?.email
    if (!email) {
      console.error('User email is not available')
      return
    }

    const result = await CreateImportant(File, email, parentId)
    if (result) {
      console.log('File added to important table successfully', result)
      toast.success('FILE MARKED AS IMPORTANT')
    } else {
      console.error('Failed to add file to important table')
      toast.error('ERORRR')
    }
  } */

  return (
    <div className="overflow-x-auto border-2 w-full border-slate-100 rounded-lg hover:shadow-md hover:shadow-black mb-4">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left w-1/4">Name</th>
            <th className="p-4 text-left w-1/4">Created At</th>
            <th className="p-4 text-left w-1/4">Size</th>
            <th className="p-4 text-left w-1/4">Options</th>
            <th className="p-4 text-left w-1/4">Important</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="p-4 flex items-center gap-2 w-2/5">
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
            <td className="p-4 text-sm w-1/5">{File.LastModified}</td>
            <td className="p-4 text-sm w-1/5">{File.size} MB</td>
            <td className="p-4 flex gap-4 items-center w-1/5">
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
            <td className="p-4 px-10 cursor-pointer  w-1/5">
              <div>
                <Star
                  className={` text-black ${
                    important ? 'text-yellow-400' : ''
                  }`}
                  onClick={handleToggleImportant}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FileItem
