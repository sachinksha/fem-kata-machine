function walk_in_order(node:BinaryNode<Number> | null, path:number[]):number[] {
    if(!node)
    {
        return path;
    }
    walk_in_order(node.left, path);
    path.push(node.value as number);
    walk_in_order(node.right, path);
    return path as number[];
}
export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk_in_order(head, [] as number[]);
}
