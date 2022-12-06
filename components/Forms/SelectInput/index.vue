<template lang="pug">
.select-input(
	:class="{'select-input_rounded': isSelectShow && !!list.length}"
)
	input.select-input__input(
		v-model="inputValue"
		type='text'
		:placeholder='constants.messages.placeholder'
		@focusin='showSelect'
		@focusout='hideSelect'
	)
	SlideUpDown(
		class='select-input__select'
		:active='isSelectShow && !!list.length'
	)
		ul
			li(
				v-for='item in list'
				@click='selectItem(item)'
			)
				span {{ getSimilarPart(item) }}
				span {{ getDifferentPart(item) }}
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'
import constants from './constants'

export default {
	components: {
		SlideUpDown
	},
	props: {
		list: {
			type: Array,
			default () { return [] }
		},
		value: {
			type: String,
			default: ''
		}
	},
	data () {
		return {
			constants,
			inputValue: '',
			isSelectShow: true
		}
	},
	watch: {
		value (newValue) {
			this.$el.childNodes[0].focus()
			this.inputValue = newValue
		},
		inputValue (newInputValue) {
			this.$emit('input', newInputValue)
		}
	},
	methods: {
		showSelect () {
			this.isSelectShow = true
		},
		hideSelect () {
			this.isSelectShow = false
		},
		getSimilarPart (item) {
			return item.slice(0, this.value.length)
		},
		getDifferentPart (item) {
			return item.slice(this.value.length)
		},
		selectItem (item) {
			this.$emit('selectItem', item)
		}
	}
}
</script>

<style lang="sass">
.select-input
	position: absolute
	width: 510px
	overflow-x: hidden
	&_rounded
		border-radius: 0 0 5px 5px
	@media(max-width: 510px)
		width: 90%
	&__input
		width: 100%
		box-sizing: border-box
		background-color: $header
		border: 1px solid $header
		padding: 18px 20px 19px
		font-size: 16px
		caret-color: $main
		color: $white
		font-family: $SFP400
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
			li
				padding: 20px
				cursor: pointer
				span:first-child
					color: $white
</style>
