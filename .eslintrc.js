module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				'vue/multi-word-component-names': 0
			}
		}
	],
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	plugins: [
	],
	// add your custom rules here
	rules: {
		'vue/html-indent': ['error', 'tab'],
		indent: [2, 'tab'],
		'no-tabs': 0
	}
}
