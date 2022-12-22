<script lang="ts">
  export let label: string = "Default Label";
  export let placeholder: string = label;
  export let type: string = "text";
  export let errorMessage: string = "Wrong input";
  export let validation: Function = () => true;
  export let name: string = "defaultName";
  export let value: string = "";

  // TODO: check this for performance
  export let id: string = Math.random().toString(36).substring(7);

  let visibility: string = "hidden";

  function onInput(event: Event) {
    let input = event.target as HTMLInputElement;
    let isValid = validation(input.value);
    if (isValid) {
      input.classList.remove("border-red-500");
      input.classList.add("border-green-500");
      visibility = "hidden";
    } else {
      input.classList.remove("border-green-500");
      input.classList.add("border-red-500");
      visibility = "block";
    }
    value = input.value;
  }
</script>

<label
  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  for={id}
>
  {label}
</label>
<input
  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  {id}
  {name}
  {type}
  {placeholder}
  {value}
  on:input={onInput}
/>

<p class="{visibility} text-red-500 text-s">{errorMessage}</p>

<style>
</style>
