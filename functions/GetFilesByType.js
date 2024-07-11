import axios from 'axios'

export const getFileStats = async (type, email) => {
  try {
    const response = await axios.get('/api/File/CountFiles', {
      params: { type, email },
    })

    if (response.status === 200) {
      return response.data.data // Assuming response.data.data contains an array of file objects
    } else {
      console.error('Error fetching data:', response.data.message)
      alert('Failed to fetch data')
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    alert('Unexpected error occurred')
    throw error
  }
}
