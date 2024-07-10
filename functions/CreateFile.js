import axios from 'axios'
import { getFileType } from './FileTypesShort'

export const CreateFile = async (File, parentId) => {
  try {
    const FileType = getFileType(File?.File.type)
    const lastModifiedDate = new Date(File?.File.lastModified).toISOString() // Convert to ISO string

    const Response = await axios.post('/api/File/CreateFile', {
      Name: File.Name == '' ? File.File.name : File?.Name,
      LastModified: lastModifiedDate,
      type: FileType,
      size: (File?.File.size / (1024 * 1024)).toFixed(2), // Keep size in MB
      ParentID: parentId,
    })

    if (Response.status === 201) {
      console.log('Data inserted successfully:', Response.data)
      alert('Data inserted successfully')
    } else {
      console.error('Error inserting data:', Response.data.message)
      alert('Failed to insert data')
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    alert('Unexpected error occurred')
  }
}
