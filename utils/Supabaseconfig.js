import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_Url
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
