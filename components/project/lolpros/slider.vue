<script setup lang="ts">
const selected = ref(1)
const select = (val: number) => {
	if (val === selected.value) { return }
	selected.value = val
}
</script>

<template>
	<div class="slider-images">
		<img :class="{'hidden': selected !== 1}" src="~/assets/lolpros1.png" alt="LOLPros.GG">
		<img :class="{'hidden': selected !== 2}" src="~/assets/lolpros2.png" alt="LOLPros.GG">
		<img :class="{'hidden': selected !== 3}" src="~/assets/lolpros3.png" alt="LOLPros.GG">
		<img :class="{'hidden': selected !== 4}" src="~/assets/lolpros4.png" alt="LOLPros.GG">
	</div>
	<div class="slider-select">
		<button type="button" class="select-image" :class="{'selected': selected === 1}" @click="select(1)"><font-awesome-icon icon="circle" /></button>
		<button type="button" class="select-image" :class="{'selected': selected === 2}" @click="select(2)"><font-awesome-icon icon="circle" /></button>
		<button type="button" class="select-image" :class="{'selected': selected === 3}" @click="select(3)"><font-awesome-icon icon="circle" /></button>
		<button type="button" class="select-image" :class="{'selected': selected === 4}" @click="select(4)"><font-awesome-icon icon="circle" /></button>
	</div>
</template>

<style scoped>
.slider-images {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.hidden {display: none;}
.slider-select {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: .5rem;
}
.select-image {
	color: var(--text);
	transition: color 200ms ease-in-out;
	background-color: transparent;
	border: none;
	padding: 0;
	width: auto;
	height: auto;
	&.selected {
		color: var(--accent-dark);
		cursor: initial;
	}
	&:not(.selected) {
		cursor: pointer;
		&:hover {color: var(--accent);}
	}
}
</style>
