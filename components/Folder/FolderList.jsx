import { Folder } from 'lucide-react'
import React from 'react'
import FolderItems from './FolderItems'
const DemoArray = [
  { Name: 'NEXTJS', Icon: <Folder /> },
  { Name: 'Reactjs', Icon: <Folder /> },
  { Name: 'Nodejs', Icon: <Folder /> },
  { Name: 'FIREBASE', Icon: <Folder /> },
  { Name: 'SUPABASE', Icon: <Folder /> },
  { Name: 'CLERK', Icon: <Folder /> },
]
const FolderList = () => {
  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <h1 className=" text-xl font-extrabold">Recent Folders</h1>
      <div className=" grid grid-cols-1  sm:grid-cols-4 ">
        {DemoArray.map((element, index) => {
          return (
            <div key={index}>
              <FolderItems Name={element.Name} ICON={element.Icon} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FolderList
