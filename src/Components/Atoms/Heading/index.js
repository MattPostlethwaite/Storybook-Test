import React from 'react';
import './Heading.scss';

const Heading = props => {
	const { heading, type } = props;

	if ( type === "1" ) {
		return <h1>{heading}</h1>
	}
	if ( type === "1" ) {
		return <h1>{heading}</h1>
	}
	if ( type === "2" ) {
		return <h2>{heading}</h2>
	}
	if ( type === "3" ) {
		return <h3>{heading}</h3>
	}
	if ( type === "4" ) {
		return <h4>{heading}</h4>
	}
	if ( type === "5" ) {
		return <h5>{heading}</h5>
	}
	if ( type === "6" ) {
		return <h6>{heading}</h6>
	}
}

export default Heading;