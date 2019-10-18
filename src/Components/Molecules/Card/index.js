import React from 'react'
import Heading from '../../Atoms/Heading'
import Button from '../../Atoms/Button'
import './Card.scss'

const Card = props => {
	const { title, content, buttonLabel } = props;
	return (
		<div class="card">
			<Heading type="1">{title}</Heading>
			<p>{content}</p>
			<Button>{buttonLabel}</Button>
		</div>
	)
}

export default Card