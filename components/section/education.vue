<script setup lang="ts">

</script>

<template>
	<section id="education">
		<heading :title="'Education'" />
		<div class="grid">
			<div class="studies">
				<h3>Studies</h3>
				<studies-timeline />
			</div>
			<div class="languages">
				<h3>Languages</h3>
				<studies-languages />
			</div>
		</div>
	</section>
</template>

<style scoped>
.grid {
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: repeat(3,minmax(0,1fr));
}
.studies {
	grid-column: span 2;
}
.languages {
	grid-column: span 1;
}
</style>
