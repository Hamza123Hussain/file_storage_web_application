import axios from 'axios'

export const ToggleImportant = async (fileId, currentStatus) => {
  try {
    const response = await axios.put('/api/File/UpdateImportant', {
      id: fileId,
      important: !currentStatus,
    })

    if (response.status === 200) {
      console.log('Important status updated successfully:', response.data)
      return response.data
    } else {
      console.error('Error updating important status:', response.data.message)
      return null
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return null
  }
}
