<script lang="ts">
  import { codeToTokens, type BundledLanguage, type SpecialLanguage } from 'shiki'
  export let text: string = "";
  export let lang: BundledLanguage | SpecialLanguage = "text";
  export let resalt: string[] = [];

  async function codeToTokensWithGuidesTabs(code:string,lang:BundledLanguage | SpecialLanguage) {
    const {tokens} = await codeToTokens(text, {lang, theme: 'min-light' });
    console.log(tokens)
    const tokensSeparateTab = tokens.map((line)=>{
      if (line.length > 0) {
        if (line[0].content.startsWith("  ")) {
          let r = line[0].content.match(/^(\s\s)+/)!;

          let tabNumber = r[0].length / 2;
          let tabs = [];
          while (tabs.length<tabNumber) tabs.push({content:"  ",color:"#00000000"});

          let rest = line[0].content.substring(r[0].length)
          
          line.shift()
          line.unshift(...tabs,{content:rest})
          return line
        }
        return line
      }else{
        return []
      }
     
    })
    return tokensSeparateTab

  };


  let lineNumber = false;

 
  
</script>
<div class="border border-gray-200 dark:border-gray-800 relative rounded-lg dark:bg-[#1f1f1f] bg-neutral-50">
  <!-- tab -->
  <button class="p-2 group absolute right-0 rounded-xl top-0 bg-[#fffaf6] print:hidden" on:click={()=> navigator.clipboard.writeText(text)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" class="stroke-neutral-500 group-hover:stroke-neutral-100 group-active:stroke-sky-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15"/></svg>
  </button>
  <!-- Code -->
  <div class="grid grid-col-1">
    <div class="editor grid py-3 scrollbar overflow-x-scroll" >
      {#await codeToTokensWithGuidesTabs(text, lang) then tokens}
        <!-- LineNumber -->
        <div class="linenumber grid grid-col-1">
          {#if lineNumber}
            {#each tokens as _,i}
              <div class="text-sm pl-4 font-mono text-neutral-700 text-opacity-50 relative" data-resalt-number={resalt[i]}>{i+1}</div>
            {/each}
          {/if}
        </div>
        <!-- TextLine -->
        <div class="">
          <code class="text-sm text-[#000000]">
            {#each tokens as line,i}
              <div data-resalt-text={resalt[i]} class="pr-5 pl-3">
                {#each line as {content,color },textColumnToken}
                  <span class="inline whitespace-pre {color==="#00000000" ? "tabs":""}" style:color={color ?? "#666"}>{content}</span>
                {:else}
                  <span>&nbsp;</span>
                {/each}
              </div>
            {/each}
          </code>
        </div>
      {/await}
    </div>
  </div>
</div>
<style>
  .editor{
    grid-template-columns: auto 1fr;
  }
  /* 📌 Definition Color Resalt */
 
  [data-resalt-number]::before{
    content: "";
    position: absolute;
    left: 0;
    width: 3px;
    background-color: var(--bgColor);
    height: 100%;
  }

  [data-resalt-text="+"], [data-resalt-number="+"]{
    background-color: hsla(213, 100%, 50%, 0.1);
  }
  [data-resalt-number="+"]::before{
    background-color: hsla(213, 100%, 50%, 0.1);
  }

  [data-resalt-text="-"], [data-resalt-number="-"]{
    background-color: hsla(0, 100%, 50%, 0.1);
  }
  [data-resalt-number="-"]::before{
    background-color: hsla(0, 100%, 50%, 0.1);
  }

  /* 📌 Indentaicon  */
  .tabs{
    position: relative;
  }
  .tabs::before{
    content: "→";
    font-size: 0.6em;
    position: absolute;
    top: 50%;
    color: rgba(255, 255, 255, 0.226);
    left: 50%;
    translate: -50% -50%;
    /* top: 0;
    left: 0;
    bottom: 0;
    border-left: 1px dashed rgba(255, 255, 255, 0.2);  */
  }
  
</style>