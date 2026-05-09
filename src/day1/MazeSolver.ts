const directions = [
    { x: 0, y: -1 }, // up
    { x: 0, y: 1 },  // down
    { x: -1, y: 0 }, // left
    { x: 1, y: 0 },  // right
];
function walk (maze: string[], wall: string, current:Point, end: Point, seen: Boolean[][], path: Point[]): Boolean {
    // 1. base case
    // Off the map
    if (current.x < 0 || current.x >= maze[0].length || current.y < 0 || current.y >= maze.length) {
        return false;
    }
    // Wall
    if (maze[current.y][current.x] === wall) {
        return false;
    }
    // Already seen
    if (seen[current.y][current.x]) {
        return false;
    }
    // End
    if (current.x === end.x && current.y === end.y) {
        path.push(current);
        return true;
    }

    // 2. recursive case
    //pre
    seen[current.y][current.x] = true;
    path.push(current);
    //recurse
    for (let i=0; i<directions.length; i++) {
        const next = {
            x: current.x + directions[i].x,
            y: current.y + directions[i].y,
        }
        if (walk(maze, wall, next, end, seen, path)) {
            return true;
        }
    }
    //post
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    for(let i=0; i<maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    const path: Point[] = [];
    walk(maze, wall, start, end, seen, path);
    return path;
}
