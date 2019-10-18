import React from 'react'
import CardSection from '.'

export default {
	title: 'Organism|Card Section'
}

export const CardSectionOne = () => {
	const data = [
		{
			title: "Card One",
			content: "This is card one.",
			buttonLabel: "Click Me",
		}
	]

	return <CardSection heading="Card Section - One card" para="Incididunt esse consequat eiusmod consectetur Lorem nisi. Ad Lorem id nulla mollit sint id sint magna culpa labore velit fugiat pariatur eiusmod. Magna consequat mollit non aliqua qui sit." cardData={data} />
}

export const CardSectionTwo = () => {
	const data = [
		{
			title: "Card One",
			content: "This is card one.",
			buttonLabel: "Click Me",
		},
		{
			title: "Card Two",
			content: "This is card two.",
			buttonLabel: "Click Me",
		}
	]

	return <CardSection heading="Card Section - Two cards" para="Incididunt esse consequat eiusmod consectetur Lorem nisi. Ad Lorem id nulla mollit sint id sint magna culpa labore velit fugiat pariatur eiusmod. Magna consequat mollit non aliqua qui sit." cardData={data} />
}
export const CardSectionThree = () => {
	const data = [
		{
			title: "Card One",
			content: "This is card one.",
			buttonLabel: "Click Me",
		},
		{
			title: "Card Two",
			content: "This is card two.",
			buttonLabel: "Click Me",
		},
		{
			title: "Card Three",
			content: "This is card three.",
			buttonLabel: "Click Me",
		},
	]

	return <CardSection heading="Card Section - Three cards" para="Incididunt esse consequat eiusmod consectetur Lorem nisi. Ad Lorem id nulla mollit sint id sint magna culpa labore velit fugiat pariatur eiusmod. Magna consequat mollit non aliqua qui sit." cardData={data} />
}