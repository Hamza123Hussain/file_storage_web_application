import { supabase } from '../../../../utils/Supabaseconfig'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  try {
    const payload = await req.json()
    console.log('Payload received:', payload)
    const { data, error } = await supabase.from('File').insert([
      {
        Name: payload?.Name,
        LastModified: payload?.LastModified,
        type: payload?.type,
        size: payload?.size,
        parentID: payload?.ParentID,
        CreatedBy: payload?.CreatedBy,
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
