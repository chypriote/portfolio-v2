import {defineCollection, defineContentConfig, z} from '@nuxt/content'

export default defineContentConfig({
	collections: {
		naicha: defineCollection({
			type: 'page',
			source: 'naicha/**/*.md',
			schema: z.object({
				date: z.string(),
				brand: z.string(),
				title: z.string(),
				city: z.string(),
				'city-en': z.string(),
			})
		})
	}
})
