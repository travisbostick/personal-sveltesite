<script>
	import Project from '../components/Project.svelte';
	import projects from '../projects';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let mount = true;
	onMount(() => {
		mount = !mount;
	});
</script>

{#key mount}
	<div in:fly={{ delay: 50, y: 20, duration: 700 }} class="projects">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
{/key}
