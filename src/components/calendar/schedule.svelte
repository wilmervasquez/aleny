<script lang="ts">
	import SwithImage from "../SwithImage.svelte";

  const ty:string[] = [
    "06:30",
    "07:15",
    "08:00",
    "08:45",
    "09:30",
    "10:15",
    "11:00",
    "11:45",
    "12:30",
    "13:15",
    "14:00",
    "14:45",
    "15:30",
    "16:15",
    "17:00",
    "17:45",
    "18:30",
    "19:15",
    "20:00",
    "20:45"
  ]
  const colorSection = {
    A:120,
    B:240,
    C:360
  }
  const sch:{curso:string,day:number,start: number,end:number,time:number, section?:"a"|"b"|"c" ,active?:boolean}[] = []
  function add(curso:string,day:number,start: string,end:any, section?:"a"|"b"|"c" ) {
    let index = ty.indexOf(start);
    let endI = ty.indexOf(end);
    console.log(endI,index)
    sch.push({curso,day:day+1,start: index+1,time: index +(endI-index)+1,section: section?.toUpperCase() ?? "A"})
  }

  add("Lenguaje II"                                           ,2,"10:15","12:30","a")
  add("Lenguaje II"                                           ,4,"10:15","11:45","a")

  add("Matemática Básica II"                                  ,1,"10:15","12:30")
  add("Matemática Básica II"                                  ,5,"11:00","13:15")

  add("Ecología y Protección del Medio Ambiente"              ,2,"08:00","09:30")
  add("Ecología y Protección del Medio Ambiente"              ,4,"08:00","09:30")

  add("Sociología General"                                    ,3,"06:30","08:45")

  add("Tecnología Informática" ,2,"15:30","17:00")
  add("Tecnología Informática" ,5,"09:30","11:00")

  add("Desarrollo Personal"                         ,3,"09:30","12:30")


  add("Lenguaje II"                                           ,3,"17:00","18:30","b")
  add("Lenguaje II"                                           ,4,"18:30","20:45","b")

  add("Matemática Básica II"                                  ,2,"18:30","20:45","b")
  add("Matemática Básica II"                                  ,3,"18:30","20:45","b")

  add("Ecología y Protección del Medio Ambiente"              ,2,"17:00","18:30","b")
  add("Ecología y Protección del Medio Ambiente"              ,3,"15:30","17:00","b")

  add("Sociología General"                                    ,4,"15:30","17:45","b")

  add("Tecnología Informática" ,1,"09:30","11:00","b")
  add("Tecnología Informática" ,3,"08:00","09:30","b")

  add("Desarrollo Personal"                         ,2,"09:30","12:30","b")

  add("Ecología y Protección del Medio Ambiente"              ,2,"11:00","12:30","c")
  add("Ecología y Protección del Medio Ambiente"              ,4,"11:00","12:30","c")
  add("Tecnología Informática" ,1,"11:00","12:30","c")
  add("Tecnología Informática" ,5,"11:00","12:30","c")

  sch.sort(()=>Math.random()-0.5)

  let schx = [...sch]

  let len = 'A'
  let mat = 'A'
  let eco = 'A'
  let soci = 'A'
  let tecno = 'A'
  let desaa = 'A'

  $: schx = [...sch].filter((m)=>{
    if (m.curso === "Lenguaje II") {
      if (len === m.section) {
        return true
      }
      return false
    } 
    if (m.curso === "Sociología General") {
      if (soci === m.section) {
        return true
      }
      return false
    } 
    if (m.curso === "Ecología y Protección del Medio Ambiente") {
      if (eco === m.section) {
        return true
      }
      return false
    } 
    if (m.curso === "Matemática Básica II") {
      if (mat === m.section) {
        return true
      }
      return false
    } 
    if (m.curso === "Tecnología Informática") {
      if (tecno === m.section) {
        return true
      }
      return false
    } 
    if (m.curso === "Desarrollo Personal") {
      if (desaa === m.section) {
        return true
      }
      return false
    } 
  })


</script>

<div class="">
  <div class="flex gap-x-5 gap-y-1 p-3 flex-wrap">
    <div class="flex items-center gap-4">
      <div>Lenguaje II</div>
      <SwithImage values={['A','B']} bind:value={len}/>
    </div>
    <div class="flex items-center gap-4">
      <div>Matemática Básica II</div>
      <SwithImage values={['A','B']} bind:value={mat}/>
    </div>
    <div class="flex items-center gap-4">
      <div>Ecología y Protección del Medio Ambiente</div>
      <SwithImage values={['A','B','C']} bind:value={eco}/>
    </div>
    <div class="flex items-center gap-4">
      <div>Sociología General</div>
      <SwithImage values={['A','B']} bind:value={soci}/>
    </div>
    <div class="flex items-center gap-4">
      <div>Tecnología Informática</div>
      <SwithImage values={['A','B','C']} bind:value={tecno}/>
    </div>
    <div class="flex items-center gap-4">
      <div>Desarrollo Personal</div>
      <SwithImage values={['A','B']} bind:value={desaa}/>
    </div>
   
  </div>
  <div class="schedule p-2 gap-2">
    {#each ty as m,i}
      {#if ty[i+1] !== undefined}
        <div class="flex items-center text-xs gap-2 rounded-lg p-1 px-2 bg-content-100 dark:bg-content-800" style:grid-column="1/2" style:grid-row="{i+1}/{i+2}">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" class="stroke-slate-700 dark:stroke-gray-200" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M12 8v4l2.5 2.5"/><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></g></svg>
          {m}&nbsp;-&nbsp;{ty[i+1]}
        </div>
      {/if}
    {/each}
    {#each schx as {curso,day,start,time,section,active}}
      <div 
        draggable="true"
        class="card flex gap-2 rounded-lg p-1 pr-3 pb-3 bg-content-100 " 
        style:background="hsl({colorSection[section]},100%,10%)" 
        style:grid-column="{day}/{day}" 
        style:grid-row="{start}/{time}"
        style:hidden={!active}
        >
        <div class="line w-1 h-6 flex-shrink-0 self-center rounded-full" style:background="hsl({colorSection[section]},100%,70%)"></div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm text-sky-500 dark:text-sky-300 font-bold" style:color="hsl({colorSection[section]},100%,70%)">{curso}</h3>
          <div class="flex items-center text-xs gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" class="stroke-slate-700 dark:stroke-gray-200" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M12 8v4l2.5 2.5"/><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></g></svg>
            {ty[start-1]} - {ty[time-1]}
          </div>
          <div class="flex items-center text-xs gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" class="stroke-slate-700 dark:stroke-gray-200" stroke-linecap="round" stroke-width="1.5"><path d="M12.5 7.041A3 3 0 1 0 14.959 9.5"/><path d="M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"/></g></svg>
            P-306
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
<style>
  .schedule{
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr 1fr 1fr;
  }
 
  [data-course=""]{

  }
</style>