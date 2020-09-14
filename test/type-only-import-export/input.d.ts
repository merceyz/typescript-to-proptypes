// TS 3.8 syntax
import type { Variant } from './external';

interface Props {
	variant: Variant;
	isActive?: boolean;
}

export default function Input(props: Props): JSX.Element;
