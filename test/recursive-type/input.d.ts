interface TreeNode {
	id: number;
	label: string;
	children: TreeNode[];
}

export default function Tree(props: TreeNode): JSX.Element;
