function walk_post_order(node:BinaryNode<Number> | null, path:number[]):number[] {
    if(!node)
    {
        return path;
    }
    walk_post_order(node.left, path);
    walk_post_order(node.right, path);
    path.push(node.value as number);
    return path as number[];
}
export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk_post_order(head, [] as number[]);
}
