<script setup lang="ts">
import { format } from 'date-fns'
const { post } = defineProps({
	post: { type: Object, required: true },
})
</script>

<template>
	<nuxt-link :to="{name: 'blog-post', params: {post: post.slug}}" class="post">
		<header>
			<p class="title">{{ post.title }}</p>
			<time :datetime="post.published_at" class="time">{{ format(post.published_at, 'yyyy-MM-dd') }}</time>
		</header>
		<div class="description">{{ post.excerpt }}</div>
	</nuxt-link>
</template>

<style scoped>
.post {
	padding: 1rem;
	border: 1px solid var(--border);
	transition: all 200ms cubic-bezier(.4,0,.2,1);
	display: flex;
	flex-direction: column;
	gap: 2rem;
	&:hover {
		border-color: rgb(163 163 163 / 100%);
		cursor: pointer;
	}
}
header {
	display: flex;
	align-items: center;
	gap: 1rem;
}
.title {
    flex-grow: 1;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: .25rem;
    color: var(--text-accent);
}
</style>
