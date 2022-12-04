<script lang="ts">
  import "../app.postcss";
  import type { LayoutServerData } from "./$types";
  import { loginSession } from "../stores";
  import { beforeNavigate, goto } from "$app/navigation";
  import { onMount } from "svelte";

  export let data: LayoutServerData;
  // If returning from different website, runs once (as it's an SPA) to restore user session if session cookie is still valid
  const { user } = data;
  $loginSession = user;

  beforeNavigate(() => {
    let expirationDate = $loginSession?.expires
      ? new Date($loginSession.expires)
      : undefined;
    if (expirationDate && expirationDate < new Date()) {
      console.log("Login session expired.");
      $loginSession = null;
    }
  });
  async function logout() {
    // Request server delete httpOnly cookie called loginSession
    const url = "/auth/logout";
    const res = await fetch(url, {
      method: "POST",
    });
    if (res.ok) {
      loginSession.set(undefined); // delete loginSession.user from
      goto("/login");
    } else
      console.error(`Logout not successful: ${res.statusText} (${res.status})`);
  }
</script>


<slot />
