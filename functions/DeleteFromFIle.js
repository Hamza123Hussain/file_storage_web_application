export const deleteFile = async (id) => {
  const response = await fetch('/api/File/DeleteFile', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })

  const result = await response.json()
  console.log(result)
}
