// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  css: [
    'reset-css',
		'hint.css/hint.min.css',
		'@fortawesome/fontawesome-svg-core/styles.css',
		'flag-icons/css/flag-icons.min.css',
		'~/assets/app.css',
  ],
  modules: [
    ['@nuxt/devtools', {}],
    ['@nuxtjs/eslint-module', { cache: true, fix: true, lintOnStart: false }],
    ['@nuxtjs/stylelint-module', { cache: true, lintOnStart: false }],
    ['@nuxtjs/i18n', {
      defaultLocale: 'fr',
      locales: [
				{ code: 'fr', file: 'fr-FR.js' },
				{ code: 'en', file: 'en-US.js' },
			],
      lazy: true,
      langDir: 'translations',
      strategy: 'no_prefix',
    }],
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preload', as: 'style', href: '//fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap' },
        { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap' },
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
})
