<script setup lang="ts">

</script>

<template>
	<header>
		<a href="mailto:nicolas.temenides@gmail.com">nicolas temenides</a>
		<nav role="navigation">
			<ul role="list">
				<li><a href="/#home">Home</a></li>
				<li><a href="/#projects">Projets</a></li>
				<li><a href="/#work">Experiences</a></li>
				<li><a href="/#education">Formation</a></li>
				<li><a href="/#skills">Compétences</a></li>
				<!--				<li><a href="/blog">Blog</a></li>-->
			</ul>
		</nav>
	</header>
</template>

<style scoped>
header {
	position: fixed;
	width: 100%;
	z-index: 10;
	background-color: var(--bg-darker);
	border-bottom: 1px solid var(--border);
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
}
ul {
	display: flex;
	gap: 1rem;
	color: var(--headings);
	text-transform: uppercase;
	letter-spacing: 2px;
}
</style>
