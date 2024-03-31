import { supabase } from '$lib/supabase/supabase'
import type { Actions, RequestEvent } from '@sveltejs/kit';

export const actions = {
  default: async({request}: RequestEvent) =>{
    const formData = await request.formData();
		const email = formData.get('email') as string;

    const {error} = await supabase.auth.signInWithOtp({
      email,
      options: {
        // shouldCreateUser: false,
        emailRedirectTo: 'http://localhost:5173/',
      }
    });

    if (error) {
      console.log(error);

      return {success:false}
    }
    return {success:true}
  }
} satisfies Actions;