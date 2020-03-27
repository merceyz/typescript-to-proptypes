module.exports = {
	removeExistingPropTypes: true,
	reconcilePropTypes: (prop, previous, generated) => {
		const isCustomValidator = !previous.startsWith('PropTypes');

		if (isCustomValidator) {
			return previous;
		}
		return generated;
	},
};
