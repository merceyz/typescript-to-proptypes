const path = require('path');

module.exports = {
	testEnvironment: 'node',
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				packageJson: path.join(__dirname, 'package.json'),
			},
		],
	},
	testRegex: `test/index.test.ts$`,
	coveragePathIgnorePatterns: ['/node_modules/', '/.pnp.cjs'],
};
