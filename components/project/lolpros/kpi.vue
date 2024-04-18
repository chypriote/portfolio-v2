<script setup lang="ts">
const numbers = [
	{ text: 'début du dev', value: '2017' },
	{ text: 'admins bénévoles', value: '25' },
	{ text: 'visiteurs par jour', value: '10k' },
	{ text: 'dev fullstack', value: '1' },
]
</script>

<template>
	<div class="key-numbers">
		<header>Chiffres clés</header>
		<div class="list">
			<div v-for="number of numbers" :key="number.text" class="number">
				<div class="value">{{ number.value }}</div>
				<div class="text">{{ number.text }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
header {
	line-height: 1.2;
	font-size: 1.3rem;
	color: var(--headings);
	text-align: center;
	margin: 1rem 0;
}
.list {
	display: flex;
	gap: 1rem;
	justify-content: center;
}
.number {
	display: flex;
	flex-direction: column;
	align-items: center;
	.value {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--accent);
	}
	.text {
		justify-content: center;
		text-align: center;
	}
}
</style>
