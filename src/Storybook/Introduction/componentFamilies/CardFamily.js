import React from 'react';
import Card from '../../../Components/Molecules/Card'
import SbWrapper from '../../SbHelpers/Wrapper';

const CardFamily = () => {
	return(
		<SbWrapper>
			<h2>Cards</h2>
			<Card title="Card title" content="This is the cards content" buttonLabel="Click Me!" />
		</SbWrapper>
	)
}

export default CardFamily