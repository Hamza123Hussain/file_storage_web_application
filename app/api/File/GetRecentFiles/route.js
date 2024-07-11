import { supabase } from '../../../../utils/Supabaseconfig'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`)
    const Email = searchParams.get('Email')
    const { data, error } = await supabase
      .from('File')
      .select('*')
      .eq('CreatedBy', Email)
      .order('created_at', { ascending: false }) // Order by modified_date in descending order
      .limit(3)

    if (error) {
      console.error('Error fetching data from Supabase:', error.message)
      return NextResponse.json({ message: error.message }, { status: 500 })
    }

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Unexpected error occurred:', error)
    return NextResponse.json(
      { message: 'Unexpected error occurred' },
      { status: 500 }
    )
  }
}

/**    const { data, error } = await supabase
      .from('File')
      .select('*')
     ) */
