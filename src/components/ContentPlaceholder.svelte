<script lang="ts">
    let hidden = true;
    import { servers } from "../stores"
    if (servers.subscribe(servers => servers.length > 0)) {
        hidden = false;
    }
</script>

{#if !hidden}
<div class="container mx-auto">
  <div class="flex items-center justify-center py-10">
    <p class="text-gray-600 font-light text-center md:text-left lg:text-center">
      Add a server by clicking the + to the right. -->
    </p>
  </div>
</div>
{/if}