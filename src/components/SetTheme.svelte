<script lang="ts">
	import { getThemeUser, setDarkTheme, setLightTheme, setSystemTheme } from "$lib/tailwindTheme";
	import { onMount } from "svelte";

  let theme: string;
  onMount(()=>{
    theme = getThemeUser()
  })
  function changeTheme() {
    if (theme == 'light') {
      setDarkTheme();
      theme = 'dark';
    }else{
      setLightTheme();
      theme = 'light';
    }
  }
</script>

<button on:click={changeTheme}>
  {#if theme == 'light'}
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" fill-rule="evenodd" d="M11.017 2.802a9.25 9.25 0 1 0 10.181 10.181A7.25 7.25 0 1 1 11.017 2.802M1.25 12C1.25 6.063 6.063 1.25 12 1.25c.717 0 1.075.571 1.137 1.026c.059.438-.103.995-.606 1.299a5.75 5.75 0 1 0 7.894 7.894c.304-.503.861-.665 1.299-.606c.455.062 1.026.42 1.026 1.137c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12" clip-rule="evenodd"/></svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#FFFFFF" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M3.669 3.716a.75.75 0 0 1 1.06-.047L6.95 5.7a.75.75 0 1 1-1.012 1.107L3.716 4.776a.75.75 0 0 1-.047-1.06m16.662 0a.75.75 0 0 1-.047 1.06l-2.222 2.031A.75.75 0 0 1 17.05 5.7l2.222-2.031a.75.75 0 0 1 1.06.047M12 7.75a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5M6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0m-5 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m-2.224 5.025a.75.75 0 0 1 1.06 0l2.222 2.223a.75.75 0 0 1-1.06 1.06l-2.222-2.222a.75.75 0 0 1 0-1.06m-10.051 0a.75.75 0 0 1 0 1.061l-2.223 2.222a.75.75 0 0 1-1.06-1.06l2.222-2.223a.75.75 0 0 1 1.06 0M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
  {/if}
</button>
<style>

</style>