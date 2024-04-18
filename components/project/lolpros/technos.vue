<script setup lang="ts">
import { Technos } from '~/types'

const technos = [
	Technos.PHP,
	Technos.SYMFONY,
	Technos.MYSQL,
	Technos.ELASTICSEARCH,
	Technos.REDIS,
	Technos.VUE,
	Technos.NUXT,
	Technos.NODE,
	Technos.GIT,
	Technos.DOCKER,
	Technos.AWS,
]
</script>

<template>
	<div class="technos">
		<techno v-for="techno of technos" :key="techno" :techno="techno" />
	</div>
</template>

<style scoped>
.technos {
	margin-top: 2rem;
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
}
</style>
