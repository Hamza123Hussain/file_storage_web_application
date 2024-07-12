import toast from 'react-hot-toast'

export const DeleteTrash = async (id) => {
  const response = await fetch('/api/Trash/DeleteTrash', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
  if (response.ok) {
    toast.success('File Deleted Successfully')
    return true
  }

  const result = await response.json()
  console.log(result)
}
