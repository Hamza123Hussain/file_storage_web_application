import axios from 'axios'
import { deleteFile } from './DeleteFromFIle'

export const CreateTrash = async (File, Email) => {
  console.log('Trash details', File.Name)
  try {
    const response = await axios.post('/api/Trash/CreateTrash', {
      Name: File.Name,
      LastModified: File.LastModified,
      type: File?.type,
      size: File?.size, // Keep size in MB
      ParentID: File?.parentId,
      CreatedBy: Email,
    })

    if (response.status === 201) {
      console.log('Data inserted successfully:', response.data)
      const data = await deleteFile(File.id, Email)
      if (data) {
        return data
      } else {
        console.error('File deletion failed')
        return null
      }
    } else {
      console.error('Error inserting data:', response.data.message)
      return null
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return null
  }
}
