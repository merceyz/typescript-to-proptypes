import { TestOptions } from '../types';

const options: TestOptions = {
	injector: {
		removeExistingPropTypes: true,
		reconcilePropTypes: (prop, previous: any, generated) => {
			const isCustomValidator = previous !== undefined && !previous.startsWith('PropTypes');

			if (isCustomValidator) {
				return previous;
			}
			return generated;
		},
	},
};

export default options;
