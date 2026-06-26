import get_max_events_count from "@code/ScheduleProblem";

test("schedule events problem", function () {
    
    const inOrderOverlappingSchedule = [{
        start: 60,
        end: 150
    }, {
        start: 150,
        end: 210
    }, {
        start: 180,
        end: 240
    }, {
        start: 300,
        end: 360
    }];
    const inOrderNonOverlappingSchedule = [{
        start: 101,
        end: 201
    }, {
        start: 201,
        end: 251
    }, {
        start: 301,
        end: 351
    }];
    const outOfOrderOverlappedSchedule = [{
        start: 300,
        end: 360
    },{
        start: 60,
        end: 150
    }, {
        start: 150,
        end: 210
    }, {
        start: 180,
        end: 240
    }];
    const outOfOOrderWithContainedChildEventsOverlappedSchedule = [{
        start: 300,
        end: 600
    }, {
        start: 600,
        end: 800
    }, {
        start: 1,
        end: 100
    },{
        start: 50,
        end: 500
    }, {
        start: 60,
        end: 80
    }, {
        start: 90,
        end: 100
    }, {
        start: 700,
        end: 750
    }, {
        start: 750,
        end: 900
    }];
    const containedScheduled  = [{
        start: 10,
        end: 1000,
    }, {
        start: 20,
        end: 45,
    }, {
        start: 40,
        end: 50,
    }];
    expect(get_max_events_count(inOrderOverlappingSchedule)).toEqual(3);
    expect(get_max_events_count(inOrderNonOverlappingSchedule)).toEqual(3);
    expect(get_max_events_count(outOfOrderOverlappedSchedule)).toEqual(3);
    expect(get_max_events_count(outOfOOrderWithContainedChildEventsOverlappedSchedule)).toEqual(5);
    expect(get_max_events_count(containedScheduled)).toEqual(1);
});
