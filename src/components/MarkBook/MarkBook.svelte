<script lang="ts">
	import { parserMDX } from '$lib/parser/parserMDX';
	import html2canvas from 'html2canvas';
	// import Canvas from '../Canvas/Canvas.svelte';
	import SetTheme from '../SetTheme.svelte';
	import Cita from './Cita.svelte';
	import Code from './Code2.svelte';
	// import GitHub from './GitHub.svelte';
	// import GitHubRespositories from './GitHubRespositories.svelte';
	import Image from './Image.svelte';
	import Paragraph from './Paragraph.svelte';
	import Root from './Root.svelte';
	import Shiki from './Shiki.svelte';
	import Terminal from './Terminal.svelte';
	import Title from './Title.svelte';
	import CitaInline from './CitaInline.svelte';

  // props
	export let text = '';
	export let guides = [];

	let dfb = parserMDX(text).items;
	guides=dfb.filter((m)=> m.type === "TITLE")

</script>

<div class="document flex flex-col gap-3 p-5 w-full max-w-3xl overflow-y-scroll" data-theme="app.background">
	<!-- <SetTheme /> -->
	<!-- <GitHubRespositories/> -->
	<!-- <Canvas /> -->
	<!-- <Root/> -->
	{#each dfb as cv}
		{#if cv.type === 'TITLE'}
			<Title text={cv.text} size={cv.size ?? 1} id={cv.id}/>
		{:else if cv.type == 'PARAGRAPH'}
			<Paragraph text={cv.text} />
		{:else if cv.type == 'CODE'}
			<Shiki lang={cv.lang} text={cv.text} resalt={cv.resalt}/>
		{:else if cv.type === 'CITA'}
			<Cita text={cv.text} name={cv.name} />
		{:else if cv.type === 'CITA_INLINE'}
			<CitaInline text={cv.text} name={cv.name} />
		{:else if cv.type === 'IMAGE'}
			<Image src={cv.src} />
		{:else if cv.type === 'TERMINAL'}
			<Terminal text={cv.text} />
		<!-- {:else if cv.type === 'GITHUB_CARD'}
			<GitHub url={cv.text}/> -->

		{/if}
	{/each}
</div>

<style>
</style>
