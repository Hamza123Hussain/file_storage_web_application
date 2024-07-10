'use client'
import React, { useEffect, useState } from 'react'
import FileItem from './FileItem'
import Loader from '../Loader'
import { GetFile } from '@/functions/GetFile'
// const DemoFileArray = [
//   { Name: 'HAMZA.PNG', Type: 'PDF', CreatedAt: '2021-21-2', FileSize: '12MB' },
//   { Name: 'HAMZA.PNG', Type: 'DOC', CreatedAt: '2021-21-2', FileSize: '12MB' },
//   { Name: 'HAMZA.PNG', Type: 'PNG', CreatedAt: '2021-21-2', FileSize: '12MB' },
//   { Name: 'HAMZA.PNG', Type: 'JPEG', CreatedAt: '2021-21-2', FileSize: '12MB' },
//   { Name: 'HAMZA.PNG', Type: 'PDF', CreatedAt: '2021-21-2', FileSize: '12MB' },
// ]

const FileList = () => {
  const [FileData, setFileData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const fetchData = async () => {
    try {
      const data = await GetFile()
      setFileData(data.data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [FileData])
  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )

  // if (FileData.length > 1) console.log('File data:', FileData)

  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <h1 className=" text-xl font-extrabold">Recent Files</h1>
      <div className=" grid grid-cols-1 gap-2   ">
        {FileData.map((element) => {
          return (
            <div key={element.id}>
              <FileItem File={element} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FileList
