import axios from 'axios'

export const GetImportant = async (email) => {
  try {
    const response = await axios.get('/api/File/GetImportant', {
      params: { email },
    })
    return response.data.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
