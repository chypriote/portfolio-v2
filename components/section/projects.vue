<script setup lang="ts">
</script>

<template>
	<section id="projects">
		<heading :title="'Projects'" />
		<div class="grid">
			<aside class="aside">
				<project-lolpros-slider class="slider" />
			</aside>
			<div class="content">
				<h2>LOLPros.GG</h2>
				<project-lolpros-text-fr />
			</div>
		</div>
	</section>
</template>

<style scoped>
.grid {
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: repeat(5,minmax(0,1fr));
}
.content {
	grid-column: span 3;
}
.aside {
	grid-column: span 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
}
</style>
