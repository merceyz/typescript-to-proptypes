import * as React from 'react';
import PropTypes from 'prop-types';
const Grid = React.forwardRef(({ spacing }, ref) => {
	return <div>spacing: {spacing}</div>;
});

Grid.propTypes = {
	spacing: PropTypes.oneOf(['auto', 'initial', 1, 2, 3, 4, 5]),
};

export { Grid };
