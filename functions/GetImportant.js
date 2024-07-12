import axios from 'axios'

export const GetImporant = async (Email) => {
  try {
    const response = await axios.get('/api/Important/Get', {
      params: { Email },
    })
    // console.log('API Response:', response.data)
    return response.data.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
