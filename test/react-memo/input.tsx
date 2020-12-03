import * as React from 'react';

type Props = {
	Component: React.MemoExoticComponent<any>;
};

export default function Foo(props: Props) {
	const { Component } = props;
	return <Component />;
}
