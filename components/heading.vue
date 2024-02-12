<script setup lang="ts">
const { title } = defineProps({
	title: { type: String, required: true },
})
</script>

<template>
	<div class="heading">
		<div class="border" />
		<h2 class="title">{{ title }}</h2>
	</div>
</template>

<style scoped>
.heading {
	display: flex;
	align-items: center;
	gap: 2rem;
	padding-left: 1vw;
}
.border {
	background-color: var(--accent);
	height: 1px;
	display: flex;
	width: 3rem;
}
.title {
	font-size: 1.875rem;
	line-height: 1.75rem;
	color: var(--headings);
}
</style>
