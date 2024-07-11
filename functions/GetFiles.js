import axios from 'axios'

export const GetFiles = async (Email) => {
  try {
    const response = await axios.get('/api/File/GetFile', {
      params: { Email },
    })
    return response.data.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
