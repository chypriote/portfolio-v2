<script setup lang="ts">
import type { Technos } from '~/types'

const { techno, full } = defineProps({
	techno: { type: String as () => Technos, required: true },
	full: { type: Boolean, default: false },
})
</script>

<template>
	<div class="techno hint--top" :aria-label="techno">
		<div class="logo">
			<img :src="`/skills/${techno.toLowerCase()}.svg`" :alt="techno">
		</div>
		<span v-if="full">{{ techno }}</span>
	</div>
</template>

<style scoped>
.techno {
	display: flex;
	align-items: center;
	gap: 0 .5rem;
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		svg {width: 100%;}
	}
}
</style>
