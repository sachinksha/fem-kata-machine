function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    i++;
    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
}

function quick_sort_helper(arr: number[], low: number, high: number): void {
    if (low < high) {
        const pi = partition(arr, low, high);
        quick_sort_helper(arr, low, pi - 1);
        quick_sort_helper(arr, pi + 1, high);
    }
}

export default function quick_sort(arr: number[]): void {
    quick_sort_helper(arr, 0, arr.length - 1);
}
