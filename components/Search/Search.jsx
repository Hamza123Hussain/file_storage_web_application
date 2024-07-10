'use client'
import { ParentIdContext } from '@/utils/Context'
import React, { useContext } from 'react'

import SearchItem from './SearchItem'
import Loader from '../Loader'

const Search = () => {
  const { searchData, loading } = useContext(ParentIdContext)
  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )
  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <h1 className=" text-xl font-extrabold mb-3">Searched File</h1>
      <div className=" grid grid-cols-1 gap-2   ">
        {searchData.map((element) => {
          return (
            <div key={element.id}>
              <SearchItem File={element} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Search
{
  /**'use client'
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


  // if (FileData.length > 1) console.log('File data:', FileData)

 
  )
}

export default FileList
 */
}
