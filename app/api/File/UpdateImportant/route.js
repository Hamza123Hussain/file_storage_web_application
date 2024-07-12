import { supabase } from '../../../../utils/Supabaseconfig'
import { NextResponse } from 'next/server'

export const PUT = async (req) => {
  try {
    const payload = await req.json()
    const { id, important } = payload

    // Log the payload to ensure the data is being received correctly
    console.log('Received payload:', payload)

    const { data, error } = await supabase
      .from('File')
      .update({ important })
      .eq('id', id)

    if (error) {
      console.error('Error updating data:', error.message)
      return NextResponse.json({ message: error.message }, { status: 500 })
    } else {
      console.log('Data updated successfully:', data)
      return NextResponse.json(
        { message: 'Data updated successfully', data },
        { status: 200 }
      )
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { message: 'Unexpected error occurred', error: error.message },
      { status: 500 }
    )
  }
}

export default PUT
