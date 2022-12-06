<template lang="pug">
.main-page
	.main-page__input
		FormsSelectInput(
			:list='value'
			v-model='inputValue'
			@selectItem='selectCity'
			@input='input'
		)
	.main-page__help-description(v-if='!favorites.length')
		Icon(iconName='arrow')
		.main-page__help-description-text
			span {{ constants.messages.helpDescription.text }}
			span(@click='inputDefaultCity') {{ constants.messages.helpDescription.exampleCity }}
	.main-page__bookmark(v-if='!favorites.length')
		.main-page__bookmark-description {{ constants.messages.bookmarkDescription }}
		Icon(iconName='bookmark')
	.main-page__favorites(v-else)
		Favorites(
			:favorites='favorites'
			@selectFavorite='selectFavorite'
		)
</template>

<script>
import constants from './constants'

export default {
	props: {
		value: {
			type: Array,
			defaut () { return [] }
		}
	},
	data () {
		return {
			constants,
			citiesList: [],
			inputValue: '',
			favorites: []
		}
	},
	mounted () {
		this.favorites = localStorage.getItem('favorites') ? localStorage.getItem('favorites').split(',') : []
	},
	watch: {
		value (newValue) {
			this.cities = newValue
		},
		inputValue (newInputValue) {
			if (newInputValue.length > 2) {
				this.$emit('getCities', this.inputValue)
			} else {
				this.cities = []
			}
		}
	},
	methods: {
		inputDefaultCity () {
			this.inputValue = this.constants.messages.helpDescription.exampleCity
		},
		selectCity (cityName) {
			this.$emit('selectCity', cityName)
		},
		input (value) {
			this.inputValue = value
		},
		selectFavorite (city) {
			this.$emit('selectFavorite', city)
		}
	}
}
</script>

<style lang="sass">
.main-page
	padding-top: 80px
	display: flex
	flex-direction: column
	align-items: center
	@media(max-width: 510px)
		padding-left: 10px
		padding-right: 10px
	&__input
		display: flex
		justify-content: center
		height: 60px
	&__help-description
		display: flex
		padding-top: 27px
		&-text
			max-width: 170px
			text-align: center
			padding: 14px 41px 0 5px
			span:last-child
				color: $white
				border-bottom: 1px dashed $white
				cursor: pointer
	&__bookmark
		padding-top: 88px
		display: flex
		flex-direction: column
		align-items: center
		gap: 23px
		&-description
			max-width: 244px
			text-align: center
	&__favorites
		padding-top: 55px
</style>
