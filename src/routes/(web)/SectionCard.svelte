<script lang="ts">
	import type { CardTarget } from "$lib/interface";
	import CardLink from "../../components/Cards/CardLink.svelte";
  export let sites: CardTarget[] = [];
  export let name: string = "";
  let state:"load"|"loading"|"error" = "load";
  sites.sort(()=>Math.random()-0.5)
  sites = sites.slice(0,8);
</script>
<section class="flex flex-col p-4 gap-4 pt-8">
  <div class="flex items-center justify-between">
    <h2 class="font-bold text-lg">{name}</h2>
    <div class="flex items-center hover:underline cursor-pointer gap-2 px-3 py-1 rounded-lg dark:bg-white dark:bg-opacity-5">
      Ver mas
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path class="fill-black dark:fill-white" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/></svg>
    </div>
  </div>
  {#if state === "load"}
    <div class="cards grid gap-4">
      {#each sites as _}
        <CardLink props={_}/>
      {/each}
    </div>
  {:else if state === "loading"}
    <div class="grid place-items-center py-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#0284c7" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#0284c7" d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
    </div>
  {:else}
    <div class="flex flex-col items-center py-10 gap-3">
      <img class="w-40" src="https://cdn4.iconfinder.com/data/icons/pop-scenes/1000/error_technology___electricity_power_cut_wifi_wireless_connection_damage_disconnect_cable-512.png" alt="">
      <div class="">Error de conexion</div>
    </div>
  {/if}
</section>
<style>
 @media (min-width:0px) and (max-width:640px){
    .cards{
      @apply grid-cols-1;
    }
  }
  @media (min-width:641px) and (max-width:840px){
    .cards{
      @apply grid-cols-2;
    }
  }
  @media (min-width:841px) and (max-width:1200px){
    .cards{
      @apply grid-cols-3;
    }
  }
  @media (min-width:1201px){
    .cards{
      @apply grid-cols-4;
    }
  }
</style>