<script lang="ts">
	import { page } from '$app/stores';
	import { categoriasStites } from '$lib/datos';
	import CardLink from '../../components/Cards/CardLink.svelte';
	import Images from './Images.svelte';
	import type { CardTarget } from '$lib/interface';
	import Search from './Search.svelte';
	import SectionCard from './SectionCard.svelte';
	import type { PageData } from './$types';

	let recents: CardTarget[] = [];
	let state: 'load' | 'loading' | 'error' = 'loading';

	// (async function() {
	//   state = "error"

	//   const response = await fetch('/api/getLinksWebs?idLink=');
	//   if (response.ok) {
	//     const data = await response.json() as CardTarget[];
	//     sites = data;
	//     let db = 'rec'
	//     let y ;
	//     if (y = localStorage.getItem(db)) {
	//       recents = JSON.parse(y);
	//     } else {
	//       localStorage.setItem(db,JSON.stringify(sites.slice(0,8)))
	//     }
	//     state = "load"
	//   } else {
	//     state = "error"

	//   }

	// })();


	export let data: PageData;
</script>

<div class="page">
	<div class="flex flex-col">
		<h2 class="self-center text-lg pt-8 pb-4">All <b>Free</b> And <b>Pro</b> Sites Available</h2>
		<h2 class="self-center text-4xl text-center"><b>{data.webLinks.length}+ Websites for Every Purpose</b></h2>
		<h2 class="self-center text-lg pt-3"><b>Save</b> your favorite sites</h2>
		<div class="flex self-center gap-5 pt-5 pb-14">
			{#each recents as { title, icon_url }}
				<div
					class="group grid place-items-center w-14 h-14 p-2 cursor-pointer relative rounded-2xl bg-white dark:bg-white dark:bg-opacity-20"
				>
					<img src={icon_url} alt="" class="h-10 object-contain" />
					<h3 class="absolute hidden group-hover:block text-sm top-16 left-2/4 translate-x-[-50%]">
						{@html title.replaceAll(' ', '&nbsp;')}
					</h3>
				</div>
			{/each}
		</div>
    <div class="px-3 grid place-items-center">
      <Search />

    </div>
	</div>

	<section class="px-3 pt-2">
		<div class="flex items-center gap-3 overflow-x-scroll scrollbar-none justify-center pt-5">
			<!-- Card -->
			<div class="flex items-center bg-appdark rounded-full p-1 pr-5 gap-3">
				<div class="p-2 rounded-full bg-black bg-opacity-10">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
						><path
							class="fill-white"
							fill-rule="evenodd"
							d="M7.307 1.25c-.801 0-1.35 0-1.84.133a3.75 3.75 0 0 0-2.36 1.936c-.227.452-.334.991-.491 1.777l-.62 3.098a3.79 3.79 0 0 0 .754 3.117v2.745c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.748.748 1.697 1.08 2.87 1.238c1.139.153 2.595.153 4.432.153h1.113c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-2.744a3.79 3.79 0 0 0 .753-3.118l-.62-3.098c-.156-.786-.264-1.325-.49-1.777a3.75 3.75 0 0 0-2.361-1.936c-.489-.133-1.038-.133-1.84-.133zm10.961 11.5a3.8 3.8 0 0 0 1.482-.298V14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008c-.423.423-1.003.677-2.01.812a15.6 15.6 0 0 1-1.538.114v-2.756c0-.44 0-.82-.028-1.13c-.03-.33-.096-.656-.274-.963a2.25 2.25 0 0 0-.823-.824c-.307-.177-.633-.243-.963-.273c-.31-.028-.69-.028-1.13-.028h-.065c-.44 0-.819 0-1.13.028c-.33.03-.655.096-.962.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962c-.028.312-.028.691-.028 1.13v2.757a15.6 15.6 0 0 1-1.54-.114c-1.005-.135-1.585-.389-2.008-.812c-.424-.423-.677-1.003-.812-2.009c-.139-1.027-.14-2.382-.14-4.289v-1.548a3.807 3.807 0 0 0 4.588-1.306A3.908 3.908 0 0 0 12 12.75a3.908 3.908 0 0 0 3.162-1.604a3.807 3.807 0 0 0 3.106 1.604m-8.018 8.498c.388.002.804.002 1.25.002h1c.446 0 .861 0 1.25-.002V18.5c0-.481-.001-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.041-.024-.123-.058-.348-.079A12.831 12.831 0 0 0 12 16.75c-.481 0-.792 0-1.027.022c-.226.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027zM8.67 2.75H7.418c-.954 0-1.285.007-1.553.08a2.25 2.25 0 0 0-1.416 1.161c-.125.249-.196.571-.383 1.507l-.598 2.99a2.31 2.31 0 1 0 4.562.683l.069-.686l.004-.042zm.921 5.875l.588-5.875h3.642l.584 5.842a2.417 2.417 0 1 1-4.814.033m8.544-5.795c-.268-.073-.599-.08-1.553-.08h-1.254l.643 6.42a2.309 2.309 0 1 0 4.561-.682l-.597-2.99c-.188-.936-.259-1.258-.383-1.507a2.25 2.25 0 0 0-1.417-1.161"
							clip-rule="evenodd"
						/></svg
					>
				</div>
				<p class="text-white">UI Tools</p>
			</div>

			<div class="flex items-center bg-lime-200 dark:bg-appdark rounded-full p-1 pr-4 gap-3">
				<div class="p-2 rounded-full bg-black bg-opacity-10">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
						><path
							class="fill-black dark:fill-white"
							fill-rule="evenodd"
							d="M7.307 1.25c-.801 0-1.35 0-1.84.133a3.75 3.75 0 0 0-2.36 1.936c-.227.452-.334.991-.491 1.777l-.62 3.098a3.79 3.79 0 0 0 .754 3.117v2.745c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.748.748 1.697 1.08 2.87 1.238c1.139.153 2.595.153 4.432.153h1.113c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-2.744a3.79 3.79 0 0 0 .753-3.118l-.62-3.098c-.156-.786-.264-1.325-.49-1.777a3.75 3.75 0 0 0-2.361-1.936c-.489-.133-1.038-.133-1.84-.133zm10.961 11.5a3.8 3.8 0 0 0 1.482-.298V14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008c-.423.423-1.003.677-2.01.812a15.6 15.6 0 0 1-1.538.114v-2.756c0-.44 0-.82-.028-1.13c-.03-.33-.096-.656-.274-.963a2.25 2.25 0 0 0-.823-.824c-.307-.177-.633-.243-.963-.273c-.31-.028-.69-.028-1.13-.028h-.065c-.44 0-.819 0-1.13.028c-.33.03-.655.096-.962.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962c-.028.312-.028.691-.028 1.13v2.757a15.6 15.6 0 0 1-1.54-.114c-1.005-.135-1.585-.389-2.008-.812c-.424-.423-.677-1.003-.812-2.009c-.139-1.027-.14-2.382-.14-4.289v-1.548a3.807 3.807 0 0 0 4.588-1.306A3.908 3.908 0 0 0 12 12.75a3.908 3.908 0 0 0 3.162-1.604a3.807 3.807 0 0 0 3.106 1.604m-8.018 8.498c.388.002.804.002 1.25.002h1c.446 0 .861 0 1.25-.002V18.5c0-.481-.001-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.041-.024-.123-.058-.348-.079A12.831 12.831 0 0 0 12 16.75c-.481 0-.792 0-1.027.022c-.226.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027zM8.67 2.75H7.418c-.954 0-1.285.007-1.553.08a2.25 2.25 0 0 0-1.416 1.161c-.125.249-.196.571-.383 1.507l-.598 2.99a2.31 2.31 0 1 0 4.562.683l.069-.686l.004-.042zm.921 5.875l.588-5.875h3.642l.584 5.842a2.417 2.417 0 1 1-4.814.033m8.544-5.795c-.268-.073-.599-.08-1.553-.08h-1.254l.643 6.42a2.309 2.309 0 1 0 4.561-.682l-.597-2.99c-.188-.936-.259-1.258-.383-1.507a2.25 2.25 0 0 0-1.417-1.161"
							clip-rule="evenodd"
						/></svg
					>
				</div>
				<p>Productividad</p>
			</div>
		</div>
	</section>
	<!-- <SectionCard name="Populares" sites={data.webLinks} />
	<SectionCard name="UX Tools" sites={data.webLinks} />
	<SectionCard name="UI Design" sites={data.webLinks} />
	<SectionCard name="IDE" sites={data.webLinks} /> -->
</div>

<style>
	.page {
		background-image: url(/image/back.svg);
		background-repeat: no-repeat;
		/* background-size: ; */
		background-position: top;
	}

	/* .category-activo{
    position: relative;
    color: blue;
    font-weight: bold;
  }
  .category-activo::before{
    content: " ";
    height: 4px;
    width: 50%;
    position: absolute;
    background-color: blue;
    left: 25%;
    border-radius: 10px;
    bottom: 0;
  } */
</style>
