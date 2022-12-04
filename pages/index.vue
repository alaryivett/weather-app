<template lang="pug">
.main-page
	.main-page__input
		SelectInput
	.main-page__help-description
		Icon(iconName='arrow')
		.main-page__help-description-text
			span {{ constants.messages.helpDescription.text }}
			span {{ constants.messages.helpDescription.exampleCity }}
	.main-page__bookmark
		.main-page__bookmark-description {{ constants.messages.bookmarkDescription }}
		Icon(iconName='bookmark')
</template>

<script>
import constants from '~/constants/pages/main'

export default {
	data () {
		return {
			constants
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
	&__input
		display: flex
		justify-content: center
	&__help-description
		display: flex
		padding-top: 87px
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
</style>
