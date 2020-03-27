import * as React from 'react';
import * as PropTypes from 'prop-types';
import { chainPropTypes } from 'some-utils-module';

function Component(props) {
	const { children } = props;
	return (
		<button>
			<span>{children}</span>
		</button>
	);
}

Component.propTypes = {
	children: PropTypes.node,
};

export default Component;
