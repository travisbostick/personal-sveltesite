<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let mount = true;
	onMount(() => {
		mount = !mount;
	});
</script>

{#key mount}
	<div
		in:fly={{ delay: 50, y: 20, duration: 700 }}
		class="flex justify-center items-center mt-20 flex-col"
	>
		<div class="lg:w-4/5 w-5/6">
			<p>
				I often find piano recordings, performances, and YouTube covers that I want to play myself.
				If sheet music does not exist for these songs, I try to make my own.
			</p>
			<p>
				Many of my transcriptions can be found on Musescore, where they already have over 90,000
				combined views.
			</p>
			<p class="link">
				<a target="_blank" href="https://musescore.com/user/4002676"> <u>My Musescore page</u></a>
			</p>
		</div>
	</div>
{/key}
