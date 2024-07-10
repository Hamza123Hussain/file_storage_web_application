import axios from 'axios'
export const getFileStats = async (type) => {
  try {
    const response = await axios.get('/api/File/CountFiles', {
      params: { type },
    })

    if (response.status === 200) {
      console.log('Data fetched:', response.data)
      //   alert('Data fetched successfully')
      return response.data.data // Assuming response.data is an array of file objects
    } else {
      console.error('Error fetching data:', response.data.message)
      alert('Failed to fetch data')
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    alert('Unexpected error occurred')
    setError(error.message) // Set error state for UI feedback
  }
}
