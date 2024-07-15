'use client'

import { GetFileSearch } from '@/functions/Getfilebysearch'
import { ParentIdContext } from '@/utils/Context'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Search } from 'lucide-react'
import React, { useContext, useState } from 'react'
import Loader from '../Loader'

const Searchbar = () => {
  const { setSearchState, setsearchdata, setLoading, loading } =
    useContext(ParentIdContext)
  const [searchterm, setsearch] = useState('')
  const { user } = useUser()
  const Submit = async () => {
    setLoading(true)
    setSearchState(true)
    const data = await GetFileSearch(searchterm, user?.email)
    console.log(data)
    setsearchdata(data)
    setLoading(false)
  }

  return (
    <div className="flex gap-2 items-center rounded-lg bg-white p-4 border-2 border-slate-200 focus-within:border-slate-500">
      <input
        className="w-full rounded-lg p-2 focus:outline-none"
        type="search"
        value={searchterm}
        placeholder="Enter File Name You Want To Search"
        aria-label="Search files"
        onChange={(e) => setsearch(e.target.value)}
      />

      <Search onClick={() => Submit()} size={40} className="cursor-pointer" />
    </div>
  )
}

export default Searchbar
