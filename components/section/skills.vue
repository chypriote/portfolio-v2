<script setup lang="ts">

import { Technos } from '~/types'
</script>

<template>
	<section id="education">
		<heading :title="'Skills'" />
		<div class="grid">
			<div class="skill">
				<h4>ReactJS applications</h4>
				<p>
					Having worked on websites where availability and reliability is crucial
					Worked on websites where availability and scalability is crucial. With industry standards tools.
				</p>
				<div class="technos">
					<techno :techno="Technos.REDIS" />
					<techno :techno="Technos.ELASTICSEARCH" />
					<techno :techno="Technos.RABBITMQ" />
				</div>
			</div>
			<div class="skill">
				<h4>  applications</h4>
				<p>Clear communication with all actors, from fellow developers to business focused teams.</p>
				<p>Quickly adapt to any process, used to work in Lean teams, as well as Agile/SCRUM or even V cycle focused organisations.</p>
			</div>
			<div class="skill">
				<h4>Reliable backend</h4>
				<p>Focus on producing a technical solution to a business problem.</p>
				<div class="technos">
					<techno :techno="Technos.PHP" />
					<techno :techno="Technos.SYMFONY" />
					<techno :techno="Technos.MYSQL" />
					<techno :techno="Technos.POSTGRESQL" />
					<techno :techno="Technos.NODE" />
				</div>
			</div>
			<div class="skill">
				<h4>Immaculate frontend</h4>
				<p>Reactive and responsive interfaces. Maintainability and reusability as a default.</p>
				<div class="technos">
					<techno :techno="Technos.HTML" />
					<techno :techno="Technos.CSS" />
					<techno :techno="Technos.JAVASCRIPT" />
					<techno :techno="Technos.VUE" />
					<techno :techno="Technos.REACT" />
					<techno :techno="Technos.NUXT" />
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
