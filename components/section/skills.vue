<script setup lang="ts">
import { Technos } from '~/types'
</script>

<template>
	<section id="skills">
		<heading :title="'Compétences'" />
		<div class="grid">
			<div class="skill">
				<h4>{{ $t('skills.backend.header') }}</h4>
				<div class="technos">
					<techno :techno="Technos.PHP" />
					<techno :techno="Technos.SYMFONY" />
					<techno :techno="Technos.NODE" />
				</div>
			</div>
			<div class="skill">
				<h4>{{ $t('skills.frontend.header') }}</h4>
				<div class="technos">
					<techno :techno="Technos.HTML" />
					<techno :techno="Technos.CSS" />
					<techno :techno="Technos.JAVASCRIPT" />
					<techno :techno="Technos.TYPESCRIPT" />
					<techno :techno="Technos.VUE" />
					<techno :techno="Technos.REACT" />
					<techno :techno="Technos.NUXT" />
				</div>
			</div>
			<div class="skill">
				<h4>{{ $t('skills.databases.header') }}</h4>
				<div class="technos">
					<techno :techno="Technos.POSTGRESQL" />
					<techno :techno="Technos.MYSQL" />
					<techno :techno="Technos.MONGODB" />
					<techno :techno="Technos.REDIS" />
					<techno :techno="Technos.ELASTICSEARCH" />
					<techno :techno="Technos.RABBITMQ" />
				</div>
			</div>
			<div class="skill">
				<h4>{{ $t('skills.devops.header') }}</h4>
				<div class="technos">
					<techno :techno="Technos.AWS" />
					<techno :techno="Technos.AZURE" />
					<techno :techno="Technos.GIT" />
					<techno :techno="Technos.DOCKER" />
					<techno :techno="Technos.TDD" />
					<techno :techno="Technos.SOLID" />
				</div>
			</div>
			<div class="skill">
				<h4>{{ $t('skills.project.header') }}</h4>
				<div class="technos">
					<techno :techno="Technos.JIRA" />
					<techno :techno="Technos.AGILE" />
					<techno :techno="Technos.GIT" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.grid {
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(3,minmax(0,1fr));
}
.skill {
	padding: 2rem;
	border: 1px solid var(--border);
	gap: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.technos {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
	.techno {
		width: 3rem;
		height: 3rem;
		display: flex;
		justify-content: center;
	}
}
</style>
