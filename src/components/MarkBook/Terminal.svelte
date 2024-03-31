<script lang="ts">
	import { codeToTokens } from "shiki";

  export let text = "";
  // text = text.replaceAll(/(--[a-z]*)/g,'<span style="color:gray">$1</span>')
</script>
<div class="bg-[#1b2335] rounded-2xl px-4 py-3">
  <!-- <div class="flex gap-2 items-center font-mono text-sm">
    <span class="text-[hsl(177,58%,72%)]">~/Dev</span>
    <span class="font-normal text-[hsl(220,50%,88%)]">on</span> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="#ad97b5" d="M416 160a64 64 0 1 0-96.27 55.24c-2.29 29.08-20.08 37-75 48.42c-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64.42.24c2.39-18 16-24.33 65.26-34.52c27.43-5.67 55.78-11.54 79.78-26.95c29-18.58 44.53-46.78 46.36-83.89A64 64 0 0 0 416 160M160 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m192-256a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/></svg>
    <span class="text-[hsl(286,50%,72%)]">main</span>
  </div> -->
  <div class="flex gap-2 items-center font-mono text-sm ">
    <span class="kil">&nbsp;</span>
    {#await codeToTokens(text, {lang:"sh", theme: 'dracula' }) then {tokens}}
      <span class="">
        {#each tokens[0] as {content,color}}
          <span class="text-neutral-400" style:color >{content}</span>
        {/each}
      </span>
      
    {/await}
  </div>
</div>
<style>
  .kil{
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIyNy4yIiB2aWV3Qm94PSIwIDAgMzIwIDUxMiI+PHBhdGggZmlsbD0iIzY1YTMwZCIgZD0iTTMxMC42IDIzMy40YzEyLjUgMTIuNSAxMi41IDMyLjggMCA0NS4zbC0xOTIgMTkyYy0xMi41IDEyLjUtMzIuOCAxMi41LTQ1LjMgMHMtMTIuNS0zMi44IDAtNDUuM0wyNDIuNyAyNTZMNzMuNCA4Ni42Yy0xMi41LTEyLjUtMTIuNS0zMi44IDAtNDUuM3MzMi44LTEyLjUgNDUuMyAwbDE5MiAxOTJ6Ii8+PC9zdmc+);
  }
</style>