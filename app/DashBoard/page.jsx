import FileList from '@/components/Files/FileList'
import FolderList from '@/components/Folder/FolderList'
import Searchbar from '@/components/Searchbar'

export default function ProfileClient() {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <Searchbar />
      <FolderList />
      <FileList />
    </div>
  )
}
