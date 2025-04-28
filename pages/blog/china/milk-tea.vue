<script setup lang="ts">
const { data } = await useAsyncData('milkTeas', () => {
	return queryCollection('naicha').all()
})
console.log(data)
</script>

<template>
	<div class="container">
		<heading :title="'Milk tea'" />
		<div v-for="tea of data" :key="tea.title">
			<ContentRenderer :value="tea" />
		</div>
	</div>
</template>

<style scoped>

</style>
