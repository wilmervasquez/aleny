<script lang="ts">
  export let text = "";
  text = text.replace(/`([^`]+)`/g,'<code class="text-[#1f2328] dark:text-[hsl(213,13%,86%)] font-mono">$1</code>')
</script>
<p class="font-sans font-medium text-[#656d76] dark:text-[hsl(212,8%,57%)] text-pretty">{@html text}</p>
<style>

</style>