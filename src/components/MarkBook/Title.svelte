<script lang="ts">
  export let text = "";
  export let size: number;
  export let id: string;

  text = text.replaceAll("🧊",'<img class="inline w-[1em] h-[1em] align-align-middle" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IiNkMTdhZmYiIGQ9Ik00LjY5NyA1LjA0YS41LjUgMCAwIDAtLjM5NC45MTlMNy41IDcuMzI5djMuMTdhLjUuNSAwIDAgMCAxIDBWNy4zM2wzLjE5Ny0xLjM3YS41LjUgMCAxIDAtLjM5NC0uOTJMOCA2LjQ1NnptNC4zOC0zLjY2MmEzIDMgMCAwIDAtMi4xNTQgMEwxLjk2MiAzLjI4NkExLjUgMS41IDAgMCAwIDEgNC42ODZ2Ni42MjZhMS41IDEuNSAwIDAgMCAuOTYyIDEuNGw0Ljk2MSAxLjkwOWEzIDMgMCAwIDAgMi4xNTQgMGw0Ljk2Mi0xLjkwOWExLjUgMS41IDAgMCAwIC45NjEtMS40VjQuNjg2YTEuNSAxLjUgMCAwIDAtLjk2MS0xLjR6bS0xLjc5NS45MzNhMiAyIDAgMCAxIDEuNDM2IDBsNC45NjIgMS45MDhhLjUuNSAwIDAgMSAuMzIuNDY3djYuNjI2YS41LjUgMCAwIDEtLjMyLjQ2N2wtNC45NjIgMS45MDhhMiAyIDAgMCAxLTEuNDM2IDBMMi4zMjEgMTEuNzhBLjUuNSAwIDAgMSAyIDExLjMxMlY0LjY4NmEuNS41IDAgMCAxIC4zMi0uNDY3eiIvPjwvc3ZnPg=="/>')
</script>
{#if size === 1}
  <h1 {id} class="" style:font-size="2em">{text}</h1>
{:else if size === 2}
  <h2 {id}  style:font-size="1.5em">{@html text}</h2>
{:else if size === 3}
  <h3 {id}  style:font-size="1.17em">{text}</h3>
{:else if size === 4}
  <h4 {id}  style:font-size="1em">{text}</h4>
{:else if size === 5}
  <h5 {id}  style:font-size="0.83em">{text}</h5>
{:else if size === 6}
  <h6 {id}  style:font-size="0.67rem">{text}</h6>
{/if}
<style>
  h1,h2,h3,h4,h5,h6{
    @apply font-black text-[#1f2328] dark:text-[hsl(213,13%,86%)];
    text-wrap: balance;
  }
  *:not(:first-child){
    padding-top: 12px;
  }
</style>