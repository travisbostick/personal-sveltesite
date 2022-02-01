<script>
	export let url;
	let links = [
		{ name: 'home', path: '/' },
		{ name: 'software', path: '/software' },
		{ name: 'sheet music', path: '/sheet-music' },
		{ name: 'video', path: '/video' }
	];
	let open = false;
</script>

<!-- Following guide at https://www.youtube.com/watch?v=HbBMp6yUXO0 -->

<header class="primary-header flex gap-5 items-center justify-between">
	<div class="logo m-2">TB</div>
	<nav>
		<ul
			class="primary-navigation flex gap-5 p-0 m-0 sm:fixed sm:inset-y-0 sm:inset-r-0 sm:inset-l-30% bg-black text-white"
		>
			{#each links as link}
				<li>
					<a href={link.path}>
						<span>{link.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<!-- <nav class="nav grid sm:grid-cols-1">
	<a href="/">
		<img src="./logo.png" alt="" />
	</a>
	<div class="navbar-collapse">
		<div class="navbar-nav">
			{#each links as link}
				<a
					class={`nav-link lg:text-xl md:text-lg sm:text-md text-sm ${
						url.pathname === link.path && 'active'
					}`}
					href={link.path}>{link.name}</a
				>
			{/each}
		</div>
	</div>
</nav> -->
<style>
	@font-face {
		font-family: 'SF Mono-Light';
		src: url('./fonts/SF-Mono-Light.otf');
	}
	.nav {
		display: flex;
		justify-content: flex-start;
		position: relative;
		padding: 25px;
	}
	.navbar-collapse {
		top: 0;
		right: 0;
		text-align: right !important;
		display: flex !important;
		align-items: center;
		flex-basis: auto;
		flex-grow: 1;
	}
	.navbar-nav {
		flex-direction: row;
		margin-left: auto;
		display: flex;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
	}
	.nav-link {
		color: white;
		text-decoration: none;
		font-family: 'SF Mono-Light';
		margin-right: 1.2rem;
		display: block;
		/* font-size: 1.2rem; */
		color: rgba(255, 255, 255, 0.75);
		transition: 0.3s;
	}
	.nav-link:hover {
		color: white;
	}
	.active {
		color: white;
	}
</style>
