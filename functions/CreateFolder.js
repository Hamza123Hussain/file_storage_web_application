// functions/CreateFolder.js

import axios from 'axios'
import toast from 'react-hot-toast'

export const CreateFolder = async (FolderName, parentId) => {
  try {
    const Response = await axios.post('/api/Folder/CreateFolder', {
      Name: FolderName,
      ParentID: parentId,
    })

    if (Response.status === 201) {
      console.log('Data inserted successfully:', Response.data)
      toast.success('Folder Created Sucessfully')
    } else {
      console.error('Error inserting data:', Response.data.message)
      toast.error('Failed to insert Folder')
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    toast.error('Unexpected error occurred')
  }
}
