import React from 'react'

import FileList from '@/components/Files/FileList'
import Searchbar from '@/components/Search/Searchbar'
import FolderList from '@/components/Folder/FolderList'

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
