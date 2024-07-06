import FileList from '@/components/Files/FileList'
import FolderList from '@/components/Folder/FolderList'

export default function ProfileClient() {
  return (
    <div className="flex flex-col gap-4">
      <FolderList />
      <FileList />
    </div>
  )
}
