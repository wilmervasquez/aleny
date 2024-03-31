<script lang="ts">

  let contentEditor: HTMLDivElement;
  let caret: HTMLSpanElement;
    
    
    
  function viewSelection() {
    let rangeSelection = document.getSelection();
    let range = new Range()
    range.setStart(rangeSelection.anchorNode, rangeSelection?.anchorOffset);
    range.setEnd(rangeSelection.focusNode, rangeSelection?.focusOffset);
    let g = document.createElement('span');
    g.textContent = "Hola"
    range.insertNode(g)
  
  }
  function selecty() {
    let rangeSelection = document.getSelection();
    let range = new Range()
    range.setStart(rangeSelection.anchorNode, rangeSelection?.anchorOffset);
    range.setEnd(rangeSelection.focusNode, rangeSelection?.focusOffset);
    
    range.ins

  }
  let n = ["func","miner","silver"]
</script>
<svelte:document on:selectionchange={selecty}/>
<svelte:window/>
<button on:click={viewSelection}>get selection</button>
<div class="container">
  <div class="editor flex">
    <div class="line-number pl-2 pr-4">
      <div class="text-slate-300 text-right">1</div>
      <div class="text-slate-300 text-right">2</div>
    </div>
    <div class="content" contenteditable="true"  bind:this={contentEditor}>
      <div class="row">
        Example: italic ;
        <span class="caret" bind:this={caret} contenteditable="false">
          <div class="suggest absolute left-0">
            {#each n as txt}
              <div class="flex pl-1 pr-4 w-40">▢ {txt}</div>
            {/each}
          </div>
        </span> 
        and boldyuim
      </div>
      <div class="row">animales</div>
    </div>
  </div>
</div>

<style>
  .container{
    padding: 10px;
  }
  .editor {
    border: 1px dotted hsl(222, 47%, 31%);
    border-radius: 10px;
    padding: 5px 0;
    /* background-color: hsl(222, 47%, 9%); */
  }
  .editor *{
    font-family: Cascadia Code;
    font-size: 12px;
  }
  @keyframes blink{
    25%{
      background-color: transparent;
    }
    75%{
      background-color: white;

    }
  }
  .caret{
    position: relative;
  }
  .caret::before{
    content:"";
    width: 2px;
    height: 1.2em;
    position: absolute;
    animation: blink 1s linear infinite;
  }
  .suggest{
    background: hsl(222, 47%, 21%);
    box-shadow: 0 10px 20px black;
    user-select: none;
  }
</style>