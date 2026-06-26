/**
 * Problem statement:
 * Given a list of events marked by (n1, n2) as start and end time of an event.
 * n1 and n2 are numbers between 0 to 1440. These numbers are denoting time in minutes.
 * Event constraints:
 * no two events start at the same time
 * events are spread as 24 hrs x 60 mins = 1440 mins
 * all events are for the same day
 * 0 <= start <= end <=1440
 * 
 * Solution: Return the max number of events that can be scheduled without an overlap with another event as an integer
 * Edge case: if all events are overlapping each other, return 1
 * 
 * Examples:
 * example 1: given events (60, 150), (150, 210), (180, 240), (300, 360)
 * response should be 3. since events (150, 210) and (180, 240) are overlapping. schedule (60, 150), (150, 210) and (300, 360)
 * 
 * example2: given events (101, 201), (201, 251), (301, 351)
 * response should be 3. since all events are non-overlapping
 *
 * example 3: given events (300, 600), (600, 800), (1, 100), (50, 500), (60, 80), (90, 100), (700, 750), (750, 900)
 * response should be 5. schedule events (60, 80), (90, 100), (300, 600), (700, 750) and (750, 900).
 * 
 * example 4: given events (10, 1000), (20, 45), (40, 50)
 * response should be 1. since all events are overlapping. schedule event (10, 1000).
 * 
 */


function sortByEndTime(events: Event[]): Event[] {
    return [...events].sort((a, b) => a.end - b.end);
}

export type Event = {
    start: number;
    end: number;
};

// Time Complexity: O(n log n) — dominated by sorting.
export default function schedule(events: Event[]): number {
    if (events.length === 0) return 0;

    // Create a copy and sort by ending time (greedy choice)
    const sorted = sortByEndTime(events);

    let count = 0;
    let lastEnd = -1;

    for (const e of sorted) {
        if (e.start >= lastEnd) {
            count++;
            lastEnd = e.end;
        }
    }

    return count;
}