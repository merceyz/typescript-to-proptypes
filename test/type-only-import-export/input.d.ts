// TS 3.8 syntax
import type { Variant } from './external';

type Variant = 'standard' | 'filled' | 'outlined';

interface Props {
	variant: Variant;
	isActive?: boolean;
}

declare const Input: ({ variant, isActive }: Props) => JSX.Element;

export default Input;
