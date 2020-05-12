import * as React from 'react';
interface ButtonProps {
	variant?: string;
}

interface Component {
	(props: ButtonProps): JSX.Element;
	(props: { component: string } & ButtonProps): JSX.Element;
}

// a component using overloading and intersection of function signature
declare const ButtonBase: Component & ((props: { href: string } & ButtonProps) => JSX.Element);