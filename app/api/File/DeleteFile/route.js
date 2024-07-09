import { supabase } from '../../../../utils/Supabaseconfig'
import { NextResponse } from 'next/server'

export const DELETE = async (req) => {
  const { id } = await req.json() // Assuming the ID of the file to delete is sent in the request body

  try {
    const { data, error } = await supabase.from('File').delete().eq('id', id) // Match the record by ID

    if (error) {
      console.error('Error deleting data from Supabase:', error.message)
      return NextResponse.json({ message: error.message }, { status: 500 })
    }

    return NextResponse.json(
      { data, message: 'File deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error occurred:', error)
    return NextResponse.json(
      { message: 'Unexpected error occurred' },
      { status: 500 }
    )
  }
}
