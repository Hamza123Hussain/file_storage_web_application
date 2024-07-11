import toast from 'react-hot-toast'

export const deleteFile = async (id) => {
  const response = await fetch('/api/File/DeleteFile', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
  if (response.ok) {
    toast.success('File Moved To Trash')
    window.location.reload()
  }

  const result = await response.json()
  console.log(result)
}
