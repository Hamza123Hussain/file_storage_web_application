import axios from 'axios'

export const CreateImportant = async (fileDetails, email, parentID) => {
  try {
    const response = await axios.post('/api/Important/Create', {
      Name: fileDetails.Name,
      LastModified: fileDetails.LastModified,
      type: fileDetails.type,
      size: fileDetails.size, // Keep size in MB
      parentID,
      createdBy: email,
      url: fileDetails.url,
    })

    if (response.status === 201) {
      console.log('Data inserted successfully:', response.data)
      return response.data
    } else {
      console.error('Error inserting data:', response.data.message)
      return null
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return null
  }
}
