import axios from 'axios'

export const CreateTrash = async (File) => {
  console.log('Trash details', File.Name)
  try {
    const Response = await axios.post('/api/Trash/CreateTrash', {
      Name: File.Name,
      LastModified: File.LastModified,
      type: File?.type,
      size: File?.size, // Keep size in MB
      ParentID: File?.parentId,
    })

    if (Response.status === 201) {
      console.log('Data inserted successfully:', Response.data)
      alert('Data inserted successfully')
    } else {
      console.error('Error inserting data:', Response.data.message)
      alert('Failed to insert data')
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    alert('Unexpected error occurred')
  }
}
/**LastModified
: 
"2024-07-06"
Name
: 
"Hamza Hussain"
created_at
: 
"2024-07-09T12:20:08.677994+00:00"
id
: 
"d020a51e-ee2d-4e83-8f45-ec7adc262b63"
parentID
: 
null
size
: 
0.01
type
: 
"application/vnd.openxmlformats-officedocument.wordprocessingml */
