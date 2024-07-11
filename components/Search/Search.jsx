'use client'
import { ParentIdContext } from '@/utils/Context'
import React, { useContext } from 'react'
import SearchItem from './SearchItem'
import Loader from '../Loader'

const Search = () => {
  const { searchData, loading } = useContext(ParentIdContext)

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  if (searchData.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-extrabold">The Item Does Not Exist.</h1>
      </div>
    )
  }

  return (
    <div className="bg-white mt-4 p-3 rounded-lg">
      <h1 className="text-xl font-extrabold mb-3">Results</h1>
      <div className="grid grid-cols-1 gap-2">
        {searchData.map((element) => (
          <div key={element.id}>
            <SearchItem File={element} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
