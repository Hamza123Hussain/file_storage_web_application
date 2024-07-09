export const DeleteTrash = async (id) => {
  const response = await fetch('/api/Trash/DeleteTrash', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })

  const result = await response.json()
  console.log(result)
}
