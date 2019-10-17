import React from 'react'
import ButtonFamily from '../componentFamilies/ButtonFamily'
import CardFamily from '../componentFamilies/CardFamily'
import HeadingFamily from '../componentFamilies/HeadingFamily'

// export default {
// 	title : 'Introduction'
// }

const Styleguide = () => {

	const families = [
		HeadingFamily,
		ButtonFamily,
		CardFamily
	]

	return(
		<div class="wrapper wrapper__page">
			{families.map( (Family, i) => (
				<Family key={`family=${i}`} />
			))}
		</div>
	)
}

export default Styleguide