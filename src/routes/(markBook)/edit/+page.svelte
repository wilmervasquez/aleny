<script lang="ts">
	import CodeTest from "../../../components/MarkBook/CodeTest.svelte";
import MarkBook from "../../../components/MarkBook/MarkBook.svelte";
	import PowerShell from "../../../components/MarkBook/PowerShell.svelte";
  let value = ""

</script>
<CodeTest/>
<PowerShell/>
<div class="cont grid">
  <textarea class="font-mono" bind:value={value}></textarea>
  {#key value}
    <MarkBook text={value}/>
  {/key}
</div>
<style>
  .cont{
    grid-template-columns: 1fr 1fr;
  }
</style>