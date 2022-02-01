<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let mount = true;
	onMount(() => {
		mount = !mount;
	});
</script>

{#key mount}
	<div in:fly={{ delay: 60, y: 20, duration: 700 }} class="home">
		<div class="homeCard">
			<div class="nameCard">
				<h1 class="name">TRAVIS BOSTICK</h1>
				<h2 class="role">Developer</h2>
				<div>
					<h2 class="role">
						<span class="plus">&nbsp;&nbsp;+ </span>
						Musician
					</h2>
				</div>
				<div class="underline" />
			</div>
		</div>
	</div>
{/key}

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
	</style>
</svelte:head>

<style>
	.home {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 7vw;
	}
	.name {
		font-family: 'iCiel Medium';
		line-height: 1rem;
		letter-spacing: 0.5vw;
		line-height: 1.2vw;
		padding-left: 0.5vw;
		color: #9b9b9b;
	}
	.name,
	.role,
	.underline,
	.plus {
		text-shadow: 3px 3px rgba(0, 0, 0, 0.2);
	}
	.role {
		font-family: 'Montserrat';
		font-weight: 500;
		margin: 0;
		line-height: 1.2;
	}
	.underline {
		text-align: center;
		display: block;
		border-bottom: 2px solid #9b9b9b;
		width: 100%;
	}
	.plus {
		color: #9b9b9b;
	}
</style>
