<script lang="ts">
	import { get } from "svelte/store";
  import InputSearch from "../../components/Inputs/InputSearch.svelte";
	import SetTheme from "../../components/SetTheme.svelte";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import Button from "../../components/button/Button.svelte";
	import { goto } from "$app/navigation";
  let avatar_url:string | null= ""
  onMount(()=>{
    avatar_url =    localStorage.getItem('avatar_url')
  })

  console.log($page);
</script>
<header class="flex items-center justify-between gap-5 p-4 z-50 bg-applight dark:bg-appdark">
  <!-- left -->
  <div class="">
    <a class="flex items-center gap-3 pl-3" href="/">
      <div class="flex-shrink-0">
        <img src="/image/favicon.svg" alt="" class="w-8">
      </div>
      <h2 class="name-f text-2xl font-bold hidden sm:block text-violet-700 dark:text-violet-300">Aleny</h2>
    </a>
  </div>
  <!-- center -->
  <div class="hidden sm:flex gap-5 ">
    <a href="/" class="pb-2" class:activo={$page.url.pathname == '/'}>Home</a>
    <a href="/test" class="dark:text-gray-300" class:activo={$page.url.pathname == '/test'}>Favoritous</a>
    <a href="/" class="dark:text-gray-300" class:activo={$page.url.pathname == '/a'}>Account</a>
  </div>
  <!-- right -->
  <div class="flex items-center p-2 gap-5">
    <!-- <InputSearch/> -->
  
    
    <SetTheme/>
    <Button on:click={()=> goto("/create")} color="primary" size="sm">Create&nbsp;New</Button>
    <a href="/signIn">
      <img class="w-10 h-10 p-1 rounded-full " src={avatar_url} alt="Bordered avatar">
    </a>
  </div>
 
  
</header>
<style>
  .name-f{
    font-family: Righteous;
    font-weight: normal;
  }
  a.activo{
    position: relative;
    color: rgb(0, 195, 255);
    font-weight: bold;
  }
  a.activo::before{
    content: " ";
    height: 4px;
    width: 50%;
    position: absolute;
    background-color: rgb(0, 238, 255);
    left: 25%;
    border-radius: 10px;
    bottom: 0;
  }
</style>