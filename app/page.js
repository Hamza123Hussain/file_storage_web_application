import Searchbar from '@/components/Searchbar'

import React from 'react'
import FolderList from './Folders/page'
import FileList from '@/components/Files/FileList'

const page = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <Searchbar />
      <FolderList />
      <FileList />
    </div>
  )
}

export default page
