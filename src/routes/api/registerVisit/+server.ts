import { supabase } from "$lib/supabase/supabase"

export async function GET({url}){
  const idLink = url.searchParams.get('idLink');

  const { error } = await supabase.rpc('register_visit', {id_link:idLink})
  if (error) {
    return new Response(JSON.stringify({success:false})) // respuesta al get
  }
  return new Response(JSON.stringify({success:true})) // respuesta al get
}