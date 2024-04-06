<script setup lang="ts">

</script>

<template>
	<section id="home">
		<h1>Hi, I’m Nicolas 👋</h1>
		<p>Bonjour, I'm a <strong>Fullstack Web developer</strong> with over <strong>7 years</strong> of experience.</p>
		<p>My current stack of choice is <strong>Symfony and Vue.Js</strong>, however I pride myself in being able to <strong>quickly adapt</strong> to most technologies.</p>
		<p>Outside of work I love <strong>gaming</strong> and am involved in the french League of Legends scene. I am also a regular <strong>concert</strong>-goer.</p>
		<socials />
	</section>
</template>

<style scoped>
section {
	min-height: 100vh;
	justify-content: center;
}
p {
	max-width: 35vw;
	line-height: 1.5rem;
	strong {color: var(--accent);}
}
</style>
