<template lang="pug">
.select-input
	input.select-input__input(
		type='text'
		:placeholder='constants.messages.placeholder'
		@focusin='showSelect'
		@focusout='hideSelect'
	)
	SlideUpDown(
		class='select-input__select'
		:active='isSelectShow'
	)
		ul
			li(v-for='city in cities') {{ city }}
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'
import constants from '~/constants/components/select-input'

export default {
	components: {
		SlideUpDown
	},
	data () {
		return {
			constants,
			cities: ['Москва', 'Ижевск', 'Санкт-Петербург', 'Новосибирск', 'Казань', 'Астрахань'],
			isSelectShow: false
		}
	},
	methods: {
		showSelect () {
			this.isSelectShow = true
		},
		hideSelect () {
			this.isSelectShow = false
		}
	}
}
</script>

<style lang="sass">
.select-input
	position: absolute
	width: 510px
	overflow-x: hidden
	&__input
		width: 100%
		box-sizing: border-box
		background-color: $header
		border: 1px solid $header
		padding: 18px 20px 19px
		font-size: 16px
		caret-color: $main
		transition: border ease-out 0.5s
		&::placeholder
			color: $main
			font-family: 'SFPro400'
		&:focus
			outline: none
			border: 1px solid $select
	&__select
		margin-right: -17px
		ul
			max-height: 295px
			overflow-y: scroll
			width: 100%
			background-color: $select
			border-radius: 0 0 5px 5px
			li
				padding: 20px
				cursor: pointer
</style>
