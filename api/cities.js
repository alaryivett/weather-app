import citiesData from '~/assets/cities.json'

function getCities (substr) {
	substr = substr.toLowerCase()

	let cities = citiesData.map(city => city.city)
	cities = cities.filter(city => city.toLowerCase().indexOf(substr) === 0)

	return cities.sort()
}

export default {
	getCities
}
