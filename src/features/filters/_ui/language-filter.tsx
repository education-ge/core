"use client"

import { useTranslations } from 'next-intl'
import { CheckboxGroup } from './checkbox-group'

export const LanguageFilter = () => {
	const t = useTranslations('Filters')

	return (
		// <CheckboxGroup
		// title={t("languages")}
		// className="mt-5"
		// limit={3}
		// isLoading={isLanguagesLoading}
		// // defaultItems={languages.map((item) => {
		// //   return { text: item.name, value: item.id.toString() };
		// // })}
		// items={
		// 	languages
		// 		? languages.map((item) => {
		// 				return { text: item.name, value: item.id.toString() };
		// 			})
		// 		: []
		// }
		// onClickCheckbox={filters.setSelectedLanguages}
		// selected={filters.selectedLanguages}
		// name="languages"
		// />
	)
}