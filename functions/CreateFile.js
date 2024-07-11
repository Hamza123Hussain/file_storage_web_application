import axios from 'axios'
import { getFileType } from './FileTypesShort'
import toast from 'react-hot-toast'

export const CreateFile = async (File, parentId, Email) => {
  try {
    const FileType = getFileType(File?.File.type)
    const lastModifiedDate = new Date(File?.File.lastModified).toISOString() // Convert to ISO string

    const Response = await axios.post('/api/File/CreateFile', {
      Name: File.Name == '' ? File.File.name : File?.Name,
      LastModified: lastModifiedDate,
      type: FileType,
      size: (File?.File.size / (1024 * 1024)).toFixed(2), // Keep size in MB
      ParentID: parentId,
      CreatedBy: Email,
      file: File,
    })

    if (Response.status === 201) {
      console.log('Data inserted successfully:', Response.data)
      toast.success('File Has Been Created')
    } else {
      console.error('Error inserting data:', Response.data.message)
      toast.error('Failed to insert File')
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    toast.error('Unexpected error occurred')
  }
}
