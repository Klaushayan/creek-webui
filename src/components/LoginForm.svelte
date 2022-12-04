<script lang="ts">
    import FormInput from "./FormInput.svelte";
</script>

<form>
  <div class="flex flex-row flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FormInput id="username" inputLabel="Username" placeholder="Enter your username..." inputType="text" />
    </div>
    <div class="w-full md:w-1/2 px-3">
        <FormInput id="password" inputLabel="Password" placeholder="Enter your password" inputType="text" />
    </div>
  </div>
  <!-- the submit button -->
    <div class="flex flex-wrap text-left">
        <div class="w-full">
        <button class="w-full sm:w-1/2 md:w-28  bg-dark-accent hover:bg-darker-accent text-dark-text font-bold py-2 px-4 rounded" type="button">
            Submit
        </button>
        </div>
</form>

<style></style>