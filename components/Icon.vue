<script>
export default {
	props: {
		// available names: logo, arrow, bookmark
		iconName: {
			type: String,
			default: ''
		}
	}
}
</script>

<template>
	<svg v-if="iconName === 'logo'" width="30" height="30" viewBox="20 16 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="28.3165" cy="26.7704" r="5.34212" fill="url(#paint0_radial_5824_523)"/>
		<g opacity="0.67" filter="url(#filter0_f_5824_523)">
		<path d="M39.6346 27.4885C43.2124 30.7174 51.6084 34.1413 48.3795 37.7191C45.1506 41.2968 26.6949 51.517 19.0105 47.5666C15.4328 44.3377 22.2159 33.9411 25.4448 30.3633C28.6737 26.7855 36.0568 24.2596 39.6346 27.4885Z" fill="url(#paint1_linear_5824_523)" fill-opacity="0.3"/>
		</g>
		<g filter="url(#filter1_ii_5824_523)">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M34.0979 41.4326V41.4329H27.0729C23.5762 41.4329 20.7416 38.5983 20.7416 35.1017C20.7416 31.605 23.5762 28.7704 27.0729 28.7704H27.4198C28.647 28.7704 29.797 29.1015 30.7852 29.6792C32.0698 25.8731 35.6692 23.1328 39.9087 23.1328H40.3857C45.4391 23.1328 49.5356 27.2293 49.5356 32.2827C49.5356 37.336 45.4391 41.4326 40.3857 41.4326H34.0979Z" fill="white"/>
		</g>
		<defs>
		<filter id="filter0_f_5824_523" x="-19.881" y="-11.8745" width="106.862" height="98.2113" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
		<feFlood flood-opacity="0" result="BackgroundImageFix"/>
		<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
		<feGaussianBlur stdDeviation="18.9384" result="effect1_foregroundBlur_5824_523"/>
		</filter>
		<filter id="filter1_ii_5824_523" x="5.59088" y="10.5071" width="50.6784" height="40.1846" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
		<feFlood flood-opacity="0" result="BackgroundImageFix"/>
		<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
		<feOffset dx="6.73367" dy="-12.6256"/>
		<feGaussianBlur stdDeviation="12.6256"/>
		<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
		<feBlend mode="normal" in2="shape" result="effect1_innerShadow_5824_523"/>
		<feOffset dx="-15.1508" dy="9.2588"/>
		<feGaussianBlur stdDeviation="12.6256"/>
		<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
		<feBlend mode="normal" in2="effect1_innerShadow_5824_523" result="effect2_innerShadow_5824_523"/>
		</filter>
		<radialGradient id="paint0_radial_5824_523" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.4421 23.8584) rotate(132.136) scale(11.1308 11.1308)">
		<stop stop-color="#FFF72C"/>
		<stop offset="1" stop-color="#DF7800"/>
		</radialGradient>
		<linearGradient id="paint1_linear_5824_523" x1="22.8101" y1="49.1486" x2="43.5919" y2="25.826" gradientUnits="userSpaceOnUse">
		<stop stop-color="#254659"/>
		<stop offset="1" stop-color="#023553"/>
		</linearGradient>
		</defs>
	</svg>

	<svg v-else-if="iconName === 'arrow'" width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M3.60008 0.699999C3.76576 0.479085 4.07916 0.434313 4.30008 0.599999L7.90008 3.3C8.12099 3.46568 8.16576 3.77908 8.00008 4C7.83439 4.22091 7.52099 4.26568 7.30008 4.1L4.69332 2.14493C7.69859 18.5076 22.9713 26.4042 35.909 24.0084L36.0911 24.9916C22.6497 27.4808 6.77066 19.2626 3.69429 2.24105L1.70008 4.9C1.53439 5.12091 1.22099 5.16568 1.00008 5C0.779164 4.83431 0.734393 4.52091 0.900078 4.3L3.60008 0.699999Z" fill="#8A91AB"/>
	</svg>

	<svg v-else-if="iconName === 'bookmark'" width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.333252 4.50007C0.333252 3.39498 0.742973 2.33516 1.47228 1.55374C2.20159 0.77233 3.19074 0.333336 4.22214 0.333336L19.7777 0.333336C20.8091 0.333336 21.7983 0.77233 22.5276 1.55374C23.2569 2.33516 23.6666 3.39498 23.6666 4.50007V32.6255C23.6665 32.8139 23.6187 32.9988 23.5283 33.1604C23.4379 33.3221 23.3083 33.4544 23.1533 33.5433C22.9982 33.6323 22.8236 33.6745 22.6479 33.6655C22.4723 33.6565 22.3022 33.5966 22.1558 33.4922L11.9999 27.6275L1.84409 33.4922C1.69768 33.5966 1.52759 33.6565 1.35193 33.6655C1.17627 33.6745 1.00162 33.6323 0.846584 33.5433C0.691547 33.4544 0.561927 33.3221 0.471529 33.1604C0.381132 32.9988 0.333343 32.8139 0.333252 32.6255V4.50007ZM4.22214 2.4167C3.70644 2.4167 3.21187 2.6362 2.84721 3.02691C2.48256 3.41761 2.2777 3.94753 2.2777 4.50007V30.6797L11.4613 25.5087C11.6209 25.395 11.8083 25.3343 11.9999 25.3343C12.1916 25.3343 12.379 25.395 12.5385 25.5087L21.7221 30.6797V4.50007C21.7221 3.94753 21.5173 3.41761 21.1526 3.02691C20.788 2.6362 20.2934 2.4167 19.7777 2.4167H4.22214Z" fill="#8A91AB"/>
	</svg>
</template>
