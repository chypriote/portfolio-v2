<script setup lang="ts">
import { Technos, type Work } from '~/types'

const { t } = useI18n()
const works: Work[] = [
	{
		id: 'nrj',
		title: 'NRJ',
		date: 'Septembre 2023 - Aujourd\'hui',
		subtitle: t('work.nrj.subtitle'),
		description: t('work.nrj.description'),
		logo: 'nrj.png',
		missions: ['seo_optimisation', 'performance_optimisation', 'formation'],
		technos: [Technos.SYMFONY, Technos.PHP, Technos.MONGODB, Technos.ELASTICSEARCH, Technos.REDIS, Technos.REACT, Technos.HTML, Technos.CSS, Technos.JAVASCRIPT, Technos.DOCKER, Technos.GIT],
	},
	{
		id: 'letudiant',
		title: 'L\'Etudiant',
		date: 'Septembre 2022 - Aout 2023',
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
		<heading :title="'Experiences'" />
		<div class="experiences">
			<div class="esn">
				<header>
					<div class="logo"><img :src="`/logo/cbtw.png`" alt="CBTW"> </div>
					<div class="text">
						<h4 class="title">CBTW</h4>
						<p class="subtitle">Développeur Fullstack Senior</p>
					</div>
					<time class="time">Depuis 2022</time>
				</header>
				<p>Missions</p>
				<work-item :work="works[0]" />
				<work-item :work="works[1]" />
			</div>
			<work-item v-for="work of works.slice(2)" :key="work.title" :work="work" />
		</div>
	</section>
</template>

<style scoped>
.esn {
	display: flex;
	gap: 1rem;
	flex-direction: column;
	padding: 1rem;
	border: 1px solid var(--border);
	header {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.text {flex-grow: 1;}
	.logo {
		width: 4rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		img {max-width: 4rem;max-height: 2rem;}
	}
	& > p {color: var(--text)}
}
.experiences {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>
