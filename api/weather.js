const API_KEY = '1c504d4c5475ca3ae2d9b1ba372e8edc'
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&lang=ru&units=metric`

const emptyCityWeather = {
	description: '',
	temperature: '',
	pressure: '',
	sunset: '',
	icon: ''
}

function prepareDescription (description) {
	return description.replace(description[0], description[0].toUpperCase())
}

function convertPressure (hPa) {
	return Math.floor(hPa * 0.750062) + ' мм рт. ст.'
}

function convertSunsetTime (unix) {
	return new Date(unix * 1000).toLocaleTimeString().slice(0, 5)
}

function prepareTemperature (temperature) {
	return Math.floor(temperature) + '°'
}

function collectGetData (data) {
	return {
		description: prepareDescription(data.weather[0].description),
		temperature: prepareTemperature(data.main.temp),
		pressure: convertPressure(data.main.pressure),
		sunset: convertSunsetTime(data.sys.sunset),
		icon: data.weather[0].main
	}
}

async function getCityWeather ($axios, city) {
	const getUrl = cityName => `${URL}&q=${cityName}`

	const data = await $axios.$get(getUrl(city))

	return {
		name: city,
		...collectGetData(data)
	}
}

export default {
	emptyCityWeather,
	getCityWeather
}
