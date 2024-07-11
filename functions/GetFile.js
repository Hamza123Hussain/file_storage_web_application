import axios from 'axios'

export const GetFile = async (Email) => {
  try {
    const response = await axios.get('/api/File/GetRecentFiles', {
      params: { Email },
    })
    // console.log('API Response:', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
