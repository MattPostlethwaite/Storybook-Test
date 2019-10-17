import React from 'react';
import Heading from '../../../Components/Atoms/Heading'
import SbWrapper from '../../SbHelpers/Wrapper';

const ButtonFamily = () => {
	return(
		<SbWrapper>
			<h2>Headings</h2>
			<Heading heading="A title" type="1"/>
			<label>Heading 1</label>
			<Heading heading="A title" type="2"/>
			<label>Heading 2</label>
			<Heading heading="A title" type="3"/>
			<label>Heading 3</label>
			<Heading heading="A title" type="4"/>
			<label>Heading 4</label>
			<Heading heading="A title" type="5"/>
			<label>Heading 5</label>
			<Heading heading="A title" type="6"/>
			<label>Heading 6</label>
		</SbWrapper>
	)
}

export default ButtonFamily