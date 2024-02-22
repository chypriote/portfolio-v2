<script setup lang="ts">
const { params } = useRoute()
</script>

<template>
	<div>{{ params.post }}</div>
</template>
