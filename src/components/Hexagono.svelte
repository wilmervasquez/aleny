<script lang="ts">
  function draw(x:number,y:number,r:number){
    let g = []
    let h = Math.sqrt(Math.pow(r,2)-Math.pow(r/2,2))
    g.push(`${x-r},${y}`);
    g.push(`${x-(r/2)},${y-h}`);
    g.push(`${x+(r/2)},${y-h}`);
    g.push(`${x+r},${y}`);
    g.push(`${x+(r/2)},${y+h}`);
    g.push(`${x-(r/2)},${y+h}`);
    return g.join(' ')
  }
  function drawU(x:number,y:number,r:number){
    let g = []
    let h = Math.sqrt(Math.pow(r,2)-Math.pow(r/2,2))
    g.push(`${x-r},${y}`);
    g.push(`${x-(r/2)},${y-h}`);
    g.push(`${x+(r/2)},${y-h}`);
    g.push(`${x+r},${y}`);
    g.push(`${x+(r/2)},${y+h}`);
    g.push(`${x-(r/2)},${y+h}`);

    return g.join(' ')
  }
  function drawB(x:number,y:number,r:number){
    let g = []
    let h = Math.sqrt(Math.pow(r,2)-Math.pow(r/2,2))
    g.push(`${x-(r/2)},${y+h}`);
    g.push(`${x-r},${y}`);
    g.push(`${x-(r/2)},${y-h}`);
    g.push(`${x+(r/2)},${y-h}`);
    g.push(`${x+r},${y}`);
    g.push(`${x+(r/2)},${y+h}`);
    return g.join(' ')
  }
  
  let r = 200
  let h = Math.sqrt(Math.pow(r,2)-Math.pow(r/2,2))
</script>
<div class="grid place-items-center">

<svg width="400" height="400" viewBox="0 0 400 400">
  <linearGradient id="cool2"  x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="white" stop-opacity="0"></stop>
    <stop offset="50%" stop-color="white" stop-opacity="0.2"></stop>
    <stop offset="100%" stop-color="white" stop-opacity="0"></stop>
  </linearGradient>
  <linearGradient id="cool"  x1="0%" y1="0%" x2="0%" y2="100%" >
    <stop offset="0%" stop-color="white" stop-opacity="0"></stop>
    <stop offset="50%" stop-color="white" stop-opacity="0.2"></stop>
    <stop offset="100%" stop-color="white" stop-opacity="0"></stop>
  </linearGradient>
  {#each new Array(14) as _,i}
    <rect width="1" height="400" x={i*20+60} y="0" fill="url(#cool)"/>
  {/each}
  {#each new Array(14) as _,i}
    <rect width="400" height="1" x="0" y={i*20+60} fill="url(#cool2)"/>
  {/each}
</svg>
<svg width="200" height="200" viewBox="0 0 90 90">
  <linearGradient id="plus">
    <stop offset="0%" stop-color="hsl(120,100%,30%)"></stop>
    <stop offset="50%" stop-color="white"></stop>
    <stop offset="100%" stop-color="hsl(320,100%,50%)"></stop>
  </linearGradient>
  <polyline points={drawB(45,45,40)} stroke="hsl(267,100%,60%)" stroke-width="10" fill="hsla(267,100%,60%,0.5)" stroke-linejoin="round" stroke-linecap="round"/>
  <polyline points={drawU(45,45,15)} stroke="hsl(200,100%,60%)" stroke-width="10" fill="hsla(200,100%,60%,0.5)" stroke-linejoin="round" stroke-linecap="round"/>
</svg>
<svg width="200" height="200" viewBox="0 0 200 200">
  <linearGradient id="plus">
    <stop offset="0%" stop-color="hsl(120,100%,30%)"></stop>
    <stop offset="50%" stop-color="white"></stop>
    <stop offset="100%" stop-color="hsl(320,100%,50%)"></stop>
  </linearGradient>
  <polygon points={draw(100,100,20)} stroke="url(#plus)" stroke-width="1" fill="none"/>
  <polygon points={draw(150,150,50)} stroke="white" stroke-width="1" fill="none"/>
</svg>
</div>

<style>
  rect{
    transform-origin: 50% 25%;
  }
  svg{
    /* background-color: burlywood; */
  }
</style>