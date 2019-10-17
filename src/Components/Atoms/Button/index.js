import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = props => {
	const { children, secondary, disabled } = props;

	const getClass = () => {
		return secondary ? 'secondary' : 'primary'
	}

	return (
		<button type="button" class={getClass()} disabled={disabled}>{ children }</button>
	)
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	secondary: PropTypes.bool,
	disabled: PropTypes.bool,
}

Button.defaultProps = {
	secondary: false,
	disabled: false
}

export default Button