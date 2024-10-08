import axios from 'axios'

export const GetTrash = async (Email) => {
  try {
    const response = await axios.get('/api/Trash/GetTrash', {
      params: { Email },
    })
    // console.log('API Response:', response.data)
    return response.data.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
