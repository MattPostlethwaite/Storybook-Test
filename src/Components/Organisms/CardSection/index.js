import React from 'react'
import Card from '../../Molecules/Card'
import TextBlock from '../../Molecules/TextBlock'
import './CardSection.scss'

const CardSection = props => {
	const { heading, para, cardData } = props;
	return (
		<div class="CardSection">
			<TextBlock heading={heading} para={para} />
			<div class="cards">
				{
					cardData.map(card => (
						<Card title={card.title} content={card.content} buttonLabel={card.buttonLabel} />
						))
				}
			</div>
		</div>
	)
}

export default CardSection