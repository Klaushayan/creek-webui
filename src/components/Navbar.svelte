<script lang="ts">
  import ModeSwitcher from "../ModeSwitcher.svelte";
</script>

<nav
  class="flex lg:flex-row items-center flex-wrap bg-light-secondary dark:bg-dark-secondary px-6 py-3"
>
  <div class="block lg:hidden">
    <button
      class="flex items-center px-3 py-2 border rounded border-light-accent hover:text-light-accent hover:border-white"
    >
      <svg
        class="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><title>Menu</title><path
          d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
        /></svg
      >
    </button>
  </div>
  <ModeSwitcher />
  <div
    class="flex flex-row-reverse items-center flex-shrink text-white lg:mr-6"
  >
    <span class="font-semibold text-xl">Creek WebUI</span>
    <svg
      class="fill-current h-8 w-8 mr-2 ml-4 text-light-accent"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
      /></svg
    >
  </div>
  <div
    class="w-full block text-right flex-shrink lg:flex lg:items-center lg:w-auto"
  >
    <div class="text-sm lg:flex-shrink">
      <a
        href="#responsive-header"
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-white lg:mr-4"
      />
      <a
        href="#responsive-header"
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-white lg:mr-4"
      />
      <a
        href="#responsive-header"
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-white lg:mr-10"
      />
    </div>
  </div>
</nav>

<style>
</style>
