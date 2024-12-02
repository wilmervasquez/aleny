<script lang="ts">
	import { clickOutside } from "@wvkit/doc";
  let categoriesVisible = false;
  
  function clickOutsideElement() {
    categoriesVisible = false
  }
</script>
<form class="self-center flex shadow-2xl rounded-2xl border max-w-lg w-full border-content-200 dark:border-content-700">
  <button class="flex items-center gap-3 relative pr-3 pl-4 bg-content-100 dark:bg-content-950 bg-opacity-50 rounded-l-2xl" on:click={()=>{categoriesVisible=true}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path class="fill-content-500" fill-rule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328c-.143.012-.28.026-.414.043c-1.01.125-1.842.387-2.55.974c-.707.587-1.118 1.357-1.427 2.327c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529c.77-.927.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11.23 11.23 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628c-.404-.335-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11" clip-rule="evenodd"/></svg>
    <p class="hidden sm:block">All</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path class="fill-content-500" fill-rule="evenodd" d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd"/></svg>
    <!-- categories -->
    <div class="categories absolute top-14 left-0 bg-content-50 dark:bg-content-900" use:clickOutside={clickOutsideElement}>
      <div class="cat" class:hidden={!categoriesVisible}>
        {#each new Array(10) as _}
          <div class="px-4 py-1" >Microsoft&nbsp;System</div>
        {/each}
      </div>
    </div>
  </button>
  <div class="flex items-center gap-3 flex-grow w-full bg-white dark:bg-appdark dark:bg-opacity-90 pl-4 pr-2 py-2 rounded-r-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path class="fill-content-600" fill-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.21 10.21 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25" clip-rule="evenodd"/></svg>
    <input type="text" placeholder="Search Web Sites" class="flex-grow block">
    <button class="bg-content-100 dark:bg-gray-800 p-2 rounded-xl relative">
      <div class="text-white bg-red-500 absolute px-2 rounded-full text-sm top-[-7px] right-[-7px]">3</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path class="fill-content-600" fill-rule="evenodd" d="M6.5 1.75a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M3.25 6.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m14.25 6.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5m-3.25 4.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m-1.5-11a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m4.75-3.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m-11 9.5a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M3.25 17.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"/></svg>
    </button>
  </div>
</form>
<style>
  .categories{
    max-height: 212px;
    padding: 6px;
    border-radius: 10px;
  }
  .cat{
    overflow-y: scroll;
    max-height: 200px;
  }
  .cat::-webkit-scrollbar {
    width: 6px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
  }
  .cat::-webkit-scrollbar-thumb {
    /* background: var(--bg-scrollbar-thumb); */
    border-radius: 4px;
  }
  /* .cat::-webkit-scrollbar-thumb:hover {
    background: var(--bg-scrollbar-thumb_hover);
  } */
</style>