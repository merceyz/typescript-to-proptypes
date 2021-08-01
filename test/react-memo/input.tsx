import * as React from 'react';

type Props = {
	MemoComponent: React.MemoExoticComponent<any>;
	OptionalMemoComponent?: React.MemoExoticComponent<any>;
	Component: React.Component<any>;
	OptionalComponent?: React.Component<any>;
};

export default function Foo(props: Props) {
	const { MemoComponent, Component, OptionalComponent, OptionalMemoComponent } = props;
	return <MemoComponent />;
}
