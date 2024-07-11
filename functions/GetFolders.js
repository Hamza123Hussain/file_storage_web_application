import axios from 'axios'

export const GetFolders = async (Email) => {
  try {
    const response = await axios.get('/api/Folder/GetFolder', {
      params: { Email },
    })
    // console.log('API Response:', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
