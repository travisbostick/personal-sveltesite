<script context="module">
	export async function load({ url }) {
		return { props: { url } };
	}
</script>

<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	export let url;
</script>

<main>
	<Nav {url}>
		<slot />
	</Nav>
</main>

<slot />

<style>
	:global(body) {
		background-color: #1e2127;
	}
	:global(h1, h2, h3, h4, h5, h6, p) {
		color: white;
	}
</style>
