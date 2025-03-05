<script setup lang="ts">
</script>

<template>
	<section id="projects">
		<heading :title="'Projets'" />
		<div class="grid">
			<aside class="aside">
				<project-lolpros-slider class="slider" />
				<project-lolpros-kpi />
			</aside>
			<div class="content">
				<h3>LOLPros.GG</h3>
				<project-lolpros-text-fr />
				<project-lolpros-technos />
			</div>
		</div>
	</section>
</template>

<style scoped>
.grid {
	display: grid;
	gap: 0 2rem;
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
