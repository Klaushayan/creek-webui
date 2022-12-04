<script lang="ts">
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { loginSession } from '../../stores'
  import { focusOnFirstError } from '../../helpers/focus'
  import LoginModal from 'src/components/LoginModal.svelte'
  let focusedField: HTMLInputElement
  let message: string
  const credentials: Credentials = {
    username: '',
    password: ''
  }
  async function login() {
    message = ''
    const form = <HTMLFormElement> document.getElementById('signIn')
    if (form.checkValidity()) {
      try {
        await loginLocal(credentials)
      } catch (err) {
        if (err instanceof Error) {
          console.error('Login error', err.message)
          message = err.message
        }
      }
    } else {
      form.classList.add('was-validated')
      focusOnFirstError(form)
    }
  }
  onMount(() => {
    focusedField.focus()
	})
  async function loginLocal(credentials: Credentials) {
		try {
			const res = await fetch('/auth/login', {
				method: 'POST',
				body: JSON.stringify(credentials),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const fromEndpoint = await res.json()
			if (res.ok) {
				loginSession.set(fromEndpoint.user)
				const { role } = fromEndpoint.user
        const referrer = $page.url.searchParams.get('referrer')
				if (referrer) return goto(referrer)
				if (role === 'teacher') return goto('/teachers')
				if (role === 'admin') return goto('/admin')
				return goto('/')
			} else {
				throw new Error(fromEndpoint.message)
			}
		} catch (err) {
			if (err instanceof Error) {
				console.error('Login error', err)
				throw new Error(err.message)
			}
		}
	}
</script>

<svelte:head>
  <title>Login - Creek WebUI</title>
  <meta name='robots' content='noindex, nofollow'/>
</svelte:head>

<LoginModal/>

<style>
</style>

