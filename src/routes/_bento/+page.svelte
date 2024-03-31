<script>
  const info = [
    'https://mighty.tools/mockmind-api/content/human/65.jpg',
    'https://mighty.tools/mockmind-api/content/human/6.jpg',
    'https://mighty.tools/mockmind-api/content/human/6.jpg',
    'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i3drYviVJQSE/v0/-1x-1.jpg',
    'https://mighty.tools/mockmind-api/content/human/6.jpg',
    'https://mighty.tools/mockmind-api/content/human/6.jpg',
    'https://mighty.tools/mockmind-api/content/human65.jpg',
    'https://mighty.tools/mockmind-api/ontent/human/65.jpg',
    'https://mighty.tools/mockmind-api/content/human/65.jpg',
  ]
</script>
<div class="contain grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3  p-3 gap-3">
  {#each info as url,i}
    <div style:--mn="url({url})" style:background-color="hsla({Math.round(Math.random()*360)},100%,50%,0.5)" class="rounded-2xl flex flex-col-reverse overflow-hidden dark:bg-opacity-30 " >
      <div class="xnv px-2 py-1 text-sm text-white">
        <div class="flex">
          <p>Accom Product Team</p>
          <p class="text-xs">Accom Product Team</p>
        </div>
      </div>
    </div>
  {/each}
</div>
<style>

  .contain {
    grid-template-areas: "a b b c d"
                         "e e f f g"
                         "e e h i g";
  }
  @media (min-width:0) and (max-width:600px){
    .contain {
    
    grid-template-areas: "a b c"
                         "d d c"
                         "d d e"
                         "f g g"
                         "f h i";
  }
  }
  .contain>div{
    background-image: var(--mn);
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;

  }
  .xnv{
    /* backdrop-filter: blur(5px); */
  }
  .contain > div:nth-child(1){
    grid-area: a;
    @apply aspect-square;
  }
  .contain > div:nth-child(2){
    grid-area: b;
    height: auto;
  }
  .contain > div:nth-child(3){
    grid-area: c;
    @apply md:aspect-square;

  }
  .contain > div:nth-child(4){
    grid-area: d;
    @apply aspect-square;

  }
  .contain > div:nth-child(5){
    grid-area: e;
    @apply aspect-square;
  }
  .contain > div:nth-child(6){
    grid-area: f;
  }
  .contain > div:nth-child(7){
    grid-area: g;
  }.contain > div:nth-child(8){
    grid-area: h;
    @apply aspect-square;

  }.contain > div:nth-child(9){
    grid-area: i;
    @apply aspect-square;
  }
</style>