<script lang="ts">
  import * as shiki from "shiki";
  
  async function codeToTokens(){
    const code = await shiki.codeToTokens(`npm run dev -- --host
npm i -D`,{
      lang:"sh",
      themes:{
        light:"min-light",
        dark:"min-dark"
      }
    })
    
    code.bg = `background-color: ${code.bg}`
    code.fg = `color: ${code.fg?.replace(/(?<=#......)../,"")}`
    console.log(code)
    return code
  };
</script>

{#await codeToTokens() then {bg,fg,tokens}}
  <div
  	class="shiki-bg border-gray-100 border dark:border-gray-800 rounded-xl flex flex-col fixed top-56 left-7 z-10"
    style={bg}
  >
  	<!-- tab -->
  	<div class="head flex items-center py-2 justify-between pr-4">
  		<div class="flex items-center">
  			<div class=" flex items-center gap-2 pl-3 pr-4 py-1 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128"><path fill="none" d="M-143.76 4.24h119.53v119.53h-119.53z"/><path fill="#0284c7" d="M109.01 28.64L71.28 6.24c-2.25-1.33-4.77-2-7.28-2s-5.03.67-7.28 2.01l-37.74 22.4c-4.5 2.67-7.28 7.61-7.28 12.96v44.8c0 5.35 2.77 10.29 7.28 12.96l37.73 22.4c2.25 1.34 4.76 2 7.28 2c2.51 0 5.03-.67 7.28-2l37.74-22.4c4.5-2.67 7.28-7.62 7.28-12.96V41.6c0-5.34-2.77-10.29-7.28-12.96M79.79 98.59l.06 3.22c0 .39-.25.83-.55.99l-1.91 1.1c-.3.15-.56-.03-.56-.42l-.03-3.17c-1.63.68-3.29.84-4.34.42c-.2-.08-.29-.37-.21-.71l.69-2.91c.06-.23.18-.46.34-.6c.06-.06.12-.1.18-.13c.11-.06.22-.07.31-.03c1.14.38 2.59.2 3.99-.5c1.78-.9 2.97-2.72 2.95-4.52c-.02-1.64-.9-2.31-3.05-2.33c-2.74.01-5.3-.53-5.34-4.57c-.03-3.32 1.69-6.78 4.43-8.96l-.03-3.25c0-.4.24-.84.55-1l1.85-1.18c.3-.15.56.04.56.43l.03 3.25c1.36-.54 2.54-.69 3.61-.44c.23.06.34.38.24.75l-.72 2.88c-.06.22-.18.44-.33.58a.77.77 0 0 1-.19.14c-.1.05-.19.06-.28.05c-.49-.11-1.65-.36-3.48.56c-1.92.97-2.59 2.64-2.58 3.88c.02 1.48.77 1.93 3.39 1.97c3.49.06 4.99 1.58 5.03 5.09c.05 3.44-1.79 7.15-4.61 9.41m19.78-5.41c0 .3-.04.58-.29.72l-9.54 5.8c-.25.15-.45.02-.45-.28v-2.46c0-.3.18-.46.43-.61l9.4-5.62c.25-.15.45-.02.45.28zm6.56-55.09l-35.7 22.05c-4.45 2.6-7.73 5.52-7.74 10.89v43.99c0 3.21 1.3 5.29 3.29 5.9c-.65.11-1.32.19-1.98.19c-2.09 0-4.15-.57-5.96-1.64l-37.73-22.4c-3.69-2.19-5.98-6.28-5.98-10.67V41.6c0-4.39 2.29-8.48 5.98-10.67l37.74-22.4c1.81-1.07 3.87-1.64 5.96-1.64s4.15.57 5.96 1.64l37.74 22.4c3.11 1.85 5.21 5.04 5.8 8.63c-1.27-2.67-4.09-3.39-7.38-1.47"/></svg>
  				<p class="text-sm text-gray-700 dark:text-violet-400">Terminal</p>
  			</div>
  		</div>
  		<button class="">
  			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
  				<path
  					fill="none"
  					class="stroke-slate-400 hover:stroke-slate-200 active:stroke-cyan-300"
  					stroke-linecap="round"
  					stroke-linejoin="round"
  					stroke-width="1.5"
  					d="M20.829 12.861c.171-.413.171-.938.171-1.986s0-1.573-.171-1.986a2.25 2.25 0 0 0-1.218-1.218c-.413-.171-.938-.171-1.986-.171H11.1c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C7.5 9.209 7.5 9.839 7.5 11.1v6.525c0 1.048 0 1.573.171 1.986c.229.551.667.99 1.218 1.218c.413.171.938.171 1.986.171s1.573 0 1.986-.171m7.968-7.968a2.25 2.25 0 0 1-1.218 1.218c-.413.171-.938.171-1.986.171s-1.573 0-1.986.171a2.25 2.25 0 0 0-1.218 1.218c-.171.413-.171.938-.171 1.986s0 1.573-.171 1.986a2.25 2.25 0 0 1-1.218 1.218m7.968-7.968a11.678 11.678 0 0 1-7.75 7.9l-.218.068M16.5 7.5v-.9c0-1.26 0-1.89-.245-2.371a2.25 2.25 0 0 0-.983-.984C14.79 3 14.16 3 12.9 3H6.6c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C3 4.709 3 5.339 3 6.6v6.3c0 1.26 0 1.89.245 2.371c.216.424.56.768.984.984c.48.245 1.111.245 2.372.245H7.5"
  				/></svg
  			>
  		</button>
  	</div>
  	<div 
      class="shiki overflow-x-scroll"
      style={fg}
    >
      <code class="grid text-sm w-max overflow-x-scroll" >
      		<!-- {@html html} -->
          {#each tokens as line,i}
            <span class="line grid">
              <div class="line-number text-center pl-5 text-gray-300 dark:text-gray-500">
                <svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </div>

              <div class="line-code pr-4">
                {#each line as {content,htmlStyle}}
                  <span class="whitespace-pre" style={htmlStyle}>{content}</span>
                {/each}
              </div>
            </span>
          {/each}
      	</code>
    </div>
  </div>
  
{/await}
<style>
  code{
    grid-template-columns: auto auto;
    
    grid-template-rows: repeat(auto-fit,minmax(0,1fr));
  }
  .line{
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
    grid-column: 1 / 3;
    align-items: center;
  }
  
  
	.editor {
		grid-template-columns: auto 1fr;
	} 
  code::-webkit-scrollbar {
		height: 4px;  
	}
	code::-webkit-scrollbar-thumb {
		background: none;
	}
	code:hover::-webkit-scrollbar-thumb {
		background: var(--bg-scrollbar-thumb);
	}
</style>
