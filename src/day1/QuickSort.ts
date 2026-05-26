function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;
    for (let i = lo; i < hi; i++) {
        if (arr[i] < pivot) {
            idx++;
            const temp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = temp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}

function qs(arr: number[], lo: number, hi: number): void {
    if (lo < hi) {
        const pi = partition(arr, lo, hi);
        qs(arr, lo, pi - 1);
        qs(arr, pi + 1, hi);
    }
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
