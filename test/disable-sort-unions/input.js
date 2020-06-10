import * as React from 'react';

export default function Hidden(props) {
	const { only } = props;

	return <div hidden={only !== 'xs'} />;
}
