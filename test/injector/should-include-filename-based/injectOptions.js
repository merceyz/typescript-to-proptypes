const path = require('path');

module.exports = {
	includeUnusedProps: true,
	shouldInclude: ({ prop }) => {
		let isLocallyTyped = false;
		prop.filenames.forEach((filename) => {
			if (!path.relative(__dirname, filename).startsWith('..')) {
				isLocallyTyped = true;
			}
		});
		return isLocallyTyped;
	},
};
