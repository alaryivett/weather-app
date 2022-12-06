<template lang="pug">
.city-page
	.city-page__buttons
		.city-page__button(@click='closeCity')
			Icon(
				iconName='back'
			)
			span {{ constants.messages.back }}
		.city-page__button(@click='toggleBookmark')
			Icon(
				:iconName='isFavorites ? "filled-bookmark" : "blank-bookmark"'
			)
	.city-page__card
		h2.city-page__name {{ city.name }}

		.city-page__weather-description {{ city.description }}

		.city-page__weather
			.city-page__temperature {{ city.temperature }}
			Icon(
				:iconName='city.icon'
			)
		.city-page__pressure
			Icon(
				iconName='barometer'
			)
			span {{ city.pressure }}
		.city-page__sunset {{ constants.messages.sunset + city.sunset }}
</template>

<script>
import constants from './constants'

export default {
	props: {
		city: {
			type: Object,
			defaut () { return {} }
		}
	},
	data () {
		return {
			constants,
			isFavorites: false
		}
	},
	mounted () {
		this.setIsFavorites()
	},
	methods: {
		toggleBookmark () {
			let favorites = localStorage.getItem('favorites') ? localStorage.getItem('favorites').split(',') : []

			if (this.isFavorites) {
				favorites = favorites.filter(city => city !== this.city.name)

				localStorage.setItem('favorites', favorites)
			} else if (!this.isFavorites) {
				favorites.push(this.city.name)

				localStorage.setItem('favorites', favorites)
			} else {
				localStorage.setItem('favorites', this.city.name)
			}

			this.setIsFavorites()
		},
		closeCity () {
			this.$emit('closeCity')
		},
		setIsFavorites () {
			const favorites = localStorage.getItem('favorites') ? localStorage.getItem('favorites').split(',') : []

			if (favorites) {
				this.isFavorites = favorites.includes(this.city.name)
			} else {
				this.isFavorites = false
			}
		}
	}
}
</script>

<style lang="sass">
.city-page
	$city-page: &
	flex: 1
	background: radial-gradient(circle at top, #8A91AB -60%, transparent 70%)
	height: 100%
	padding: 27px 40px 30px
	@media(max-width: 510px)
		padding-left: 10px
		padding-right: 10px
	&__buttons
		display: flex
		justify-content: space-between
		#{$city-page}__button
			display: flex
			align-items: center
			cursor: pointer
			span
				padding-left: 19px
				@media(max-width: 510px)
					display: none
			&:hover
				color: white
				path
					fill: $white
	&__card
		display: flex
		flex-direction: column
		align-items: center
		padding-top: 30px
		#{$city-page}__name
			font-family: $SFP400
			color: $white
			font-size: 56px
			margin: 0
			letter-spacing: 3px
			@media(max-width: 510px)
				font-size: 24px
		#{$city-page}__weather-description
			color: $white
			padding: 16px 0 40px
			@media(max-width: 510px)
				font-size: 14px
				padding: 14px 0 20px
		#{$city-page}__weather
			display: flex
			align-items: center
			@media(max-width: 510px)
				flex-direction: column
			#{$city-page}__temperature
				flex-basis: 50%
				text-align: right
				font-size: 130px
				font-family: $SFPBold
				color: $white
				background-image: linear-gradient($white 20%, $main 80%)
				-webkit-background-clip: text
				-webkit-text-fill-color: transparent
				@media(max-width: 530px)
					font-size: 120px
			svg
				flex-basis: 50%
				@media(max-width: 530px)
					height: 132px
					width: 132px
		#{$city-page}__pressure
			color: $white
			display: flex
			align-items: center
			gap: 10px
			padding-top: 65px
			@media(max-width: 510px)
				font-size: 14px
				padding-top: 40px
		#{$city-page}__sunset
			padding-top: 32px
			@media(max-width: 510px)
				font-size: 14px
</style>
