<script setup lang="ts">
import type { Work } from '~/types'

const { work } = defineProps({
	work: { type: Object as () => Work, required: true },
})
const expanded = ref(false)
</script>

<template>
	<div class="experience" :class="{'--expanded': expanded}" @click="expanded = !expanded">
		<header>
			<div class="logo"><img :src="`/logo/${work.logo}`" :alt="work.title"> </div>
			<div class="text">
				<p class="title">{{ work.title }}</p>
				<p class="subtitle">{{ work.subtitle }}</p>
			</div>
			<time class="time">{{ work.date }}</time>
		</header>
		<template v-if="expanded">
			<div class="description">{{ work.description }}</div>
			<div class="technos">
				<techno v-for="techno of work.technos" :key="techno" :techno="techno" />
			</div>
		</template>
	</div>
</template>

<style scoped>
.experience {
	padding: 1rem;
	border: 1px solid var(--border);
	transition: all 200ms cubic-bezier(.4,0,.2,1);
	display: flex;
	flex-direction: column;
	gap: 2rem;
	&:hover {
		border-color: rgb(163 163 163 / 100%);
		cursor: pointer;
	}
}
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
	margin-bottom: .25rem;
}
.subtitle {
	font-size: .9rem;
	text-align: left;
}
.time {
	width: 5rem;
}
.technos {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
}
</style>
