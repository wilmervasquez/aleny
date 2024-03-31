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
<div class="card flex gap-3 items-center p-2  rounded-xl" style:background="!{color[name][0]}00">
  <div class="w-1 h-10 rounded-xl flex-shrink-0" style:background={color[name][0]}></div>
  <!-- content -->
  <div class="flex flex-col py-1">
    <div class="font-bold pb-1">
      <div class="flex items-center gap-2" style:color="{color[name][0]}">
        <svg class="inline" width="16" height="16">
          <use href="{citaPackSvg}#{name}" fill={color[name][0]}/>
        </svg>
        {color[name][1]}
      </div>
    </div>
    <Paragraph {text}/>
  </div>
</div>

<style>
  
</style>