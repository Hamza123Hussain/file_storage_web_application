import { CreateTrash } from '@/functions/StoreTrash'
import { Delete, Download, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import DOC from '../../public/DOC.png'
import PDF from '../../public/Pdf.png'
import Images from '../../public/Image.png'
import Video from '../../public/Video.png'
import Other from '../../public/Other.png'

const SearchItem = ({ File }) => {
  return (
    <div className="overflow-x-auto border-2 border-slate-100 rounded-lg hover:shadow-md hover:shadow-black mb-4">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Created At</th>
            <th className="p-4 text-left">Size</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="p-4 flex items-center gap-2">
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
            <td className="p-4 text-sm">{File.LastModified}</td>
            <td className="p-4 text-sm">{File.size} MB</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SearchItem
