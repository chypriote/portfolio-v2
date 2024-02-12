import { defineNuxtPlugin } from '#app'
import isoCountries from 'i18n-iso-countries'
import * as fr from 'i18n-iso-countries/langs/fr.json'
import * as en from 'i18n-iso-countries/langs/en.json'
isoCountries.registerLocale(en)
isoCountries.registerLocale(fr)

export default defineNuxtPlugin({
	name: 'app:countries',
	parallel: true,
	setup: () => {
		const { $i18n } = useNuxtApp()
		const getName = (countryCode: string | number | isoCountries.Alpha2Code | isoCountries.Alpha3Code, lang?: string): string => {
			return isoCountries.getName(countryCode, lang || $i18n.locale) || ''
		}

		return {
			provide: {
				countries: getName,
			},
		}
	},
})

declare module '#app' {
	interface NuxtApp {
		$countries: (countryCode: string | number | isoCountries.Alpha2Code | isoCountries.Alpha3Code, lang?: string) => string
	}
}

declare module 'vue' {
	interface ComponentCustomProperties {
		$countries: (countryCode: string | number | isoCountries.Alpha2Code | isoCountries.Alpha3Code, lang?: string) => string
	}
}
