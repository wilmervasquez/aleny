<script lang="ts">
  import axios from "axios";
	import { categoriasStites } from "$lib/datos";
	import { supabase } from "$lib/supabase/supabase";

  let urlImg: string = "";
  let title = "";
  let link = "";

  let categoryes = [];

	let state: 'loading' | 'success' | 'error' | null = null;

  // validacion de url
  $: if (/^https?:\/\//.test(link)) {
    link = link.replace(/^https?:\/\//,'');
    if (/\/$/.test(link)) {
      link = link.replace(/\/$/,'');
    }
  }

  let isLarge = false;
  $: isLarge = urlImg.length > 0  ;
  let isValidImageURL: boolean = false;
  let tags: string[] = ['Framework CSS','Manier'];
  let inputTagValue: string;

  function addTag(e:KeyboardEvent): void {
    if (e.key == 'Enter') {
      tags = [...tags,inputTagValue]
      inputTagValue = ''
    }
  }

  async function createWebLink() {
    state = 'loading';
    const {data: user } = await supabase.auth.getUser();
    console.log(user);
    if(user.user == null) return null;

    const {data, status,statusText,...rest} = await axios.postForm('/api/createWebLink',{
      icon: urlImg,
      title,
      link,
      userId:user.user.id
    });
    state = data.success ? 'success' : 'error';
   
    

  }
</script>
<div class="flex flex-col p-3 gap-3">
  <h2 class="flex items-center justify-between text-2xl font-bold pt-3 text-blue-500">
    Created New Link
    <button on:click={createWebLink} class="flex items-center text-sm gap-2 py-2 px-4 justify-center bg-white bg-opacity-10 rounded-xl">
      <div>
        {#if state == 'loading'}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#4f46e5" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#4f46e5" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
        {:else if state == 'success'}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#3bdf26" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/></svg>
        {:else if state == 'error'}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#e11d48" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>
        {/if}
      </div>
      Crear
    </button>

  </h2>
  <div class="flex items-center">
    <div class="container-icon grid place-items-center w-16 h-16 p-3 rounded-2xl bg-white shadow-md">
      {#if urlImg==''}
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path class="fill-gray-500" fill-rule="evenodd" d="M18.004 1.5a.75.75 0 0 1 1.058-.059a11.037 11.037 0 0 1 3.688 8.246c0 5.751-4.389 10.478-10 11.013v.55H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-.509a11.037 11.037 0 0 1-7.809-3.678a.75.75 0 1 1 1.118-1a9.537 9.537 0 0 0 7.128 3.187a9.563 9.563 0 0 0 9.563-9.563a9.537 9.537 0 0 0-3.188-7.128a.75.75 0 0 1-.059-1.06M7.221 5.97a6.25 6.25 0 0 0 5.065 10.273a3.38 3.38 0 0 1 .341-2.078c.488-.919 1.481-1.297 2.158-1.463a6.374 6.374 0 0 1 1.32-.177h.032c.75-.008 1.17-.183 1.418-.361c.249-.18.395-.415.502-.68a.764.764 0 0 1 .03-.067A6.264 6.264 0 0 0 16.5 5.663a4.619 4.619 0 0 1-.441.949c-.211.332-.61.654-.917.883a7.29 7.29 0 0 1-.692.447c-.172.102-.32.191-.463.289c-.307.21-.531.427-.684.752a.39.39 0 0 0-.016.281c.058.221.099.471.1.728c.002 1.121-1.038 1.767-1.896 1.757c-1.985-.023-3.156-1.689-3.308-3.448c-.072-.836-.503-1.68-.962-2.331m1.106-1.03c.59.797 1.24 1.96 1.35 3.231c.11 1.27.869 2.067 1.83 2.078a.473.473 0 0 0 .293-.105c.073-.062.086-.115.086-.148a1.34 1.34 0 0 0-.05-.348a1.886 1.886 0 0 1 .109-1.3c.305-.653.759-1.056 1.194-1.355c.185-.126.377-.24.544-.34l.066-.04a6.11 6.11 0 0 0 .497-.32c.324-.242.503-.417.547-.486a3.59 3.59 0 0 0 .428-1.165A6.22 6.22 0 0 0 12 3.75c-1.372 0-2.64.442-3.672 1.192m8.49 9.04c-.208.027-.43.042-.665.045h-.018c-.012 0-.03 0-.056.002a4.856 4.856 0 0 0-.935.132c-.585.143-1.02.386-1.19.709c-.201.378-.228.787-.187 1.128a6.255 6.255 0 0 0 3.052-2.016M4.25 10a7.75 7.75 0 1 1 15.5 0a7.75 7.75 0 0 1-15.5 0" clip-rule="evenodd"/></svg>
      {:else}
        <img src={urlImg} alt="" class="">
      {/if}
    </div>
    <div class="flex flex-col flex-grow gap-2 pl-3">
      <div class="flex items-center shadow-2xl rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-dark dark:fill-white" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M7.25 12a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clip-rule="evenodd"/></svg>
        <input bind:value={urlImg} class="pl-3 text-sm caret-violet-300 flex-grow" placeholder="Icon URL">
      </div>
      <div class="flex items-center shadow-2xl rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-dark dark:fill-white" d="M7.948 2.25c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243V7.95a.75.75 0 1 0 1.5 0V7c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789c.13-.13.327-.237.788-.3C6.388 3.753 7.036 3.75 8 3.75h3.25v16.5H7a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-4.25V3.75H16c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3c.13.13.237.327.3.788c.064.483.066 1.131.066 2.095v.95a.75.75 0 0 0 1.5 0V6.948c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.343-.08-2.242-.08z"/></svg>
        <input bind:value={title} class="pl-3 text-sm caret-violet-300" placeholder="Title">
      </div>
    </div>
  </div>
  <!-- Link -->
  <div class="flex items-center rounded-xl shadow-md p-2 bg-white dark:bg-white dark:bg-opacity-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path class="fill-dark dark:fill-white" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"/>
      <path class="fill-dark dark:fill-white" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"/>
      <path class="fill-dark dark:fill-white" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"/></svg>
    <div class=" pl-3 text-sm">https://</div>
    <input bind:value={link} class="text-sm font-bold placeholder:font-normal flex-grow" placeholder="www.example.com">
  </div>
  <!-- Description -->
  <div class="flex items-center shadow-md rounded-xl p-2 bg-white  dark:bg-white dark:bg-opacity-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path class="fill-dark dark:fill-white" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14M7.25 8A.75.75 0 0 1 8 7.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
    </svg>
    <input type="text" class="pl-3 text-sm caret-violet-300" placeholder="Description"/>
  </div>
  <!-- Tags -->
  <div class="flex flex-wrap gap-2 p-2 items-center bg-white dark:bg-white dark:bg-opacity-10 rounded-xl shadow-md">
    <div class="">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="dark:fill-white" fill-rule="evenodd" d="M10.723 3.2a.75.75 0 1 0-1.446-.4L7.763 8.25H4a.75.75 0 1 0 0 1.5h3.347l-1.528 5.5H2a.75.75 0 0 0 0 1.5h3.402L4.277 20.8a.75.75 0 0 0 1.446.4l1.236-4.45h7.443l-1.125 4.05a.75.75 0 0 0 1.446.4l1.236-4.45H20a.75.75 0 1 0 0-1.5h-3.624l1.527-5.5H22a.75.75 0 0 0 0-1.5h-3.68l1.403-5.05a.75.75 0 1 0-1.446-.4l-1.514 5.45H9.32zm4.096 12.05l1.528-5.5H8.903l-1.527 5.5z" clip-rule="evenodd"/></svg>
    </div>
    {#each tags as tag}
      <div class="bg-appdark relative text-sky-200 px-2 rounded-md text-sm">
        {tag}
        <button class="absolute -top-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path class="fill-content-950" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>
        </button>
      </div>
    {/each}
    <input class=" px-2 rounded-md text-sm" placeholder="#agregar" bind:value={inputTagValue} on:keyup={addTag}>
  </div>
  <div class="">
    <h3 class="font-bold text-lg pb-2">Categorias</h3>
    <div class="flex flex-col gap-5 pl-3">
      {#each categoriasStites as _}
        <label class="flex gap-2 items-center cursor-pointer">
          <input type="checkbox" name="" class="peer ">
          <p class="peer-checked:font-bold peer-checked:text-blue-500 dark:peer-checked:text-blue-400 text-sm">{_}</p>
        </label>
      {/each}
    </div>
  </div>
</div>
<style>
  
  
</style>