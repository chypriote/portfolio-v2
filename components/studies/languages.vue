<script setup lang="ts">

const { t } = useI18n()
const languages = [
	{ iso: 'FR', name: t('lang.french'), value: 'fluent' },
	{ iso: 'GB', name: t('lang.english'), value: 'fluent' },
	{ iso: 'DE', name: t('lang.german'), value: 'intermediaire' },
	{ iso: 'CN', name: t('lang.chinese'), value: 'beginner' },
]
</script>

<template>
	<div class="languages">
		<div v-for="lang of languages" :key="lang.iso" class="lang">
			<flag-icon :country="lang.iso" />
			<div class="name">{{ lang.name }}</div>
			<div class="value">{{ lang.value }}</div>
		</div>
	</div>
</template>

<style scoped>
.languages {
	display: flex;
	flex-direction: column;
	padding: 1rem;
	gap: 1rem;
	border: 1px solid var(--border);
}
.lang {
	display: flex;
	gap: 5rem 1rem;
	align-items: center;
	.fi {height: 1.66rem;width: 2rem;}
	.name {
		flex-grow: 1;
		color: var(--text-accent);
	}
}
</style>
