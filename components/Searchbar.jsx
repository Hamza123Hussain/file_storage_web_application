'use client'
import { Search } from 'lucide-react'
import React, { useState } from 'react'

const Searchbar = () => {
  const [searchterm, setsearch] = useState('')
  return (
    <div className=" rounded-lg flex gap-2 items-center  ">
      <input
        className=" w-full rounded-lg  p-4 border-2 bg-transparent border-slate-200 focus:border-slate-500 "
        type="search"
        value={searchterm}
        onChange={(e) => setsearch(e.target.value)}
      />
      <Search size={40} className=" cursor-pointer" />
    </div>
  )
}

export default Searchbar
