import { supabase } from "$lib/server/supabase"

export async function GET({cookies}){
  // Read
  // const { data,error} = await supabase
  //   .from('udhstudents')
  //   .select('name,lastname,dni')
  //   .ilike('name', '%k%')
  //   .range(0, 5);

  // INSERT
  cookies.set('user',Math.random().toString(),{path:''})
  // const { data, error } = await supabase
  //   .from('udhstudents')
  //   .insert([{ name: 'Look', lastname: 'otherValue' , dni: '99999999',gender:'M'}])
  //   .select();

  // LOGIN
  const {data,error} = await supabase.auth.signInWithOAuth({provider:'google'});
        
  if (error) {
    return new Response(JSON.stringify(error)) // respuesta al get
  }
  return new Response(JSON.stringify(data)) // respuesta al get
}