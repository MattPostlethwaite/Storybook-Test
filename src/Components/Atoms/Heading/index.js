import React from 'react';
import './Heading.scss';

const Heading = props => {
	const { children, type } = props;

	if ( type === "1" ) {
		return <h1>{children}</h1>
	}
	if ( type === "2" ) {
		return <h2>{children}</h2>
	}
	if ( type === "3" ) {
		return <h3>{children}</h3>
	}
	if ( type === "4" ) {
		return <h4>{children}</h4>
	}
	if ( type === "5" ) {
		return <h5>{children}</h5>
	}
	if ( type === "6" ) {
		return <h6>{children}</h6>
	}
}

export default Heading;