import { supabase } from "$lib/supabase/supabase"

export async function GET(){
  const {data, error } = await supabase.from('web_links')
    .select('*')
    .order('title')
  
  
        
  if (error) {
    return new Response(JSON.stringify(error)) // respuesta al get
  }
  return new Response(JSON.stringify(data)) // respuesta al get
}