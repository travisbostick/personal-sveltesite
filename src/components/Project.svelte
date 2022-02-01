<script>
	export let project;
</script>

<div class="project">
	<a href={`/${project.path}`}>
		<img class="project-cover" src={project.cover_img_url} alt={project.name} />
	</a>
	<h2 class="project-name">{project.name}</h2>
</div>

<style>
	.project-cover {
		width: 100%;
		height: 80%;
		box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.08), 2px 2px 2px rgba(0, 0, 0, 0.12),
			3px 3px 3px 3px rgba(0, 0, 0, 0.16), 4px 4px 4px 4px rgba(0, 0, 0, 0.16),
			5px 5px 5px 5px rgba(0, 0, 0, 0.2);
	}
	.project {
		opacity: 0.6;
		transition: opacity 0.2s;
	}
	.project-name {
		font-family: 'iCiel Medium';
		font-size: 1.2rem;
		padding-top: 5px;
	}
	.project:hover {
		opacity: 1;
	}
</style>
