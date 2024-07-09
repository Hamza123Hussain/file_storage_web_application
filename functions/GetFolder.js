import axios from 'axios'

export const GetFolder = async () => {
  try {
    const response = await axios.get('/api/Folder/GetRecentFolders')
    // console.log('API Response:', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
