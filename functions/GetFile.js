import axios from 'axios'

export const GetFile = async () => {
  try {
    const response = await axios.get('/api/File/GetFile')
    // console.log('API Response:', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
