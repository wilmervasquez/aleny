<script lang="ts">
  export let fileName: string | null = null;
  export let text: string = "";
  import { codeToHtml } from 'shiki'

const html = await codeToHtml(text, {
  lang: 'javascript',
  theme: 'vitesse-dark'
})

console.log(html) // highlighted html string


//   let f = text.split("\n")

//   function Color(h: number, s: number, l: number) {
//     h = h+10
//     if (h>360) h= h-360;
    

//       return `hsl(${h},${s}%,${l}%)`;
//     }

// class TextRegExp {
//   text: string;
//   lastIndex: number;
//   isEndOfText: boolean;
//   collection: { token: string; value: string }[];
//   constructor(text: string) {
//     this.text = text;
//     this.lastIndex = 0;
//     this.isEndOfText = false;
//     this.collection = [];
//   }
//   next(regexp: string | RegExp): RegExpExecArray | null {
//     const searchRegex = new RegExp(regexp, "dy");
//     searchRegex.lastIndex = this.lastIndex;
//     const result = searchRegex.exec(this.text);
//     if (!result) return null;
//     this.lastIndex = searchRegex.lastIndex;
//     this.isEndOfText = this.lastIndex == this.text.length;
//     return result;
//   }
//   findNextMatch(regex) {
//     const result = this.next(regex);
//     if (!result) return null;
//     const captureIndices = result.indices.map(([start, end], i) => {
//       return {
//         index: start,
//         start: start - result.index,
//         end: end - result.index,
//         length: end - start,
//         match: result[i],
//       };
//     });
//     return { index: result.index, text: result[0], captureIndices };
//   }
//   findNextWithGroupNames(
//     regex: RegExp | string,
//     matchCaptures: Record<number, string>
//   ) {
//     const result = this.findNextMatch(regex);
//     if (!result) return null;

//     const text = result.text.split("");
//     const keys = text.map(() => "");

//     Object.entries(matchCaptures).forEach(([group, name]) => {
//       const { start, end } = result.captureIndices[group] ?? {
//         start: 0,
//         end: 0,
//       };

//       keys.fill(name, start, end);
//     });

//     if (text.length === 0) return [];

//     const data: { token: string; value: string }[] = [
//       { token: keys[0], value: text[0] },
//     ];

//     for (let i = 1; i < keys.length; i++) {
//       const token = keys[i];

//       if (data[data.length - 1].token === token) {
//         data[data.length - 1].value += text[i];
//         continue;
//       }

//       data.push({ token, value: text[i] });
//     }

//     this.collection.push(...data);
//     return { groupedByToken: data };
//   }
//   log() {
//     console.log(this.collection);
//   }
//   getGroupedByLine() {
//     let cfg = [[]];
//     this.collection.forEach(({ token, value }) => {
//       value = value.split(/(?=\n)|(?<=\n)/);
//       value.forEach((text) => {
//         if (text === "\n") {
//           cfg.push([]);
//           return;
//         }
//         cfg[cfg.length - 1].push({ token, value: text });
//       });
//     });
//     return cfg;
//   }
//   getHTMLRow() {
//     return this.getGroupedByLine().map((tokends) => {
//       if (tokends.length < 1) {
//         return `<div><span>&nbsp;</span></div>`;
//       }
//       return `<div>${tokends
//         .map(({ token, value }) => {
//           value = value.replaceAll(" ", "&nbsp;");
//           return `<span style="color: ${token}">${value}</span>`;
//         })
//         .join("")}</div>`;
//     });
//   }
// }



// const analiser = new TextRegExp(text);
// analiser.findNextWithGroupNames(/(const) ([a-z]+) (=)\s*/, {
//   1: Color(326, 100, 74),
//   2: Color(265, 89, 78),
//   3: Color(265, 89, 78),
// });
// analiser.findNextWithGroupNames(/"([^"]*)"\s*/, {
//   0: Color(65, 92, 76),
// });
// analiser.findNextWithGroupNames(/;/, {
//   0: Color(65, 92, 76),
// });
// analiser.findNextWithGroupNames(/\/\/[^\n]*\n/, {
//   0: Color(225,27,51),
// });

// analiser.findNextWithGroupNames(/if(\()([a-z]+)/, {
//   0: Color(326,100,74),
//   1: Color(60,30,96),
//   2: Color(60,30,96),
// });


</script>
<div class="rounded-2xl pb-1 bg-[#1b2335] shadow-md" data-token="editor.backgroun">
  <!-- tab -->
  <div class="head flex items-center py-2 justify-between pr-4">
    <div class="flex items-center">
      <div class="flex gap-2 px-4">
        <div class="w-3 h-3 border-2 border-[#FF5F57] rounded-3xl"></div>
        <div class="w-3 h-3 border-2 border-[#FEBC2E] rounded-3xl"></div>
        <div class="w-3 h-3 border-2 border-[#28C840] rounded-3xl"></div>
      </div>
      <div class:opacity-0={fileName === null} class=" flex items-center gap-2 pl-3 pr-4 py-1 rounded-lg">
        <img class="w-4" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iI0YwREI0RiIgZD0iTTEuNDA4IDEuNDA4aDEyNS4xODR2MTI1LjE4NUgxLjQwOHoiLz48cGF0aCBmaWxsPSIjMzIzMzMwIiBkPSJNMTE2LjM0NyA5Ni43MzZjLS45MTctNS43MTEtNC42NDEtMTAuNTA4LTE1LjY3Mi0xNC45ODFjLTMuODMyLTEuNzYxLTguMTA0LTMuMDIyLTkuMzc3LTUuOTI2Yy0uNDUyLTEuNjktLjUxMi0yLjY0Mi0uMjI2LTMuNjY1Yy44MjEtMy4zMiA0Ljc4NC00LjM1NSA3LjkyNS0zLjQwM2MyLjAyMy42NzggMy45MzggMi4yMzcgNS4wOTMgNC43MjRjNS40MDItMy40OTggNS4zOTEtMy40NzUgOS4xNjMtNS44NzljLTEuMzgxLTIuMTQxLTIuMTE4LTMuMTI5LTMuMDIyLTQuMDQ1Yy0zLjI0OS0zLjYyOS03LjY3Ni01LjQ5OC0xNC43NTYtNS4zNTVsLTMuNjg4LjQ3N2MtMy41MzQuODkzLTYuOTAyIDIuNzQ4LTguODc3IDUuMjM1Yy01LjkyNiA2LjcyNC00LjIzNiAxOC40OTIgMi45NzUgMjMuMzM1YzcuMTA0IDUuMzMyIDE3LjU0IDYuNTQ1IDE4Ljg3MyAxMS41MzFjMS4yOTcgNi4xMDQtNC40ODYgOC4wOC0xMC4yMzQgNy4zNzhjLTQuMjM2LS44ODEtNi41OTItMy4wMzQtOS4xMzktNi45NDljLTQuNjg4IDIuNzEzLTQuNjg4IDIuNzEzLTkuNTA4IDUuNDg1YzEuMTQzIDIuNDk5IDIuMzQ0IDMuNjMgNC4yNiA1Ljc5NWM5LjA2OCA5LjE5OCAzMS43NiA4Ljc0NiAzNS44My01LjE3NmMuMTY1LS40NzggMS4yNjEtMy42NjYuMzgtOC41ODFNNjkuNDYyIDU4Ljk0M0g1Ny43NTNsLS4wNDggMzAuMjcyYzAgNi40MzguMzMzIDEyLjM0LS43MTQgMTQuMTQ5Yy0xLjcxMyAzLjU1OC02LjE1MiAzLjExNy04LjE3NSAyLjQyN2MtMi4wNTktMS4wMTItMy4xMDYtMi40NTEtNC4zMTktNC40ODVjLS4zMzMtLjU4NC0uNTgzLTEuMDM2LS42NjctMS4wNzFsLTkuNTIgNS44M2MxLjU4MyAzLjI0OSAzLjkxNSA2LjA2OSA2LjkwMiA3LjkwMWM0LjQ2MiAyLjY3OCAxMC40NTkgMy40OTkgMTYuNzMxIDIuMDU5YzQuMDgyLTEuMTg5IDcuNjA0LTMuNjUyIDkuNDQ4LTcuNDAxYzIuNjY2LTQuOTE1IDIuMDk0LTEwLjg2NCAyLjA3LTE3LjQ0NGMuMDYtMTAuNzM1LjAwMS0yMS40NjguMDAxLTMyLjIzNyIvPjwvc3ZnPg==" alt="">
        <p class="text-sm text-violet-400">{fileName}</p>
      </div>
    </div>
    <button class="">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path fill="none" class="stroke-slate-400 hover:stroke-slate-200 active:stroke-cyan-300" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.829 12.861c.171-.413.171-.938.171-1.986s0-1.573-.171-1.986a2.25 2.25 0 0 0-1.218-1.218c-.413-.171-.938-.171-1.986-.171H11.1c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C7.5 9.209 7.5 9.839 7.5 11.1v6.525c0 1.048 0 1.573.171 1.986c.229.551.667.99 1.218 1.218c.413.171.938.171 1.986.171s1.573 0 1.986-.171m7.968-7.968a2.25 2.25 0 0 1-1.218 1.218c-.413.171-.938.171-1.986.171s-1.573 0-1.986.171a2.25 2.25 0 0 0-1.218 1.218c-.171.413-.171.938-.171 1.986s0 1.573-.171 1.986a2.25 2.25 0 0 1-1.218 1.218m7.968-7.968a11.678 11.678 0 0 1-7.75 7.9l-.218.068M16.5 7.5v-.9c0-1.26 0-1.89-.245-2.371a2.25 2.25 0 0 0-.983-.984C14.79 3 14.16 3 12.9 3H6.6c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C3 4.709 3 5.339 3 6.6v6.3c0 1.26 0 1.89.245 2.371c.216.424.56.768.984.984c.48.245 1.111.245 2.372.245H7.5"/></svg>
    </button>
  </div>
  <!--  -->
  <div class="grid editor">
    <div class="linenumber flex flex-col items-end flex-shrink">
      {#each analiser.getHTMLRow() as _,lineNumbers}
        <div class="text-sm pl-3 pr-4 font-mono text-white text-opacity-50">{lineNumbers+1}</div>
      {/each}
    </div>
    <div class="pr-4">
      <code class="text-sm overflow-x-scroll grid grid-cols-1 pb-1 text-[#F8F8F2]">
        {#each analiser.getHTMLRow() as line}
          <div class="whitespace-nowrap">{@html line}</div>
        {/each}
      </code>
    </div>
  </div>
</div>
<style>
  .editor{
    grid-template-columns: auto 1fr;
  }
  code::-webkit-scrollbar {
    height: 4px;    /* Tamaño del scroll en horizontal */
  }
  code::-webkit-scrollbar-thumb {
    background: none;
  }
  code:hover::-webkit-scrollbar-thumb {
    background: var(--bg-scrollbar-thumb);
  }
</style>