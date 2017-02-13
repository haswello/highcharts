$(function () {

    var today = new Date(),
        day = 1000 * 60 * 60 * 24;

    // Set to 00:00:00:000 today
    today.setUTCHours(0);
    today.setUTCMinutes(0);
    today.setUTCSeconds(0);
    today.setUTCMilliseconds(0);


    // THE CHART
    Highcharts.ganttChart('container', {
        title: {
            text: 'Gantt Chart'
        },
        xAxis: {
            min: today.getTime() - (2 * day),
            max: today.getTime() + (32 * day)
        },
        series: [{
            name: 'Project 1',
            data: [{
                taskName: 'Planning',
                id: 'planning',
                start: today.getTime(),
                end: today.getTime() + (20 * day),
                y: 0
            }, {
                taskName: 'Requirements',
                id: 'requirements',
                parent: 'planning',
                start: today.getTime(),
                end: today.getTime() + (5 * day),
                y: 1
            }, {
                taskName: 'Design',
                id: 'design',
                dependency: 'requirements',
                parent: 'planning',
                start: today.getTime() + (3 * day),
                end: today.getTime() + (20 * day),
                y: 2
            }, {
                taskName: 'Layout',
                id: 'layout',
                parent: 'design',
                start: today.getTime() + (3 * day),
                end: today.getTime() + (10 * day),
                y: 3
            }, {
                taskName: 'Graphics',
                parent: 'design',
                dependency: 'layout',
                start: today.getTime() + (10 * day),
                end: today.getTime() + (20 * day),
                y: 4
            }, {
                taskName: 'Develop',
                id: 'develop',
                start: today.getTime() + (5 * day),
                end: today.getTime() + (30 * day),
                y: 5
            }, {
                taskName: 'Create unit tests',
                id: 'unit_tests',
                dependency: 'requirements',
                parent: 'develop',
                start: today.getTime() + (5 * day),
                end: today.getTime() + (8 * day),
                y: 6
            }, {
                taskName: 'Implement',
                id: 'implement',
                dependency: 'unit_tests',
                parent: 'develop',
                start: today.getTime() + (8 * day),
                end: today.getTime() + (30 * day),
                y: 7
            }]
        }]
    });
});