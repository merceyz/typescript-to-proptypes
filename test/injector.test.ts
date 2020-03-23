import * as ttp from '../src';

it('recognizes string literals in property signature name', () => {
	const proptypes = {
		body: [
			{
				name: 'Dialog',
				type: 'ComponentNode',
				types: [
					{
						type: 'PropTypeNode',
						filenames: new Set<string>(),
						jsDoc: 'The id(s) of the element(s) that describe the dialog.',
						name: 'aria-describedby',
						propType: {
							type: 'StringNode',
						},
					},
				],
			},
		],
		type: 'ProgramNode',
	};
	const jsContent = `
	export default function Dialog(props) {
		const { 'aria-describedby': ariaDescribedby } = props;
		return null;
	}
`;

	const result = ttp.inject(proptypes, jsContent);

	expect(result).toMatchInlineSnapshot(`
		"import PropTypes from 'prop-types';
		function Dialog(props) {
		  const { 'aria-describedby': ariaDescribedby } = props;
		  return null;
		}

		Dialog.propTypes = {

		/**
		* The id(s) of the element(s) that describe the dialog.
		*/
		\\"aria-describedby\\": PropTypes.string.isRequired,
		}

		export default Dialog;"
	`);
});
