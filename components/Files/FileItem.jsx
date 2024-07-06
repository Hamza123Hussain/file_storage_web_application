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
              <th>CreatedAt</th>
              <th>Size</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>{File.Name}</td>
              <td>{File.CreatedAt}</td>
              <td>{File.FileSize}</td>
              <td className=" flex gap-2 ">
                {' '}
                <button className=" flex gap-2 items-center p-2 bg-green-400 rounded-lg">
                  <h3> Download</h3> <Download />
                </button>
                <button className=" flex gap-2  p-2 bg-red-400 rounded-lg">
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
