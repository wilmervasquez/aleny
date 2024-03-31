<script lang="ts">
	import axios from "axios";

  (async function(){
    const {data:items} = await axios.get('https://api.github.com/search/repositories?q=javascript');
    console.log(items)
    
  })();
</script>
<div class=""><p></p></div>
<style>

</style>