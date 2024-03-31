<script lang="ts">
	
	import Paragraph from "./Paragraph.svelte";
  import citaPackSvg from "./Cita.pack.svg";
  export let text = "";
  export let name = "NOTE";
  const color:Record<string,[string,string]> = {
    NOTE:["#1f6feb","Note"],
    CAUTION: ["#f85149","Caution"],
    TIP: ["#1f6feb","Tip"],
    WARNING:["#d29922","Warning"],
    IMPORTANT: ["#a06ff3","Important"]
  }
</script>
<div class="card flex gap-3 items-center p-1  rounded-xl" style:background=".{color[name][0]}10">

  
  <p class=" text-[hsl(212,8%,67%)]" >
    <svg class="inline align-middle" width="1em" height="1em">
      <use href="{citaPackSvg}#{name}" fill={color[name][0]}/>
    </svg>&nbsp;
    <b style:color="{color[name][0]}">{color[name][1]}:</b>&nbsp;
    {text}
    <!-- <Paragraph {text}/> -->
  </p>
  
</div>

<style>
  
</style>