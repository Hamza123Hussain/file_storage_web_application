import axios from 'axios'
import { deleteFile } from './DeleteFromFIle'

export const CreateTrash = async (File, Email) => {
  console.log('Trash details', File.Name)
  try {
    const Response = await axios.post('/api/Trash/CreateTrash', {
      Name: File.Name,
      LastModified: File.LastModified,
      type: File?.type,
      size: File?.size, // Keep size in MB
      ParentID: File?.parentId,
      CreatedBy: Email,
    })

    if (Response.status === 201) {
      // console.log('Data inserted successfully:', Response.data)
      // alert('Data inserted successfully')
      const isDeleted = await deleteFile(File.id)
      if (isDeleted) {
        console.log('FILE GONE')
        window.location.reload() // Reload the page after successful operation
      }
    } else {
      // console.error('Error inserting data:', Response.data.message)
      // alert('Failed to insert data')
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    // alert('Unexpected error occurred')
  }
}
