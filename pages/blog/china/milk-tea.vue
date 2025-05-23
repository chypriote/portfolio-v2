<script setup lang="ts">
import { format } from 'date-fns'

const { data } = await useAsyncData('milkTeas', () => {
	return queryCollection('naicha').all()
})
</script>

<template>
	<div class="container">
		<heading :title="'Milk tea'" />
		<div class="tea-list">
			<div v-for="tea of data" :key="tea.title">
				<header class="tea-header">
					<span class="tea-city">{{ tea.city }}</span>
					{{ tea.title }}
					<time :datetime="tea.date">{{ format(tea.date, 'dd/MM') }}</time>
				</header>
				{{ tea }}
			</div>
		</div>
	</div>
</template>

<style scoped>
.tea-list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
}
.tea-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
