export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q:(BinaryNode<number> | null | undefined) [] = [head];
    while(q.length) {
        const current = q.shift() as BinaryNode<number> | undefined | null;
        if(!current){
            continue;
        }
        if(current.value === needle) {
            return true;
        }
        if(current.left){
            q.push(current.left);
        }
        if(current.right) {
            q.push(current.right);
        }
    }
    return false;
}
