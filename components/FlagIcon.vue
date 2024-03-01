<script setup lang="ts">
const { country } = defineProps({
	country: { type: String, required: true },
})
</script>

<template>
	<i class="fi" :class="'fi-' + country.toLowerCase()" :title="useCountries(country.toUpperCase())" />
</template>
