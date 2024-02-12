<script setup lang="ts">
</script>

<template>
	<div class="social">
		<a class="github" href="https://github.com/chypriote" target="_blank" rel="noopener">
			<font-awesome-icon :icon="['fab', 'github']" />
		</a>
		<a class="linkedin" href="https://fr.linkedin.com/in/nicolas-temenides" target="_blank" rel="noopener">
			<font-awesome-icon :icon="['fab', 'linkedin-in']" />
		</a>
		<a class="email" href="mailto:nicolas.temenides@gmail.com">
			<font-awesome-icon icon="envelope" />
		</a>
	</div>
</template>

<style scoped>
.social {
	display: flex;
	gap: 1rem;
}
a {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3rem;
	height: 3rem;
	font-size: 1.2em;
	border: 1px solid var(--border);
	&:hover {color: #fff;}
	&::before {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -20;
		width: 100%;
		height: 100%;
		content: '';
		transition: all 0.5s ease;
	}
}
.github {
	color: var(--github);
	border-color: var(--github);
	&:hover {color: #fff;}
	&::before {box-shadow: inset 0 0 0 0 var(--github);}
	&:hover::before {box-shadow: inset 0 0 0 48px var(--github);}
}
.linkedin {
	color: var(--linkedin);
	border-color: var(--linkedin);
	&:hover {color: #fff;}
	&::before {box-shadow: inset 0 0 0 0 var(--linkedin);}
	&:hover::before {box-shadow: inset 0 0 0 48px var(--linkedin);}
}
.email {
	color: var(--email);
	border-color: var(--email);
	&:hover {color: #fff;}
	&::before {box-shadow: inset 0 0 0 0 var(--email);}
	&:hover::before {box-shadow: inset 0 0 0 48px var(--email);}
}
</style>
