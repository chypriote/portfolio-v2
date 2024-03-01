<script setup lang="ts">
const { work, mission } = defineProps({
	work: { type: String, required: true },
	mission: { type: String, required: true },
})
</script>

<template>
	<div class="mission">
		<p class="title">{{ $t(`${work}.missions.${mission}.title`) }}</p>
		<p class="description">{{ $t(`${work}.missions.${mission}.description`) }}</p>
	</div>
</template>

<style scoped>
.mission {
	display: flex;
	flex-direction: column;
	gap: .5rem;
}
.title {
	color: var(--text-accent);
}
.description {
	white-space: pre-wrap;
	line-height: 1.3;
}
</style>
