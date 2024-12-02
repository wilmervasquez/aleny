<script lang="ts">
	import MarkBook from '../../../components/MarkBook/MarkBook.svelte';

	let markdownsIdenfiers = [
		{
			file: 'arrays',
			title: 'Metodos de un Array en Javascript'
		},
		{
			file: 'strings',
			title: 'Metodos de String Array'
		},
		{
			file: 'Intl',
			title: '✨ ¿Cómo dar formato de moneda a un número en Javascript?'
		},{
			file: 'Git',
			title: 'Git ChectSheet'
		}
	];

  let markdown = '';
	const loadMarkdown = async (mb: string) => {
		const response = await fetch(`/markdown/${mb}.mb`);
		const data = await response.text();
		markdown = data;
		console.log(markdown);
	};
  let guides = []
  loadMarkdown(markdownsIdenfiers[0].file)
</script>

<div class="page grid grid-cols-2 content-between">
	<ul class="flex flex-col p-1 overflow-y-scroll">
		{#each markdownsIdenfiers as { file, title }}
			<button class="text-left py-1 text-sm px-2 rounded-lg hover:bg-neutral-100" on:click={() => loadMarkdown(file)}>
				<!-- <svg xmlns="http://www.w3.org/2000/svg" class="inline" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="#8e89ec" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6"/><path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"/></g></svg> -->
				<svg xmlns="http://www.w3.org/2000/svg" class="inline" width="20" height="20" viewBox="0 0 16 16"><path fill="#999999" d="M9.93 4.138a1.25 1.25 0 0 1 1.14 0l2.25 1.155c.418.214.68.643.68 1.112v3.189c0 .469-.262.898-.68 1.112l-2.25 1.155a1.25 1.25 0 0 1-1.14 0l-2.25-1.155A1.25 1.25 0 0 1 7 9.594v-3.19c0-.468.262-.897.68-1.111zM8.552 6.775a.5.5 0 0 0 .223.671L10 8.058v1.441a.5.5 0 0 0 1 0V8.058l1.224-.612a.5.5 0 1 0-.448-.894L10.5 7.19l-1.276-.638a.5.5 0 0 0-.671.223M1.5 7.5a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1zm.5-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1z"/></svg>
				{title}
			</button>
		{/each}
		
	</ul>
	{#key markdown}
		<MarkBook text={markdown} bind:guides/>
	{/key}
  <div class="guides overflow-y-scroll">
    <ul>
      {#each guides as {text,id}}
				<li class="hover:underline font-sans font-medium pr-3 tex-sm hover:text-sky-500"><a href="#{id}">{@html text.replaceAll("🧊",'<img class="inline w-[1em] h-[1em] align-align-middle" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMTIgMTIiPjxwYXRoIGZpbGw9IiM3YzNhZWQiIGQ9Ik01LjgxNiAyLjAzNWEuNS41IDAgMCAxIC4zNjggMGwzLjUgMS4zODRhLjUuNSAwIDAgMSAuMzE2LjQ2NXY0LjIzYS41LjUgMCAwIDEtLjMxNi40NjZsLTMuNSAxLjM4M2EuNS41IDAgMCAxLS4zNjggMGwtMy41LTEuMzgzQS41LjUgMCAwIDEgMiA4LjExNVYzLjg4NGEuNS41IDAgMCAxIC4zMTYtLjQ2NXptLjczNS0uOTNhMS41IDEuNSAwIDAgMC0xLjEwMiAwbC0zLjUgMS4zODRBMS41IDEuNSAwIDAgMCAxIDMuODg0djQuMjNhMS41IDEuNSAwIDAgMCAuOTQ5IDEuMzk2bDMuNSAxLjM4M2ExLjUgMS41IDAgMCAwIDEuMTAyIDBsMy41LTEuMzgzQTEuNSAxLjUgMCAwIDAgMTEgOC4xMTVWMy44ODRhMS41IDEuNSAwIDAgMC0uOTQ5LTEuMzk1em0tMi44NjUgMi45M2EuNS41IDAgMCAwLS4zNzIuOTNsMi4xODYuODc0VjhhLjUuNSAwIDAgMCAxIDBWNS44MzlsMi4xODYtLjg3NWEuNS41IDAgMSAwLS4zNzItLjkyOEw2IDQuOTZ6Ii8+PC9zdmc+"/>')}</a></li>
      {/each}
    </ul>
  </div>
</div>
<style>
  .page{
    gap: 20px;
    grid-template-columns: 220px 1fr 240px;
    height: 100vh;
  }
  @media(min-width:0) and (max-width:800px){
    .page{
			gap: 0;

      grid-template-columns: 0px 1fr 0px;
    }

  }
  @media(min-width:801px) and (max-width:1000px){
    .page{
			gap: 0;
      grid-template-columns: 220px 1fr 0px;
    }

  }
</style>