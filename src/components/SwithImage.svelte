<script lang="ts">
  export let values:string[] = [''];
  export let value:string = values[0];
  let valueIndex = values.indexOf(value)

</script>
<div class="vb flex p-1 rounded-lg">
  {#each values as vg,i}
    <button 
      class="item px-2 rounded-md" 
      class:active={valueIndex === i}
      on:click={()=> {valueIndex = i; value = values[valueIndex]}}
    >{vg}</button>
  {/each}
</div>
<style>
  .vb{
    box-shadow: 0 0 10px rgb(0, 0, 0) inset;
    background-color: #1d1d1d;
    
  }
  .item:not(.active){
    cursor: pointer;
  }
  .item.active{
    box-shadow: 0 0 10px rgb(0, 0, 0);
    background-color: #4d4d4d;
  }
</style>