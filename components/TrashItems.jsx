import { DeleteTrash } from '@/functions/DeleteTrash'
import { CreateTrash } from '@/functions/StoreTrash'
import { Delete, Download } from 'lucide-react'
import React from 'react'

const TrashItem = ({ File }) => {
  return (
    <div>
      <div className="overflow-x-auto border-2 border-slate-100 rounded-lg hover:shadow-md hover:shadow-black">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Created At</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className=" w-3/6 text-xs">{File.Name}</td>
              <td className=" w-1/6">{File.LastModified}</td>
              <td className=" w-1/6">{File.size} MB</td>
              <td className=" w-1/6 flex gap-2 ">
                {' '}
                <button
                  onClick={() => {
                    DeleteTrash(File.id)
                  }}
                  className=" flex gap-2  p-2 bg-red-400 rounded-lg"
                >
                  <h3>Delete</h3>
                  <Delete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TrashItem
