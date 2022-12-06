<template lang="pug">
.favorites(
	:class="{'favorites_justify-center': favorites.length < 3}"
)
	.favorites__city-preview(
		v-for='city in cities'
		@click='selectFavorite(city)'
	)
		h3.favorites__city-name {{ city.name }}
		.favorites__city-temperature {{ city.temperature }}
		.favorites__weather-icon
			Icon(
				:iconName='city.icon'
			)
</template>

<script>
import WeatherApi from '~/api/weather'

export default {
	props: {
		favorites: {
			type: Array,
			default () { return [] }
		}
	},
	data () {
		return {
			cities: []
		}
	},
	mounted () {
		this.fetchFavorites()
	},
	methods: {
		async fetchFavorites () {
			await this.favorites.forEach(favorite => this.fetchCity(favorite))
		},
		async fetchCity (cityName) {
			const city = await WeatherApi.getCityWeather(this.$axios, cityName)
			this.cities.push(city)
		},
		selectFavorite (city) {
			this.$emit('selectFavorite', city)
		}
	}
}
</script>

<style lang="sass">
.favorites
	$favorites: &
	display: flex
	flex-wrap: wrap
	gap: 30px 35px
	height: 100%
	align-content: flex-start
	width: 880px
	@media(max-width: 880px)
		width: 100%
	@media(max-width: 510px)
		gap: 20px
	&_justify-center
		justify-content: center
	&__city-preview
		cursor: pointer
		background-color: $preview
		border-radius: 6px
		padding: 23px
		display: flex
		flex-direction: column
		align-items: center
		box-sizing: border-box
		flex-basis: calc((100% - 70px)/3)
		color: $white
		@media(max-width: 510px)
			flex-basis: calc((100% - 20px)/2)
		#{$favorites}__city-name
			font-size: 14px
			margin: 0
			font-weight: normal
		#{$favorites}__city-temperature
			font-size: 40px
			font-family: $SFP700
		#{$favorites}__weather-icon
			svg
				height: 78px
				width: 78px
</style>
