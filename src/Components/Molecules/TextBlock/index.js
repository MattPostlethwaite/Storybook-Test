import React from 'react'
import Heading from '../../Atoms/Heading'
import Para from '../../Atoms/Para'

const TextBlock = props => {
	const { heading, para } = props
	return (
		<div class="TextBlock">
			<Heading type="2">{heading}</Heading>
			<Para>{para}</Para>
		</div>
	)
}

export default TextBlock