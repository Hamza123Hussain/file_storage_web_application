import { supabase } from '../../../../utils/Supabaseconfig'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  try {
    const payload = await req.json()
    console.log('Payload received:', payload)

    const { Name, file } = payload

    // Upload file to Supabase storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('files')
      .upload(`public/${Name}`, file)

    if (uploadError) {
      console.error('Error uploading file:', uploadError.message)
      return NextResponse.json(
        { message: uploadError.message },
        { status: 500 }
      )
    }

    // Debugging: Check the upload data
    console.log('Upload Data:', uploadData)

    // Get the public URL of the uploaded file
    const { publicURL, error: urlError } = supabase.storage
      .from('files')
      .getPublicUrl(`public/${Name}`)

    // Debugging: Check the public URL
    console.log('Public URL:', publicURL)

    if (urlError) {
      console.error('Error retrieving public URL:', urlError.message)
      return NextResponse.json({ message: urlError.message }, { status: 500 })
    }

    // Verify the public URL is not null
    if (!publicURL) {
      console.error('Error: Public URL is null.')
      return NextResponse.json(
        { message: 'Error retrieving public URL.' },
        { status: 500 }
      )
    }

    // Insert the file metadata and URL into the database
    const { data: insertData, error: insertError } = await supabase
      .from('File')
      .insert([
        {
          Name: payload.Name,
          LastModified: payload.LastModified,
          type: payload.type,
          size: payload.size,
          parentID: payload.ParentID,
          url: publicURL, // Add the URL to the database
          CreatedBy: payload.CreatedBy,
        },
      ])

    if (insertError) {
      console.error('Error inserting data:', insertError.message)
      return NextResponse.json(
        { message: insertError.message },
        { status: 500 }
      )
    } else {
      console.log('Data inserted successfully:', insertData)
      return NextResponse.json(
        { message: 'Data inserted successfully', data: insertData },
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
