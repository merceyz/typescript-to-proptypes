import * as React from 'react';

type Breakpoint = 'xs' | 'md' | 'xl';

export interface Props {
	only?: Breakpoint | Breakpoint[];
}

export default function Hidden(props: Props): JSX.Element;
