import * as React from 'react';

interface GridProps {
	spacing?: 'initial' | 1 | 2 | 3 | 4 | 5 | 'auto';
}

export const Grid = React.forwardRef(({ spacing }: GridProps, ref) => {
	return <div>spacing: {spacing}</div>;
});
