export default {
	target: 'static',
	server: {
		port: 3000,
		host: '0.0.0.0'
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'WeatherCheck',
		htmlAttrs: {
			lang: 'ru'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	css: [
		'~static/styles/styles.sass'
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/style-resources'
	],

	styleResources: {
		sass: [
			'~assets/_variables.sass'
		]
	},


	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extend (config, ctx) {
			// You can extend webpack config here
			config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'
		}
	}
}
