import { supabase } from '../../../../utils/Supabaseconfig'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  try {
    const payload = await req.json()
    const { Name, LastModified, type, size, createdBy, url, parentID } = payload

    const { data, error } = await supabase.from('important').insert([
      {
        Name,
        LastModified,
        type,
        size,
        createdBy,
        parentID,
        url,
      },
    ])

    if (error) {
      console.error('Error inserting data:', error.message)
      return NextResponse.json({ message: error.message }, { status: 500 })
    } else {
      console.log('Data inserted successfully:', data)
      return NextResponse.json(
        { message: 'Data inserted successfully', data },
        { status: 201 }
      )
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { message: 'Unexpected error occurred' },
      { status: 500 }
    )
  }
}

export default POST
