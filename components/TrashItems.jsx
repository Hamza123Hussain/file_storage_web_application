import { DeleteTrash } from '@/functions/DeleteTrash'
import { GetTrash } from '@/functions/GetTrash'
import { CreateTrash } from '@/functions/StoreTrash'
import { ParentIdContext } from '@/utils/Context'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Delete, Download } from 'lucide-react'
import React, { useContext } from 'react'
import Image from 'next/image'
import DOC from '../public/DOC.png'
import PDF from '../public/Pdf.png'
import Images from '../public/Image.png'
import Video from '../public/Video.png'
import Other from '../public/Other.png'

const TrashItem = ({ File }) => {
  const { user } = useUser()
  const { settrashData, setLoading } = useContext(ParentIdContext)

  const DeleteItem = async () => {
    const success = await DeleteTrash(File.id)
    if (success) {
      const data = await GetTrash(user?.email)
      settrashData(data)
    }
  }

  return (
    <div className="overflow-x-auto border-2 w-full border-slate-100 rounded-lg hover:shadow-md hover:shadow-black mb-4">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 sm:text-lg text-sm text-left w-1/5">Name</th>
            <th className="p-4 sm:text-lg text-sm text-left w-1/5">
              Created At
            </th>
            <th className="p-4 sm:text-lg text-sm text-left w-1/5">Size</th>
            <th className="p-4 sm:text-lg text-sm text-left w-1/5">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="p-4 flex items-center gap-2 sm:text-sm text-xs w-3/6">
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
            <td className="p-4 sm:text-sm text-xs w-1/6">
              {File.LastModified}
            </td>
            <td className="p-4 sm:text-sm text-xs w-1/6">{File.size} MB</td>
            <td className="p-4 sm:text-sm text-xs w-1/6 flex gap-2">
              <button
                onClick={DeleteItem}
                className="flex gap-2 p-2 bg-red-400 rounded-lg"
              >
                <h3>Delete</h3>
                <Delete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TrashItem
