import axios from 'axios'

export const CreateFolder = async (FolderName) => {
  try {
    const Response = await axios.post('api/Folder/CreateFolder', {
      Name: FolderName,
    })

    if (Response.status == 201) {
      console.log('Data inserted successfully:', Response.data)
      alert('Data inserted successfully')
    } else {
      console.error('Error inserting data:', Response.data.message)
      alert('NO DATA SAVED')
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    alert('Unexpected error occurred')
  }
}
