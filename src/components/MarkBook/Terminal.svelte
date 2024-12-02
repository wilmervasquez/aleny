<script lang="ts">
	import { codeToTokens } from "shiki";

  export let text = "";
  // text = text.replaceAll(/(--[a-z]*)/g,'<span style="color:gray">$1</span>')
</script>
<div class="flex gap-3 items-center rounded-lg">
  <!-- <div class="flex gap-2 items-center font-mono text-sm">
    <span class="text-[hsl(177,58%,72%)]">~/Dev</span>
    <span class="font-normal text-[hsl(220,50%,88%)]">on</span> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="#ad97b5" d="M416 160a64 64 0 1 0-96.27 55.24c-2.29 29.08-20.08 37-75 48.42c-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64.42.24c2.39-18 16-24.33 65.26-34.52c27.43-5.67 55.78-11.54 79.78-26.95c29-18.58 44.53-46.78 46.36-83.89A64 64 0 0 0 416 160M160 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m192-256a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/></svg>
    <span class="text-[hsl(286,50%,72%)]">main</span>
  </div> -->
 
  <!-- n -->
  <div class=" font-mono text-sm ">
    <svg xmlns="http://www.w3.org/2000/svg" class="inline" width="1.2em" height="1.2em" viewBox="0 0 24 24">
      <path fill="#8e89ec" fill-rule="evenodd" d="" clip-rule="evenodd"/>
    </svg><b>~/</b>
    {#await codeToTokens(text, {lang:"sh", theme: 'min-light' }) then {tokens}}
      <span class="">
        {#each tokens[0] as {content,color}}
          <span class="text-neutral-400" style:color >{content}</span>
        {/each}
      </span>
      
    {/await}
  </div>
  <button class="p-2 group  " on:click={()=> navigator.clipboard.writeText(text)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" class="stroke-neutral-500 group-hover:stroke-neutral-100 group-active:stroke-sky-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15"/></svg>
  </button>
</div>
<style>
 
</style>