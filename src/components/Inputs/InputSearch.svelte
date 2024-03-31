<script lang="ts">
	import { goto } from "$app/navigation";
	import type { Keyboard } from "@playwright/test";

	function textFormatting(valueSearch: string, ...searchesFound:string[]): string[][] {
    valueSearch = valueSearch.trim();

    searchesFound = searchesFound.filter((text):boolean => {
      let capture = new RegExp(`^${valueSearch}`,"i")
      return capture.test(text)
    })

    const collection: string[][] = searchesFound.map((text: string): string[] =>{
      return [
        text.slice(0,valueSearch.length).replaceAll(" ","&nbsp;"),
        text.slice(valueSearch.length).replaceAll(" ","&nbsp;"),
        text
      ]
    })
    return collection
  }

	let theValueIsGreaterThanZero: boolean = false;
	let inputSearch: HTMLInputElement;
	let modalSearch: HTMLDialogElement;
	let activeInputSearch: boolean = false;
	let tabs: string[][] = [];
  let theModalIsVisible : boolean = false;
	async function onKeyup(eventKeyup: KeyboardEvent) {
		const target = eventKeyup.target as HTMLInputElement;
		theValueIsGreaterThanZero = target.value.length > 0;
		let data = [
			'niño',
			'Fluer',
			'lino',
			'figma',
			'Clean Code | Github',
			'Fitues',
			'IDE',
			'icons',
			'Matemática Basica II',
			'Lenguaje II'
		];
		tabs = textFormatting(target.value, ...data);
		if (tabs.length == 0) {
			activeInputSearch = false;
		}
	}
	function deleteValueInput(): void {
		inputSearch.value = '';
		theValueIsGreaterThanZero = false;

    theModalIsVisible = false; 
    document.body.style.overflowY = "scroll";

	}
	function activeInputSearchOnFocus() {
		activeInputSearch = true;
	}
	function desactiveInputSearchOnBlur() {
		activeInputSearch = true;
		setTimeout(() => {
			activeInputSearch = false;
		}, 300);
	}
	function setValueInputSearch(value: string): void {
		inputSearch.value = value;
    goto(`/search?q=${value}`)

	}

  function showMoal() {
    theModalIsVisible = true;
    document.body.style.overflow = "hidden";

  }
  function closePopup(event: KeyboardEvent) {
    if (event.key=='Escape') {
      theModalIsVisible = false;
    }
  }
  
</script>
<svelte:window on:keyup={closePopup}/>
<button on:click={showMoal} class="flex p-2 text-white rounded-full gap-2 items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-gray-600 dark:fill-gray-400" fill-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.21 10.21 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25" clip-rule="evenodd"/></svg>
</button>
<!-- dialog -->
<div class="backdrop grid" class:hidden={!theModalIsVisible}>
  <div class="dialog bg-white dark:bg-appdark rounded-2xl min-h-[400px] shadow-2xl">
    <form class="flex p-1 pr-2 gap-2">
      <div class="flex-shrink-0 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-gray-600 dark:fill-gray-400" fill-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.21 10.21 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25" clip-rule="evenodd"/></svg>
      </div>

      <input
        type="text"
        placeholder="Buscar Herramientas"
        on:keyup={onKeyup}
        on:focus={activeInputSearchOnFocus}
        on:blur={desactiveInputSearchOnBlur}
        bind:this={inputSearch}
        class="dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 flex-grow w-0"
      />
      <button
        class="btn-delete self-center p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full"
        style:display={theValueIsGreaterThanZero ? "opacity-1" : "opacity-0"}
        on:click={deleteValueInput}
      >
        <svg width="10" height="10" viewBox="0 0 6 6">
          <path class="stroke-gray-600 dark:stroke-gray-400 stroke-1" d="M 0 0 L 6 6 M 6 0 L 0 6"/>
        </svg>
      </button>
    </form>
    <!-- results -->
    <div class="results flex flex-col p-1">
      {#each tabs as tab}
        <button
          class="flex p-2 gap-2 dark:hover:bg-white dark:hover:bg-opacity-5 hover:bg-black hover:bg-opacity-5 rounded-xl"
          data-value={tab[1]}
          on:click={()=>setValueInputSearch(tab[2])}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-gray-600 dark:fill-gray-400" fill-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.21 10.21 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25" clip-rule="evenodd"/></svg>
          </div>
          <div class="flex">
            <b class="text-gray-900 dark:text-white pl-2">{@html tab[0]}</b>
            <span class="text-gray-800 dark:text-gray-400">{@html tab[1]}</span>
          </div>
        </button>
      {/each}
    </div>
  </div>
</div>
<style>
 
  @media (min-width:621px) {
    .backdrop{
      background-color: rgba(0, 0, 0, 0.404);
      backdrop-filter: blur(5px);
      place-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

    }

    .dialog{
      width: 100%;
      max-width: 600px;
    }
  }
  @media (max-width:620px) {
    .backdrop{
      padding: 10px;
      align-items: start;
      backdrop-filter: blur(5px);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

  }
</style>
