import { CreateTrash } from '@/functions/StoreTrash'
import { Delete, Download } from 'lucide-react'
import React from 'react'

const FileItem = ({ File }) => {
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
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className=" w-5/12 text-[10px]">{File.Name}</td>
              <td className=" w-4/12">{File.LastModified}</td>
              <td className=" w-3/12">{File.size} MB</td>
              <td className=" w-2/12 flex gap-2 ">
                {' '}
                <button className=" flex gap-2 items-center p-2 bg-green-400 rounded-lg">
                  <h3> Download</h3> <Download />
                </button>
                <button
                  onClick={() => {
                    CreateTrash(File)
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

export default FileItem
/**Name
: 
"Hamza Doc"
created_at
: 
"2024-07-09T12:04:15.403806+00:00"
id
: 
"41e7e397-dbcb-4f83-a818-d05c2ada8c9f"
parentID
: 
"78e6dfba-39ac-47cd-82ba-5ec70fbc596f"
size
: 
47579
type
: 
"application/pdf" */
