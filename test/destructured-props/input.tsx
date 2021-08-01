interface GridProps {
	spacing?: 'initial' | 1 | 2 | 3 | 4 | 5 | 'auto';
}

export default function Grid({ spacing }: GridProps) {
	return <div>spacing: {spacing}</div>;
}
