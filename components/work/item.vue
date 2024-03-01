<script setup lang="ts">
import Mission from './mission.vue'
import type { Work } from '~/types'

const { work } = defineProps({
	work: { type: Object as () => Work, required: true },
})
const expanded = ref(false)
</script>

<template>
	<div class="experience" :class="{'--expanded': expanded}" @click="expanded = !expanded">
		<work-item-header :work />
		<template v-if="expanded">
			<div class="description">{{ work.description }}</div>
			<div v-if="work.missions?.length" class="missions">
				<mission v-for="mission of work.missions" :key="mission" :mission :work="work.id" />
			</div>
			<div v-if="work.technos.length" class="technos">
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
	gap: 1.5rem;
	&:hover {
		border-color: rgb(163 163 163 / 100%);
		cursor: pointer;
	}
}
.description {
	white-space: pre-wrap;
	line-height: 1.3;
}
.missions {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
.technos {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
}
</style>
