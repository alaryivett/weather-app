import WeatherApi from '~/api/open-weather-api'
import CitiesApi from '~/assets/cities.json'

const getUrl = cityName => `${WeatherApi.URL}&q=${cityName}`

async function getCityWeather ($axios, city) {
	return await $axios.$get(getUrl(city))
}

function getCities (substr) {
	substr = substr.toLowerCase()

	let cities = CitiesApi.map(city => city.city)
	cities = cities.filter(city => city.toLowerCase().indexOf(substr) === 0)

	return cities.sort()
}

export default {
	getCityWeather,
	getCities
}
