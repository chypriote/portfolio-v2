<script setup lang="ts">

</script>

<template>
	<div class="project">
		<p>Officiellement lancé en 2018, <a href="https://lolpros.gg" target="_blank">LOLPros.gg</a> est le site de référence pour les joueurs hauts classés sur League of Legends. Le site propose un annuaire des joueurs connus, ainsi que des classements par pays ou par role.</p>
		<p>Aujourd'hui, le site reçoit plus de 200 000 visiteurs uniques par mois dans le monde entier, et est utilisé par toute la sqdsq. Un serveur discord de plusieurs milliers d'utilisateurs</p>
		<h4>Architecture</h4>
		<p>La brique de base du site est une API Rest développée avec Symfony. Cell-ci est utilisée par différentes frontend, le site public récemment migré de Nuxt 2 à Nuxt 3, et le panel d'adminisatration utilisant Nuxt 2.</p>
		<p>L'application Symfony communique avec de nombreux services différents: une base de données MySQL, ElasticSearch, RabbitMQ, et un micro service NodeJS servant à effectuer les mises à jours quotidiennes des données.</p>
		<p>Côté infrastructure, un load balancer permet de rediriger le traffic vers différentes instances de l'application, celles-ci communiquant via un réseau privé vers les instances ElasticSearch et la base de données. Les applications NodeJS, dont les frontends, sont elles servies via une app platform.</p>
		<p>Le site est en grande partie automatisé, ce qui me permet de choisir les périodes pendant lesquelles je travaille dessus, ainsi que de me focaliser sur le développement de fonctionnalités.</p>
		<h4>Project management</h4>
		<p>Même si je suis le seul développeur, une équipe s'est constituée autour du site afin de garantir la validité et la mise à jour des données. Celle-ci est constituée de volontaires de différents pays, chacun assigné à la mise à jour d'une compétition particulière.</p>
		<p>Je suis l'évolution des développements, et garde une liste d'idées et de bugs à corriger dans un Trello, ce qui me permet de prioriser les fonctionnalités en fonction des demandes.</p>
		<p>Les principaux objectifs futurs pour ce projet sont l'ouverture d'une version Amérique du Nord du site, ainsi que l'ajout des l'historique des parties jouées par les joueurs, afin de proposer des statistiques toujours plus pertinentes aux utilisateurs.</p>
	</div>
</template>

<style scoped>
.project {
	display: flex;
	flex-direction: column;
	gap: .5rem;
	padding-top: .5rem;
	a {
		color: var(--accent);
		&:hover {color: var(--accent-darker);}
	}
}
p {line-height: 1.1;}
h4 {margin: 1rem 0 0;}
</style>
