import toast from 'react-hot-toast'
import { fetchData } from './FetchDataFiles'

export const deleteFile = async (id, Email) => {
  const response = await fetch('/api/File/DeleteFile', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
  if (response.ok) {
    toast.success('File Moved To Trash')
    const data = await fetchData(Email)
    console.log('Fetched data after deletion:', data)

    return data
  }

  const result = await response.json()
  console.log(result)
  return null
}
