'use client'

import { GetFileSearch } from '@/functions/Getfilebysearch'
import { ParentIdContext } from '@/utils/Context'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Search } from 'lucide-react'
import React, { useContext, useState } from 'react'

const Searchbar = () => {
  const { setSearchState, setsearchdata, setLoading } =
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
    <div className="rounded-lg flex gap-1 items-center">
      <input
        className="w-full rounded-lg py-4 px-2 border-2 bg-transparent border-slate-200 focus:border-slate-500"
        type="search"
        value={searchterm}
        placeholder="Enter File Name You Want To Search"
        onChange={(e) => setsearch(e.target.value)}
      />
      <Search onClick={Submit} size={40} className="cursor-pointer" />
    </div>
  )
}

export default Searchbar
