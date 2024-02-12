<script setup lang="ts">
const { country } = defineProps({
	country: { type: String, required: true },
})
const { $countries } = useNuxtApp()
</script>

<template>
	<i class="fi" :class="'fi-' + country.toLowerCase()" :title="$countries(country.toUpperCase())" />
</template>
