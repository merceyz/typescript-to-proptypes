import * as React from 'react';
import PropTypes from 'prop-types';

function Hidden(props) {
	const { only } = props;

	return <div hidden={only !== 'xs'} />;
}

Hidden.propTypes = {
	only: PropTypes.oneOfType([
		PropTypes.oneOf(['xs', 'md', 'xl']),
		PropTypes.arrayOf(PropTypes.oneOf(['xs', 'md', 'xl'])),
	]),
};

export default Hidden;
