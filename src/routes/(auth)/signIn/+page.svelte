<script lang="ts">
	import { supabase } from '$lib/supabase/supabase';

	let state: 'loading' | 'success' | 'error' | null = null;
	let email: string;
	let password: string;

	async function signInWithOtp() {
		state = 'loading';
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: 'https://localhost:5173',
      },
    });
		state = error ? 'success' : 'error';
    return null;
	}

	async function signWithGoogle() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google'
		});
		if (error) {
			console.log(error);
		}
		console.log(data);
	}
  console.clear()
</script>

<div class="grid place-items-center h-screen">
	<div class="p-6 sm:p-14 pt-0 sm:pt-0 w-full max-w-lg">
		<div class="text-center mb-8">
      <a href="/" class="flex justify-center mb-3">
        <img class="w-10" src="/image/favicon.svg" alt="">
      </a>
			<div class="text-3xl md:text-5xl tracking-tight font-bold text-color font-display">
				Sign in 
			</div>
			<p class="text-color-muted md:text-lg mt-6 leading-normal">
				Sign in to save and edit your<br />custom color scales.
			</p>
		</div>
		<button on:click={signWithGoogle} class="px-6 py-3 rounded-full form-control border dark:border-slate-700 w-full flex items-center justify-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" ><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" ></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" ></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" ></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" ></path><path d="M1 1h22v22H1z" fill="none"></path></svg >
      <span>Sign in with Google</span></button>
		<div class="flex space-x-4 items-center my-6">
			<hr class="border dark:border-slate-700 flex-grow" />
			<div class="text-color-muted uppercase text-sm">or</div>
			<hr class="border dark:border-slate-700 flex-grow" />
		</div>
		<form class="space-y-6" on:submit|preventDefault>
			<input
				class="form-control border dark:border-slate-700 dark:focus:border-primary px-6 py-3 w-full rounded-full"
				type="email"
				placeholder="Enter your email"
				bind:value={email}
				autocomplete="email"
			/>
      <button class="flex items-center justify-center gap-3 px-6 py-3 rounded-full text-white w-full bg-primary" on:click={signInWithOtp}>
        {#if state == 'loading'}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
            <path fill="#fff" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" />
            <path fill="#fff" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" >
              <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
            </path >
            </svg >
				{:else if state == 'success'}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
							fill="#3bdf26"
							fill-rule="evenodd"
							d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
							clip-rule="evenodd"
						/>
          </svg>
				{:else if state == 'error'}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#e11d48"
              fill-rule="evenodd"
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06"
              clip-rule="evenodd"
            >
          </svg>
				{/if}
        Send a magic link
      </button>
      
		</form>
		<div class="flex justify-center mt-8">
			<a
				class="text-color-muted-extra text-sm"
				href="https://forms.gle/cqvfXyoDmHzZGij9A"
				target="_blank">Give feedback</a
			>
		</div>
	</div>
</div>

<style>
</style>
