module.exports = {
	shouldInclude: ({ component, prop }) => {
		if (component.name === 'Snackbar' && prop.name === 'key') {
			return true;
		}
		return undefined;
	},
};
