import PropTypes from 'prop-types';
function Select(props) {
	const { value, variant } = props;
	return <div></div>;
}

Select.propTypes = {
	value: PropTypes.any.isRequired,
	variant: PropTypes.any.isRequired,
};

export default Select;
