import { defineNuxtPlugin } from '#app'
import { library, config } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin({
	name: 'app:fontawesome',
	parallel: true,
	setup: (nuxtApp) => {
		library.add(faGithub, faLinkedinIn, faEnvelope)
		config.autoAddCss = false
		nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
	},
})
