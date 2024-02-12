<script setup lang="ts">

const { t } = useI18n()
const studies = [
	{ title: t('studies.uha.title'), date: 2017, subtitle: t('studies.uha.subtitle') },
	{ title: t('studies.epitech.title'), date: 2017, subtitle: t('studies.epitech.subtitle') },
	{ title: t('studies.bjtu.title'), date: 2016, subtitle: t('studies.bjtu.subtitle') },
	{ title: t('studies.hei.title'), date: 2012, subtitle: t('studies.hei.subtitle') },
	{ title: t('studies.bac.title'), date: 2010, subtitle: t('studies.bac.subtitle') },
]
</script>

<template>
	<div class="studies">
		<div v-for="study of studies" :key="study.title" class="study">
			<div class="time">{{ study.date }}</div>
			<div class="details">
				<div class="title">{{ study.title }}</div>
				<div class="subtitle">{{ study.subtitle }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.studies {
	display: flex;
	flex-direction: column;
	padding: 1rem;
	gap: 1.5rem;
	border: 1px solid var(--border);
}
.study {
	display: flex;
	gap: 1rem;
	.details {
		flex-grow: 1;
	}
	.title {
		font-size: 1.1rem;
		font-weight: 700;
		margin-bottom: .25rem;
		color: var(--text-accent);
	}
	.time {
		display: flex;
		align-items: center;
	}
}
</style>
