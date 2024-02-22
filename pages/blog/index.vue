<script setup lang="ts">
import type { Post } from '~/types'

const posts: Post[] = [
	{
		title: 'string',
		slug: 'string',
		excerpt: 'string',
		published_at: new Date(),
		updated_at: new Date(),
	},
	{
		title: 'ttil',
		slug: 'ttil',
		excerpt: 'string',
		published_at: new Date(),
		updated_at: new Date(),
	},
]
</script>

<template>
	<heading :title="'Blog'" />
	<div class="posts">
		<posts-list-item v-for="post of posts" :key="post.slug" :post="post" />
	</div>
</template>
