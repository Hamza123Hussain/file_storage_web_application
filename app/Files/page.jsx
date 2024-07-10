'use client'
import React, { useEffect, useState } from 'react'

import Loader from '@/components/Loader'
import FileItem from '@/components/Files/FileItem'
import { GetFiles } from '@/functions/GetFiles'
// const DemoFileArray = [
//   { Name: 'HAMZA.PNG', Type: 'PDF', CreatedAt: '2021-21-2', FileSize: '12MB' },
//   { Name: 'HAMZA.PNG', Type: 'DOC', CreatedAt: '2021-21-2', FileSize: '12MB' },
//   { Name: 'HAMZA.PNG', Type: 'PNG', CreatedAt: '2021-21-2', FileSize: '12MB' },
//   { Name: 'HAMZA.PNG', Type: 'JPEG', CreatedAt: '2021-21-2', FileSize: '12MB' },
//   { Name: 'HAMZA.PNG', Type: 'PDF', CreatedAt: '2021-21-2', FileSize: '12MB' },
// ]

const Files = () => {
  const [FileData, setFileData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetFiles()
        setFileData(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )

  // if (FileData.length > 1) console.log('File data:', FileData)

  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <h1 className=" text-xl font-extrabold">All Files</h1>
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

export default Files
