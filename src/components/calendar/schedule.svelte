<script lang="ts">
	import SwithImage from "../SwithImage.svelte";
  type Time = "06:30" | "07:15" | "08:00" | "08:45" | "09:30" | "10:15" | "11:00" | "11:45" | "12:30" | "13:15" | "14:00" | "14:45" | "15:30" | "16:15" | "17:00" | "17:45" | "18:30" | "19:15" | "20:00" | "20:45";
  type Day = "Lunes" | "Martes" | "Miercoles" | "Jueves" | "Viernes" | "Sabado";
  interface Sch {
    course: string,
    section: Record<string, {timeStart: Time, timeEnd: Time, day: Day}[]>
  }
  const ty: Time[] = [ "06:30", "07:15", "08:00", "08:45", "09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "15:30", "16:15", "17:00", "17:45", "18:30", "19:15", "20:00", "20:45" ];
  const days = ["Lunes" ,"Martes" ,"Miercoles" ,"Jueves" ,"Viernes" ,"Sabado"]
  const colorSection = {
    A: { h: 129},
    B: { h:258},
    C: { h:27}
  }

  const schedule: Sch[] = [{
    course: 'Algebra Vectorial',
    section: {
      A: [ 
        {timeStart:'14:45', timeEnd: '16:15', day: 'Martes'},
        {timeStart:'18:30', timeEnd: '20:45', day: 'Jueves'}
      ],
      B: [
        {timeStart:'16:15', timeEnd: '17:45', day: 'Martes'},
        {timeStart:'06:30', timeEnd: '08:45', day: 'Miercoles'}
      ],
      C: [
        {timeStart:'14:45', timeEnd: '17:00', day: 'Lunes'},
        {timeStart:'10:15', timeEnd: '11:45', day: 'Miercoles'}
      ]
    }
  }, {
    course: 'Cálculo I',
    section: {
      A: [
        {timeStart:'10:15', timeEnd: '12:30', day: 'Lunes'},
        {timeStart:'11:00', timeEnd: '12:30', day: 'Miercoles'},
      ],
      B: [
        {timeStart:'08:00', timeEnd: '10:15', day: 'Lunes'},
        {timeStart:'06:30', timeEnd: '08:00', day: 'Martes'}
      ],
      C: [
        {timeStart:'10:15', timeEnd: '11:45', day: 'Lunes'},
        {timeStart:'10:15', timeEnd: '12:30', day: 'Martes'}
      ],
    }
  }, {
    course: 'Fundamentos de Negocios',
    section: {
      A: [
        {timeStart:'07:15', timeEnd: '08:45', day: 'Jueves'},
        {timeStart:'08:45', timeEnd: '10:15', day: 'Sabado'},
      ],
      B: [
        {timeStart:'18:30', timeEnd: '20:00', day: 'Miercoles'},
        {timeStart:'07:15', timeEnd: '08:45', day: 'Sabado'}
      ]
    }
  }, {
    course: 'Matemática Discreta',
    section: {
      A: [
        {timeStart:'08:00', timeEnd: '09:30', day: 'Miercoles'},
        {timeStart:'09:30', timeEnd: '11:00', day: 'Viernes'},
      ],
      B: [
        {timeStart:'09:30', timeEnd: '11:00', day: 'Miercoles'},
        {timeStart:'08:00', timeEnd: '09:30', day: 'Viernes'}
      ]
    }
  }, {
    course: 'Teoría General de Sistemas',
    section: {
      A: [
        {timeStart:'06:30', timeEnd: '08:00', day: 'Lunes'},
        {timeStart:'06:30', timeEnd: '08:00', day: 'Martes'},
      ],
      B: [
        {timeStart:'10:15', timeEnd: '11:45', day: 'Lunes'},
        {timeStart:'08:00', timeEnd: '09:30', day: 'Martes'}
      ]
    }
  }, {
    course: 'Algorítmica',
    section: {
      A: [
        {timeStart:'14:45', timeEnd: '16:15', day: 'Lunes'},
        {timeStart:'08:00', timeEnd: '10:15', day: 'Martes'},
      ],
      B: [
        {timeStart:'16:15', timeEnd: '18:30', day: 'Lunes'},
        {timeStart:'14:45', timeEnd: '16:15', day: 'Martes'}
      ]
    }
  }];



  let sectionActive = [...schedule.map( _ => 'A')]

  $: scheduleFilter = [...schedule].map(({course, section}, i)=>{
    let g = section[sectionActive[i]]

    g = g.map(({ timeStart, timeEnd, day})=>{
      let index = ty.indexOf(timeStart);
      let endI = ty.indexOf(timeEnd);
      return {
        day: days.indexOf(day)+2,
        start: index+1,
        rangeTime: index +(endI-index)+1, 
      }
    })

    return { course, horario: g}
  })


</script>

<div class="uiop bg-[#23272E] rounded-lg">
  <div class="flex gap-x-5 gap-y-1 p-3 flex-wrap">
    {#each schedule as {course, section}, i}
      <div class="flex items-center gap-4">
        <div>{ course }</div>
        <SwithImage values={[...Object.keys(section)]} bind:value={sectionActive[i]}/>
      </div>
    {/each}
  </div>
  <div class="schedule p-2 gap-2">
    {#each ty as m,i}
      {#if ty[i+1] !== undefined}
        <div class="flex items-center text-xs gap-2 rounded-lg p-1 px-2 bg-content-100 dark:bg-[#15171b]" style:grid-column="1/2" style:grid-row="{i+1}/{i+2}">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" class="stroke-slate-700 dark:stroke-gray-200" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M12 8v4l2.5 2.5"/><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></g></svg> -->
          {m}&nbsp;-&nbsp;{ty[i+1]}
        </div>
      {/if}
    {/each}
    {#each scheduleFilter as {course, horario}, i}
      {#each horario as {day,start, rangeTime}}
        <div 
          draggable="true"
          class="card flex gap-2 rounded-lg p-1 pr-3 pb-3 bg-content-100 " 
          style:background="hsl({colorSection[sectionActive[i]].h},100%,50%,0.5)" 
          style:grid-column="{day}/{day}" 
          style:grid-row="{start}/{rangeTime}"
        >
          <div class="line w-1 h-6 flex-shrink-0 self-center rounded-full" style:background="hsl({colorSection[sectionActive[i]]},100%,70%)"></div>
          <div class="flex flex-col gap-2">
            <h3 class="text-sm text-sky-500 dark:text-sky-300 font-bold" style:color="hsl({colorSection[sectionActive[i]].h},100%,90%)">{course}</h3>
            <div class="flex items-center text-xs gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" class="stroke-slate-700 dark:stroke-gray-200" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M12 8v4l2.5 2.5"/><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></g></svg>
              {ty[start-1]} - {ty[rangeTime-1]}
            </div>
            <div class="flex items-center text-xs gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" class="stroke-slate-700 dark:stroke-gray-200" stroke-linecap="round" stroke-width="1.5"><path d="M12.5 7.041A3 3 0 1 0 14.959 9.5"/><path d="M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"/></g></svg>
              P-306
            </div>
          </div>
        </div>
      {/each}
    {/each}
  </div>
</div>
<style>
  .schedule{
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr 1fr 1fr 1fr;
  }
 
  @media print {
    .uiop {
      width: 100vw;
      height: 100vh;
      position: fixed;
      inset: 0;
    }
  }
  
</style>