<script lang="ts">
  const ruta = "src/name/widget".split('/')
</script>
<div class="flex gap-2">
  {#each ruta as m}
    <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#999999" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"/></svg>
      {m}
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="#cccccc" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m19 12l12 12l-12 12"/></svg>
    </div>
  {/each}
</div>
<style>

</style>