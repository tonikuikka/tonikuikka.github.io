// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            title: '',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                { rel:'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
            ]
        }
    },
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts'
    ],
    css: ['~/assets/style/main.css'],
    i18n: {
		locales: [
			{ code: 'fi', iso: 'fi', name: 'Suomeksi', file: 'fi.yaml' },
			{ code: 'en', iso: 'en', name: 'In English', file: 'en.yaml' },
		],
        defaultLocale: 'en',
		strategy: 'prefix_and_default',
		langDir: 'lang',
		detectBrowserLanguage: false,
		compilation: {
			jit: false,
			strictMessage: false,
		},
		bundle: {
			runtimeOnly: true,
		}
	},
    googleFonts: {
        families: {
            'Roboto': true,
            'Aldrich': true,
            'Material Symbols Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200': true
        }
    }
})