<script setup lang="ts">
import { Technos, type Work } from '~/types'

const { t } = useI18n()
const works: Work[] = [
	{
		id: 'nrj',
		title: 'NRJ',
		date: '2024',
		subtitle: t('work.nrj.subtitle'),
		description: t('work.nrj.description'),
		logo: 'nrj.png',
		missions: ['seo_optimisation', 'performance_optimisation', 'formation'],
		technos: [Technos.SYMFONY, Technos.PHP, Technos.MONGODB, Technos.ELASTICSEARCH, Technos.REDIS, Technos.REACT, Technos.HTML, Technos.CSS, Technos.JAVASCRIPT, Technos.DOCKER, Technos.GIT],
	},
	{
		id: 'letudiant',
		title: 'L\'Etudiant',
		date: '2023',
		subtitle: t('work.letudiant.subtitle'),
		description: t('work.letudiant.description'),
		missions: ['quiz'],
		logo: 'letudiant.png',
		technos: [Technos.SYMFONY, Technos.PHP, Technos.SQL, Technos.ELASTICSEARCH, Technos.REDIS, Technos.HTML, Technos.CSS, Technos.JAVASCRIPT, Technos.DOCKER, Technos.GIT],
	},
	{
		id: 'assoconnect',
		title: 'Assoconnect',
		date: '2021-2022',
		subtitle: t('work.assoconnect.subtitle'),
		description: t('work.assoconnect.description'),
		missions: ['tips', 'i18n'],
		logo: 'assoconnect.png',
		technos: [Technos.SYMFONY, Technos.PHP, Technos.SQL, Technos.ELASTICSEARCH, Technos.HTML, Technos.CSS, Technos.DOCKER, Technos.AZURE, Technos.JIRA, Technos.GIT],
	},
	{
		id: 'carizy',
		title: 'Carizy',
		date: '2020',
		subtitle: t('work.carizy.subtitle'),
		description: t('work.carizy.description'),
		missions: ['funnel', 'financement'],
		logo: 'carizy.png',
		technos: [Technos.SYMFONY, Technos.PHP, Technos.SQL, Technos.GRAPHQL, Technos.ELASTICSEARCH, Technos.HTML, Technos.CSS, Technos.NUXT, Technos.VUE, Technos.JAVASCRIPT, Technos.NODE, Technos.TYPESCRIPT, Technos.DOCKER, Technos.AWS, Technos.JIRA, Technos.GIT],
	},
	{
		id: 'legalplace',
		title: 'LegalPlace',
		date: '2019',
		subtitle: t('work.legalplace.subtitle'),
		description: t('work.legalplace.description'),
		missions: ['dashboard', 'cerfa', 'paiement'],
		logo: 'legalplace.png',
		technos: [Technos.NODE, Technos.JAVASCRIPT, Technos.TYPESCRIPT, Technos.SQL, Technos.HTML, Technos.CSS, Technos.REACT, Technos.AWS, Technos.JIRA, Technos.GIT],
	},
	{
		id: 'aaa',
		title: 'aAa Gaming',
		date: '2019',
		subtitle: t('work.aaa.subtitle'),
		description: t('work.aaa.description'),
		logo: 'aaa.png',
		technos: [],
	},
	{
		id: 'smartangels',
		title: 'SmartAngels',
		date: '2016-2018',
		subtitle: t('work.smartangels.subtitle'),
		description: t('work.smartangels.description'),
		logo: 'smartangels.png',
		missions: ['refonte', 'gestion'],
		technos: [Technos.SYMFONY, Technos.PHP, Technos.SQL, Technos.ANGULAR, Technos.JAVASCRIPT, Technos.ELASTICSEARCH, Technos.DOCKER, Technos.JIRA, Technos.GIT],
	},
]
</script>

<template>
	<section id="work">
		<heading :title="'Work'" />
		<div class="experiences">
			<work-item v-for="work of works" :key="work.title" :work="work" />
		</div>
	</section>
</template>

<style scoped>
.experiences {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>
