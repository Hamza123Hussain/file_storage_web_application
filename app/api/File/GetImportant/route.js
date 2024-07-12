import { supabase } from '../../../../utils/Supabaseconfig'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`)
    const email = url.searchParams.get('email')

    // Log the email to check if it's being received correctly
    console.log('Received email:', email)

    let query = supabase.from('File').select('*').eq('important', true)

    if (email) {
      query = query.eq('CreatedBy', email)
    }

    const { data, error } = await query

    if (error) {
      console.error('Supabase query error:', error.message, error.details)
      return NextResponse.json(
        { message: error.message, details: error.details },
        { status: 500 }
      )
    }

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Unexpected error occurred:', error.message, error.stack)
    return NextResponse.json(
      { message: 'Unexpected error occurred', details: error.message },
      { status: 500 }
    )
  }
}

export default GET
