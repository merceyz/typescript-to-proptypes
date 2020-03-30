import { Node } from '../nodes/baseNodes';

const typeString = 'DOMElementNode';
type ElementType = 'Element' | 'HTMLElement';

interface DOMElementNode extends Node {
	elementType: ElementType;
	optional: boolean;
}

export function DOMElementNode(
	elementType: ElementType,
	optional: boolean = false
): DOMElementNode {
	return {
		type: typeString,
		elementType,
		optional,
	};
}

export function isDOMElementNode(node: Node): node is DOMElementNode {
	return node.type === typeString;
}
