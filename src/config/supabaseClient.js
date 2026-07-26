// setting up the superbase client 
// import { createClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js"

const supabase_Url = process.env.VITE_SUPABASE_URL
const supabase_API = process.env.VITE_SUPABASE_ANON_KEY

// console.log(import.meta.env.VITE_SUPABASE_URL)

export const supabase = createClient(
    supabase_Url,
    supabase_API
)