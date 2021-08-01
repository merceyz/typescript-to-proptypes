import * as React from 'react';
import PropTypes from 'prop-types';
function Foo(props) {
	const { MemoComponent, Component, OptionalComponent, OptionalMemoComponent } = props;
	return <MemoComponent />;
}

Foo.propTypes = {
	Component: PropTypes.elementType.isRequired,
	MemoComponent: PropTypes.elementType.isRequired,
	OptionalComponent: PropTypes.elementType,
	OptionalMemoComponent: PropTypes.elementType,
};

export default Foo;
