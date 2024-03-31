<script>
  import "../app.css";
  import { nameApp } from "$lib/infoCompany";
	import { onMount } from "svelte";
	
  onMount(()=>{
    document.title = nameApp;
  });
  
</script>
<slot />
<style>
  
</style>