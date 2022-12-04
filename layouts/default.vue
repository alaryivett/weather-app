<template lang="pug">
.wrapper
	header
		Icon(
			iconName='logo'
		)
		h1 {{ constants.messages.title }}
	nuxt
</template>

<script>
import constants from '~/constants/layouts/default'

export default {
	data () {
		return {
			constants
		}
	}
}
</script>

<style lang="sass">
.wrapper
	width: 100%
	height: 100vh
	background-color: #161B30
	header
		background-color: #2A2F45
		padding: 17px 23px
		display: flex
		align-items: center
		gap: 12px
		h1
			font-size: 16px
			font-family: 'SFPro700'
			color: white
			margin: 0
</style>
