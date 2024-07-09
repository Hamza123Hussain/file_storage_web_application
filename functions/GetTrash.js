import axios from 'axios'

export const GetTrash = async () => {
  try {
    const response = await axios.get('/api/Trash/GetTrash')
    // console.log('API Response:', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
