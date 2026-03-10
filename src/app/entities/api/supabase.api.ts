import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const PUBLISHER_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const supabase = createClient(PROJECT_URL as string, PUBLISHER_KEY as string)
