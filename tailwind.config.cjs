/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'display': ['"Lexend Mega"', ...defaultTheme.fontFamily.sans],
			},
			boxShadow: {
				sm: '2px 2px #000',
				DEFAULT: '4px 4px #000',
				lg: '6px 6px #000',
				xl: '8px 8px #000',
				'2xl': '16px 16px #000',
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.black'),
						'--tw-prose-headings': theme('colors.black'),
						'--tw-prose-lead': theme('colors.black'),
						'--tw-prose-links': theme('colors.black'),
						'--tw-prose-bold': theme('colors.black'),
						'--tw-prose-counters': theme('colors.black'),
						'--tw-prose-bullets': theme('colors.black'),
						'--tw-prose-hr': theme('colors.black'),
						'--tw-prose-quotes': theme('colors.black'),
						'--tw-prose-quote-borders': theme('colors.black'),
						'--tw-prose-captions': theme('colors.black'),
						'--tw-prose-code': theme('colors.black'),
						'--tw-prose-pre-code': theme('colors.black'),
						'--tw-prose-pre-bg': theme('colors.black'),
						'--tw-prose-th-borders': theme('colors.black'),
						'--tw-prose-td-borders': theme('colors.black'),
						'--tw-prose-invert-body': theme('colors.white'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.white'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.white'),
						'--tw-prose-invert-bullets': theme('colors.white'),
						'--tw-prose-invert-hr': theme('colors.white'),
						'--tw-prose-invert-quotes': theme('colors.white'),
						'--tw-prose-invert-quote-borders': theme('colors.white'),
						'--tw-prose-invert-captions': theme('colors.white'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.white'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.white'),
						'--tw-prose-invert-td-borders': theme('colors.white'),
					},
				},
			})
		}
	},
	plugins: [require('@tailwindcss/typography'),],
}
