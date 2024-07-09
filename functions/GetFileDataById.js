import { supabase } from '@/utils/Supabaseconfig'

export const GetFileData = async (ID) => {
  try {
    const { data, error } = await supabase
      .from('File')
      .select('*')
      .eq('parentID', ID) // Use params.ID directly here

    if (error) {
      console.error('Error fetching data from Supabase:', error.message)
    } else {
      console.log('Data fetched successfully:', data)
      return data
    }
  } catch (error) {
    console.error('Unexpected error occurred:', error)
  }
}
