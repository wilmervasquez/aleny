<script lang="ts">
  export let size: "sm" | "md" | "lg" = "md";
  export const isDisable: boolean = false;
  export const radius = "md";
  export let color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" = "default";
</script>
<button on:click class="rounded-lg text-white bg-{color} size_{size}"><slot/></button>
<style>
  .color-default{
    @apply bg-slate-200 dark:bg-content-700;
  }
  .color-primary{
    @apply bg-primary;
  }
  .size_sm{
    @apply text-xs h-8 px-3;
  }
  .size_md{
    @apply px-4 h-10 text-sm;
  }
  .size_lg{
    @apply px-6 h-12;
  }
</style>