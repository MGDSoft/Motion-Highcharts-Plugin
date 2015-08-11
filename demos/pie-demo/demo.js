$(function () {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        timeline: {
            enabled: true,
            axisLabel: 'year',
            begin: 2005,
            end: 2009,
            // TODO add interval
            series: [0, 1], // The series which holds points to update
            updateInterval: 20,
            magnet: {
                type: 'both', // thumb / point / both
                round: 'floor', // ceil / floor / round
                smoothThumb: true, // defaults to true
                step: 0.01
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: "Brands",
            colorByPoint: true,
            data: [{
                name: "Microsoft Internet Explorer",
                data: [56.33, 57.23, 35.14, 25.65, 19.37]
            }, {
                name: "Chrome",
                data: [24.03, 28.05, 46.68, 52.49, 56.51],
                sliced: true,
                selected: true
            }, {
                name: "Firefox",
                data: [10.38, 9.53, 12.43, 15.63, 16.32]
            }, {
                name: "Safari",
                data: [4.77, 4.51, 5.32, 5.56, 6.76]
            }, {
                name: "Opera",
                data: [0.91, 0.53, 0.32, 0.23, 0.14]
            }, {
                name: "Proprietary or Undetectable",
                data: [0.2, 0.15, 0.11, 0.9, 0.9]
            }]
        }]
    });
});