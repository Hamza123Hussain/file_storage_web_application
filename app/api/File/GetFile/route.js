import { supabase } from '../../../../utils/Supabaseconfig'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const { data, error } = await supabase.from('File').select('*')
    if (error) {
      console.error('Error fetching data from Supabase:', error.message)
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
    // console.log('Data fetched successfully:', data)
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Unexpected error occurred:', error)
    return NextResponse.json(
      { message: 'Unexpected error occurred' },
      { status: 500 }
    )
  }
}
