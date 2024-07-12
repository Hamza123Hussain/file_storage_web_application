// handleUpload.js
import { supabase } from '@/utils/Supabaseconfig'
import { v4 as uuidv4 } from 'uuid'

export const handleUpload = async (
  file,
  fileName,
  fileType,
  user,
  parentId
) => {
  try {
    const lastModifiedDate = new Date(file?.lastModified).toISOString()
    // Create a unique file name
    const fileId = uuidv4()
    const filePath = `${fileId}-${file.name}`

    // Upload the file to Supabase storage
    const { data, error: uploadError } = await supabase.storage
      .from('files')
      .upload(filePath, file)

    if (uploadError) {
      console.error('Error uploading file:', uploadError)
      return { success: false, message: 'Error uploading file' }
    }

    // Get the public URL of the uploaded file
    const { data: publicURLData, error: urlError } = supabase.storage
      .from('files')
      .getPublicUrl(filePath)

    // Additional logging for debugging
    console.log('Public URL Data:', publicURLData)
    console.log('URL Error:', urlError)

    if (urlError) {
      console.error('Error getting public URL:', urlError)
      return { success: false, message: 'Error getting public URL' }
    }

    const publicURL = publicURLData.publicUrl || publicURLData.publicURL
    console.log('Public URL:', publicURL)

    // Ensure the URL is not null
    if (!publicURL) {
      console.error('Public URL is null')
      return { success: false, message: 'Public URL is null' }
    }

    // Store file details in the database
    const { data: insertData, error: insertError } = await supabase
      .from('File')
      .insert([
        {
          Name: fileName,
          type: fileType,
          size: (file.size / (1024 * 1024)).toFixed(2),
          CreatedBy: user.email,
          url: publicURL, // Ensure this is set correctly
          LastModified: lastModifiedDate,
          parentID: parentId,
        },
      ])

    if (insertError) {
      console.error('Error inserting file details:', insertError)
      return { success: false, message: 'Error inserting file details' }
    }

    return {
      success: true,
      message: 'File uploaded successfully',
      data: insertData,
    }
  } catch (error) {
    console.error('Error in handleUpload function:', error)
    return { success: false, message: 'Error uploading file' }
  }
}
