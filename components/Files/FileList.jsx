import React from 'react'
import FileItem from './FileItem'
const DemoFileArray = [
  { Name: 'HAMZA.PNG', Type: 'PDF', CreatedAt: '2021-21-2', FileSize: '12MB' },
  { Name: 'HAMZA.PNG', Type: 'DOC', CreatedAt: '2021-21-2', FileSize: '12MB' },
  { Name: 'HAMZA.PNG', Type: 'PNG', CreatedAt: '2021-21-2', FileSize: '12MB' },
  { Name: 'HAMZA.PNG', Type: 'JPEG', CreatedAt: '2021-21-2', FileSize: '12MB' },
  { Name: 'HAMZA.PNG', Type: 'PDF', CreatedAt: '2021-21-2', FileSize: '12MB' },
]
const FileList = () => {
  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <h1 className=" text-xl font-extrabold">Recent Files</h1>
      <div className=" grid grid-cols-1 gap-2   ">
        {DemoFileArray.map((element, index) => {
          return (
            <div key={index}>
              <FileItem File={element} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FileList
