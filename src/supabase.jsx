import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hrszsjrvqfcjlilrhiqg.supabase.co'
const supabaseKey = "sb_publishable_yp0AGmp1yARjHqaZcFjpog_ve8YJv1r"
export const supabase = createClient(supabaseUrl, supabaseKey)