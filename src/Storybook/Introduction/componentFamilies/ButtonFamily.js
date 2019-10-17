import React from 'react';
import Button from '../../../Components/Atoms/Button'
import SbWrapper from '../../SbHelpers/Wrapper';

const ButtonFamily = () => {
	return(
		<SbWrapper>
			<h2>Buttons</h2>
			<Button>This is a button</Button>
			<label>Primary button</label>
			<Button secondary>This is a button</Button>
			<label>Secondary button</label>
			<Button disabled>This is a button</Button>
			<label>Disabled button</label>
		</SbWrapper>
	)
}

export default ButtonFamily