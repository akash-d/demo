//canvas chart
window.onload = function() {

    var areaChart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        axisX: {
            gridThickness: 0,
            valueFormatString: "hh:00",
            labelAngle: 0
        },

        data: [{
            type: "line",
            markerType: "none",
            dataPoints: [{
                    x: new Date(Date.UTC(2012, 01, 1, 1, 0)),
                    y: 0,
                    label: ""
                },
                {
                    x: new Date(Date.UTC(2012, 01, 1, 2, 0)),
                    y: 20,
                    label: ""
                },
                {
                    x: new Date(Date.UTC(2012, 01, 1, 3, 0)),
                    y: 15,
                    label: ""
                },
                {
                    x: new Date(Date.UTC(2012, 01, 1, 4, 0)),
                    y: 20,
                    label: ""
                },
                {
                    x: new Date(Date.UTC(2012, 01, 1, 5, 0)),
                    y: 10,
                    label: ""
                },
                {
                    x: new Date(Date.UTC(2012, 01, 1, 6, 0)),
                    y: 0,
                    label: ""
                },
                {
                    x: new Date(Date.UTC(2012, 01, 1, 7, 0)),
                    y: 30,
                    label: ""
                },
                {
                    x: new Date(Date.UTC(2012, 01, 1, 8, 0)),
                    y: 0,
                    label: ""
                },
            ]
        }]
    });
    areaChart.render();
    //chart1ends
    var queryChart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        axisX: {
            gridThickness: 0,
            valueFormatString: "hh:00",
            labelAngle: 0
        },
        axisY: {
            gridThickness: 0,
        },
        data: [{
            markerType: "none",
            type: "area",
            yValueFormatString: "#,##0.0mn",
            dataPoints: [{
                    x: new Date(2015, 02, 1),
                    y: 74.4,

                },
                {
                    x: new Date(2015, 05, 1),
                    y: 61.1,

                },
                {
                    x: new Date(2015, 08, 1),
                    y: 47.0,

                },
                {
                    x: new Date(2015, 11, 1),
                    y: 48.0,

                },
                {
                    x: new Date(2016, 02, 1),
                    y: 74.8,

                },
                {
                    x: new Date(2016, 05, 1),
                    y: 51.1,

                },
                {
                    x: new Date(2016, 08, 1),
                    y: 40.4,

                },
                {
                    x: new Date(2016, 11, 1),
                    y: 45.5,

                },


            ]
        }]
    });
    queryChart.render();
    //chart2ends
    var dps1 = [];
    var chart3 = new CanvasJS.Chart("chartContainer2", {
        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            dataPoints: dps1,
            lineColor: "#28c5d4",

        }]
    });

    var xVal1 = 0;
    var yVal1 = 100;
    var updateInterval1 = 2500;
    var dataLength1 = 50; // number of dataPoints visible at any point

    var updateChart1 = function(count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {
            yVal1 = yVal1 + Math.round(5 + Math.random() * (-5 - 5));
            dps1.push({
                x: xVal1,
                y: yVal1
            });
            xVal1++;
        }
        if (dps1.length > dataLength1) {
            dps1.shift();
        }
        chart3.render();
    };

    updateChart1(dataLength1);
    setInterval(function() {
        updateChart1()
    }, updateInterval1);
    //chart3ends
    var dps2 = [];
    var chart4 = new CanvasJS.Chart("chartContainer3", {

        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            dataPoints: dps2,
            lineColor: "#fc823f",
        }]
    });

    var xVal2 = 0;
    var yVal2 = 50;
    var updateInterval2 = 1500;
    var dataLength2 = 50; // number of dataPoints visible at any point

    var updateChart2 = function(count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {
            yVal2 = yVal2 + Math.round(5 + Math.random() * (-5 - 5));
            dps2.push({
                x: xVal2,
                y: yVal2
            });
            xVal2++;
        }
        if (dps2.length > dataLength2) {
            dps2.shift();
        }
        chart4.render();
    };

    updateChart2(dataLength2);
    setInterval(function() {
        updateChart2()
    }, updateInterval2);
    //chart4
    var dps = [];
    var chart5 = new CanvasJS.Chart("chartContainer4", {

        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            dataPoints: dps,
            lineColor: "#56cf1c",

        }]
    });

    var xVal = 0;
    var yVal = 2;
    var updateInterval = 1500;
    var dataLength = 50; // number of dataPoints visible at any point

    var updateChart = function(count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {
            // yVal +=0.1;
            dps.push({
                x: xVal,
                y: yVal
            });
            xVal++;
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart5.render();
    };

    updateChart(dataLength);
    setInterval(function() {
        updateChart()
    }, updateInterval);

    $('.primary-table tr').click(function() {
        $('.primary-table tr').removeClass('active');
        $(this).addClass('active');
    });

    var minHeight = window.innerHeight - 63;
    $('.section-padding').css('min-height', minHeight);
}