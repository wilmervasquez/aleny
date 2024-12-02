<script>
	import { goto } from "$app/navigation";
	import { supabase } from "$lib/supabase/supabase";
	import Header from "./Header.svelte";

  const {data:authListener}=supabase.auth.onAuthStateChange((event,session) =>{
    if (session == null) {
      // goto('/logIn');
    }else{
      console.log(session);
      localStorage.setItem('avatar_url',session.user.user_metadata.avatar_url);
    }
  })
  
  authListener.subscription
</script>
<div class="flex flex-col items-center">
  <div class="app w-full">
    <Header/>
    <slot />
    <footer class="flex flex-col">
      <p class="self-center py-4 text-gray-400">Copyright &copy; 2024 Soft By Creative Aleny</p>
    </footer>
  </div>
</div>
<style>
  .app{
    max-width: 1200px;
  }
 
</style>