import React from 'react'
import Heading from '../../Atoms/Heading'
import Button from '../../Atoms/Button'
import './Card.scss'

const Card = props => {
	const { title, content, buttonLabel } = props;
	return (
		<div class="card">
			<Heading heading={title} type="1" />
			<p>{content}</p>
			<Button>{buttonLabel}</Button>
		</div>
	)
}

export default Card