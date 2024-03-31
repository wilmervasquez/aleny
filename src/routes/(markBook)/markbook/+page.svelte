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
			title: 'Intl Magic Suplir'
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
			<button class="text-left py-1 text-sm px-2 rounded-lg hover:bg-neutral-800" on:click={() => loadMarkdown(file)}>{title}</button>
		{/each}
	</ul>
	{#key markdown}
		<MarkBook text={markdown} bind:guides/>
	{/key}
  <div class="guides overflow-y-scroll">
    <ul>
      {#each guides as {text,id}}
				<li class="hover:underline pr-3 tex-sm hover:text-sky-500"><a href="#{id}">{@html text.replaceAll("🧊",'<img class="inline w-[1em] h-[1em] align-align-middle" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IiNkMTdhZmYiIGQ9Ik00LjY5NyA1LjA0YS41LjUgMCAwIDAtLjM5NC45MTlMNy41IDcuMzI5djMuMTdhLjUuNSAwIDAgMCAxIDBWNy4zM2wzLjE5Ny0xLjM3YS41LjUgMCAxIDAtLjM5NC0uOTJMOCA2LjQ1NnptNC4zOC0zLjY2MmEzIDMgMCAwIDAtMi4xNTQgMEwxLjk2MiAzLjI4NkExLjUgMS41IDAgMCAwIDEgNC42ODZ2Ni42MjZhMS41IDEuNSAwIDAgMCAuOTYyIDEuNGw0Ljk2MSAxLjkwOWEzIDMgMCAwIDAgMi4xNTQgMGw0Ljk2Mi0xLjkwOWExLjUgMS41IDAgMCAwIC45NjEtMS40VjQuNjg2YTEuNSAxLjUgMCAwIDAtLjk2MS0xLjR6bS0xLjc5NS45MzNhMiAyIDAgMCAxIDEuNDM2IDBsNC45NjIgMS45MDhhLjUuNSAwIDAgMSAuMzIuNDY3djYuNjI2YS41LjUgMCAwIDEtLjMyLjQ2N2wtNC45NjIgMS45MDhhMiAyIDAgMCAxLTEuNDM2IDBMMi4zMjEgMTEuNzhBLjUuNSAwIDAgMSAyIDExLjMxMlY0LjY4NmEuNS41IDAgMCAxIC4zMi0uNDY3eiIvPjwvc3ZnPg=="/>')}</a></li>
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