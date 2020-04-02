import React from 'react';
import PropTypes from 'prop-types';

function Component(props) {
	const { value } = props;
	return <div>{value}</div>;
}

Component.propTypes = {
	value: PropTypes.any.isRequired,
};

const someValidator = () => new Error();

export default Component;
