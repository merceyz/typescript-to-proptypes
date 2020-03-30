import { TestOptions } from '../types';

const options: TestOptions = {
	parser: {
		shouldResolveObject({ name }) {
			if (name.endsWith('Props')) {
				return false;
			}
		},
	},
	injector: {
		includeJSDoc: false,
		comment: 'Proptypes generated automatically',
	},
};

export default options;
