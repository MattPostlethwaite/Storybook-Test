import React from 'react';
import Welcome from './Sections/Welcome'
import Styleguide from './Sections/Styleguide'

export default {
	title: 'Introduction'
}

export const welcome = () => (
	<Welcome />
)

export const styleguide = () => (
	<Styleguide />
)