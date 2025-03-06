// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-03-05',
	devtools: { enabled: false },
	telemetry: false,
	ssr: false,
	css: [
		'reset-css',
		'hint.css/hint.min.css',
		'@fortawesome/fontawesome-svg-core/styles.css',
		'flag-icons/css/flag-icons.min.css',
		'~/assets/app.css',
	],
	modules: [
		'@nuxt/fonts',
		['@nuxtjs/i18n', {
			defaultLocale: 'fr',
			locales: [
				{ code: 'fr', file: 'fr-FR.js' },
				// { code: 'en', file: 'en-US.js' },
			],
			lazy: true,
			restructureDir: '',
			strategy: 'no_prefix',
			detectBrowserLanguage: false,
		}],
	],
	app: {
		head: {
			title: 'Nicolas TEMENIDES',
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			],
		},
	},
	postcss: {
		plugins: {
			'postcss-import': {},
			'postcss-nested': {},
		},
	},
	build: {
		transpile: [
			'@fortawesome/vue-fontawesome',
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/free-solid-svg-icons',
			'@fortawesome/free-brands-svg-icons',
		],
	},
	$development: {
		devtools: { enabled: true },
		modules: [
			['@nuxt/devtools', {}],
			['@nuxtjs/eslint-module', { cache: true, fix: true, lintOnStart: false }],
			['@nuxtjs/stylelint-module', { cache: true, lintOnStart: false }],
			'nuxt-typed-router',
		],
		build: {
			analyze: true,
		},
	},
})
