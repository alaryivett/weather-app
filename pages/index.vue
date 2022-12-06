<template lang="pug">
MainPage(
	v-if='!selectedCity'
	@getCities='getCities'
	@selectCity='selectCity'
	@selectFavorite='selectFavorite'
	v-model='citiesList'
)
City(
	v-else
	:city='selectedCity'
	@closeCity='closeCity'
)
</template>

<script>
import CitiesApi from '~/api/cities'
import WeatherApi from '~/api/weather'

export default {
	data () {
		return {
			citiesList: [],
			selectedCity: ''
		}
	},
	methods: {
		getCities (inputValue) {
			this.citiesList = CitiesApi.getCities(inputValue)
		},
		async selectCity (cityName) {
			const city = await WeatherApi.getCityWeather(this.$axios, cityName)

			this.citiesList = []
			this.selectedCity = city
		},
		selectFavorite (city) {
			this.selectedCity = city
		},
		closeCity () {
			this.selectedCity = ''
		}
	}
}
</script>
