function walk_pre_order(node:BinaryNode<Number> | null, path:number[]):number[] {
    if(!node)
    {
        return path;
    }
    path.push(node.value as number);
    walk_pre_order(node.left, path);
    walk_pre_order(node.right, path);
    return path as number[];
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk_pre_order(head, [] as number[]);
}
