import * as React from 'react';

// it's technically not correct since this descripts props the component
// sees not just the one available to the user. We're abusing this to provide
// some concrete documentation for `key` regarding this component
export interface SnackBarProps {
	/**
	 * Some hints about why this is useful
	 */
	id?: string;
	/**
	 * some prop that is inherited which we don't care about here
	 */
	onChange?: () => void;
}

export function Snackbar(props: SnackBarProps) {
	return <div {...props} />;
}

// here we don't care about `id`
export function SomeOtherComponent(props: { id?: string }) {
	return <div {...props} />;
}
