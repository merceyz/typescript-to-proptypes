import * as React from 'react';
import PropTypes from 'prop-types';
function Foo(props) {
	const { Component } = props;
	return <Component />;
}

Foo.propTypes = {
	Component: PropTypes.func.isRequired,
};

export default Foo;
