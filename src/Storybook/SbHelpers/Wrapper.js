import React from 'react';

const SbWrapper = props => {
	const { children } = props
	return(
		<div class="wrapper wrapper__component" style={{ backgroundColor: 'honeydew', padding: '20px' }}>
			{children}
		</div>
	)
}

export default SbWrapper