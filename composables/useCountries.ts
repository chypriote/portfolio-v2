/* eslint-disable import/no-named-as-default-member */
import isoCountries from 'i18n-iso-countries'
import * as fr from 'i18n-iso-countries/langs/fr.json'
import * as en from 'i18n-iso-countries/langs/en.json'
isoCountries.registerLocale(en)
isoCountries.registerLocale(fr)

export const useCountries = (countryCode: string | number | isoCountries.Alpha2Code | isoCountries.Alpha3Code): string => {
	const code = typeof countryCode === 'string' ? countryCode.toUpperCase() : countryCode.toString().toUpperCase()
	return isoCountries.getName(code, useI18n().locale.value) || ''
}
