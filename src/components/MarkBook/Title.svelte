<script lang="ts">
  export let text = "";
  export let size: number;
  export let id: string;

  const sizes = ["h1","h2","h3","h4","h5","h6"]
  const sizesFont = ["2em","1.5em","1.17em","1em","0.83em","0.67em"]

  text = text.replaceAll("🧊",'<img class="inline w-[1em] h-[1em] align-align-middle" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMTIgMTIiPjxwYXRoIGZpbGw9IiM3YzNhZWQiIGQ9Ik01LjgxNiAyLjAzNWEuNS41IDAgMCAxIC4zNjggMGwzLjUgMS4zODRhLjUuNSAwIDAgMSAuMzE2LjQ2NXY0LjIzYS41LjUgMCAwIDEtLjMxNi40NjZsLTMuNSAxLjM4M2EuNS41IDAgMCAxLS4zNjggMGwtMy41LTEuMzgzQS41LjUgMCAwIDEgMiA4LjExNVYzLjg4NGEuNS41IDAgMCAxIC4zMTYtLjQ2NXptLjczNS0uOTNhMS41IDEuNSAwIDAgMC0xLjEwMiAwbC0zLjUgMS4zODRBMS41IDEuNSAwIDAgMCAxIDMuODg0djQuMjNhMS41IDEuNSAwIDAgMCAuOTQ5IDEuMzk2bDMuNSAxLjM4M2ExLjUgMS41IDAgMCAwIDEuMTAyIDBsMy41LTEuMzgzQTEuNSAxLjUgMCAwIDAgMTEgOC4xMTVWMy44ODRhMS41IDEuNSAwIDAgMC0uOTQ5LTEuMzk1em0tMi44NjUgMi45M2EuNS41IDAgMCAwLS4zNzIuOTNsMi4xODYuODc0VjhhLjUuNSAwIDAgMCAxIDBWNS44MzlsMi4xODYtLjg3NWEuNS41IDAgMSAwLS4zNzItLjkyOEw2IDQuOTZ6Ii8+PC9zdmc+"/>')
</script>
<svelte:element this={sizes[size-1]} style:font-size={sizesFont[size-1]} {id} class="text-[#1f2328] font-black dark:text-[hsl(213,13%,86%)]">
  {@html text}
</svelte:element>
<style>
  h1,h2,h3,h4,h5,h6{
    text-wrap: balance;
  }
  *:not(:first-child){
    padding-top: 12px;
  }
</style>