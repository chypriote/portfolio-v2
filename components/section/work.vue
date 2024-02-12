<script setup lang="ts">

import { Technos, type Work } from '~/types'

const { t } = useI18n()
const works: Work[] = [
	{
		title: 'L\'Etudiant',
		date: '2023',
		subtitle: 'Développeur FullStack Symfony Vue.js',
		description: t('work.letudiant.description'),
		logo: 'letudiant.png',
		technos: [Technos.SYMFONY, Technos.PHP, Technos.SQL, Technos.ELASTICSEARCH, Technos.REDIS, Technos.HTML, Technos.CSS, Technos.JAVASCRIPT, Technos.DOCKER, Technos.GIT],
	},
	{
		title: 'Assoconnect',
		subtitle: 'Développeur Backend Symfony',
		date: '2021-2022',
		description: t('work.assoconnect.description'),
		logo: 'assoconnect.png',
		technos: [Technos.SYMFONY, Technos.PHP, Technos.SQL, Technos.ELASTICSEARCH, Technos.HTML, Technos.CSS, Technos.DOCKER, Technos.AZURE, Technos.JIRA, Technos.GIT],
	},
	{
		title: 'Carizy',
		subtitle: 'Développeur FullStack Symfony Vue.js',
		date: '2020',
		description: t('work.carizy.description'),
		logo: 'carizy.png',
		technos: [Technos.SYMFONY, Technos.PHP, Technos.SQL, Technos.GRAPHQL, Technos.ELASTICSEARCH, Technos.HTML, Technos.CSS, Technos.NUXT, Technos.VUE, Technos.JAVASCRIPT, Technos.NODE, Technos.TYPESCRIPT, Technos.DOCKER, Technos.AWS, Technos.JIRA, Technos.GIT],
	},
	{
		title: 'LegalPlace',
		subtitle: 'Développeur FullStack NodeJS React',
		date: '2019',
		description: t('work.legalplace.description'),
		logo: 'legalplace.png',
		technos: [Technos.NODE, Technos.JAVASCRIPT, Technos.TYPESCRIPT, Technos.SQL, Technos.HTML, Technos.CSS, Technos.REACT, Technos.AWS, Technos.JIRA, Technos.GIT],
	},
	{
		title: 'aAa Gaming',
		subtitle: 'Team Manager',
		date: '2019',
		description: t('work.aaa.description'),
		logo: 'aaa.png',
		technos: [],
	},
	{
		title: 'SmartAngels',
		subtitle: 'Développeur FullStack Symfony Angular.js',
		date: '2016-2018',
		description: t('work.smartangels.description'),
		logo: 'smartangels.png',
		technos: [Technos.SYMFONY, Technos.PHP, Technos.SQL, Technos.JAVASCRIPT, Technos.ELASTICSEARCH, Technos.DOCKER, Technos.JIRA, Technos.GIT],
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
