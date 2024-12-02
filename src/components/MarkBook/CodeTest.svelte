<script lang="ts">
  import * as shiki from "shiki";
  
  async function codeToTokens(){
    const code = await shiki.codeToTokens(`const animales = 23; //vertimmmmmmmmm
/*
  jskddddddddddddddd
*/`,{
      lang:"javascript",
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
  	class="shiki-bg border-gray-100 dark:border-gray-800 border rounded-xl flex flex-col pb-1 fixed top-7 left-7 z-10"
    style={bg}
  >
  	<!-- tab -->
  	<div class="head flex items-center py-2 justify-between pr-4">
  		<div class="flex items-center">
  			<div class=" flex items-center gap-2 pl-3 pr-4 py-1 rounded-lg">
  				<img
  					class="w-4 rounded-sm overflow-hidden"
  					src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iI0YwREI0RiIgZD0iTTEuNDA4IDEuNDA4aDEyNS4xODR2MTI1LjE4NUgxLjQwOHoiLz48cGF0aCBmaWxsPSIjMzIzMzMwIiBkPSJNMTE2LjM0NyA5Ni43MzZjLS45MTctNS43MTEtNC42NDEtMTAuNTA4LTE1LjY3Mi0xNC45ODFjLTMuODMyLTEuNzYxLTguMTA0LTMuMDIyLTkuMzc3LTUuOTI2Yy0uNDUyLTEuNjktLjUxMi0yLjY0Mi0uMjI2LTMuNjY1Yy44MjEtMy4zMiA0Ljc4NC00LjM1NSA3LjkyNS0zLjQwM2MyLjAyMy42NzggMy45MzggMi4yMzcgNS4wOTMgNC43MjRjNS40MDItMy40OTggNS4zOTEtMy40NzUgOS4xNjMtNS44NzljLTEuMzgxLTIuMTQxLTIuMTE4LTMuMTI5LTMuMDIyLTQuMDQ1Yy0zLjI0OS0zLjYyOS03LjY3Ni01LjQ5OC0xNC43NTYtNS4zNTVsLTMuNjg4LjQ3N2MtMy41MzQuODkzLTYuOTAyIDIuNzQ4LTguODc3IDUuMjM1Yy01LjkyNiA2LjcyNC00LjIzNiAxOC40OTIgMi45NzUgMjMuMzM1YzcuMTA0IDUuMzMyIDE3LjU0IDYuNTQ1IDE4Ljg3MyAxMS41MzFjMS4yOTcgNi4xMDQtNC40ODYgOC4wOC0xMC4yMzQgNy4zNzhjLTQuMjM2LS44ODEtNi41OTItMy4wMzQtOS4xMzktNi45NDljLTQuNjg4IDIuNzEzLTQuNjg4IDIuNzEzLTkuNTA4IDUuNDg1YzEuMTQzIDIuNDk5IDIuMzQ0IDMuNjMgNC4yNiA1Ljc5NWM5LjA2OCA5LjE5OCAzMS43NiA4Ljc0NiAzNS44My01LjE3NmMuMTY1LS40NzggMS4yNjEtMy42NjYuMzgtOC41ODFNNjkuNDYyIDU4Ljk0M0g1Ny43NTNsLS4wNDggMzAuMjcyYzAgNi40MzguMzMzIDEyLjM0LS43MTQgMTQuMTQ5Yy0xLjcxMyAzLjU1OC02LjE1MiAzLjExNy04LjE3NSAyLjQyN2MtMi4wNTktMS4wMTItMy4xMDYtMi40NTEtNC4zMTktNC40ODVjLS4zMzMtLjU4NC0uNTgzLTEuMDM2LS42NjctMS4wNzFsLTkuNTIgNS44M2MxLjU4MyAzLjI0OSAzLjkxNSA2LjA2OSA2LjkwMiA3LjkwMWM0LjQ2MiAyLjY3OCAxMC40NTkgMy40OTkgMTYuNzMxIDIuMDU5YzQuMDgyLTEuMTg5IDcuNjA0LTMuNjUyIDkuNDQ4LTcuNDAxYzIuNjY2LTQuOTE1IDIuMDk0LTEwLjg2NCAyLjA3LTE3LjQ0NGMuMDYtMTAuNzM1LjAwMS0yMS40NjguMDAxLTMyLjIzNyIvPjwvc3ZnPg=="
  					alt=""
  				/>
  				<p class="text-sm text-gray-700 dark:text-violet-400">index.js</p>
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
              <div class="line-number text-center px-4 text-gray-300 dark:text-gray-500">{i+1}</div>
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
    
    grid-template-rows: repeat(auto-fill,minmax(0,1fr));
  }
  .line{
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
    grid-column: 1 / 3;
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
