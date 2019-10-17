import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '.';

export default {
	title: 'Buttons'
}

export const button = props => {
	return(
		<Button label="Button" onClick={action('clicked')}>I'm a Button</Button>
	)
}