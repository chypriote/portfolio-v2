<script setup lang="ts">
import type { Work } from '~/types'

const { work } = defineProps({
	work: { type: Object as () => Work, required: true },
})
</script>

<template>
	<header>
		<div class="logo"><img :src="`/logo/${work.logo}`" :alt="work.title"> </div>
		<div class="text">
			<h4 class="title">{{ work.title }}</h4>
			<p class="subtitle">{{ work.subtitle }}</p>
		</div>
		<time class="time">{{ work.date }}</time>
	</header>
</template>

<style scoped>
header {
	display: flex;
	align-items: center;
	gap: 1rem;
}
.logo {
	width: 4rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	img {max-width: 4rem;max-height: 2rem;}
}
.text {flex-grow: 1;}
.title {
	color: var(--text-accent);
	font-size: 1.1rem;
}
.subtitle {
	font-size: .9rem;
	text-align: left;
}
.time {
	width: 10rem;
	text-align: right;
}
</style>
