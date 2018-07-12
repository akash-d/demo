$(".background").click(function(){
   $(".query-box").addClass("display");
});
var chartData = generateChartData();

var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "marginRight": 10,
    "hideCredits":true, 
    "dataProvider": chartData,
    "valueAxes": [{
        "position": "left",
    }],
    "graphs": [{
        "id": "g1",
        "valueField": "visits",
         
    }],
    "chartCursor": {
        "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
        "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "mm",
        "parseDates": true
    },
    "addClassNames": true,
   
});



// generate some random data, quite different range
function generateChartData() {
    var chartData = [];
    // current date
    var firstDate = new Date();
    // now set 500 minutes back
    // firstDate.setMinutes(firstDate.getDate() - 1000);

    // and generate 500 data items
    var visits = 10;
    for (var i = 0; i < 10; i++) {
        var newDate = new Date(firstDate);
        // each time we add one minute
        newDate.setMinutes(newDate.getMinutes() + i);
        // some random number
        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*5);
        // add data item to the array
        chartData.push({
            date: newDate,
            visits: visits
        });
    }
    return chartData;
}

AmCharts.makeChart("chartdiv1",
    {
        "type": "serial",
        "categoryField": "category",
        "startDuration": 0,
        "hideCredits":true,
        "theme": "light",
        "categoryAxis": {
            "gridPosition": "start",
        },
        "trendLines": [],
        "graphs": [
            {
                "fillAlphas": 0.7,
                "id": "AmGraph-1",
                "valueField": "column-1"
            },
           
        ],
        "addClassNames": true,
        
        "dataProvider": [
            {
                "category": "       ",
                "column-1": 8
            },
            {
                "category": " ",
                "column-1": 6
            },
            {
                "category": " ",
                "column-1": 2
            },
            {
                "category": " ",
                "column-1": 1
            },
            {
                "category": " ",
                "column-1": 2
            },
            {
                "category": " ",
                "column-1": 3
            },
            {
                "category": " ",
                "column-1": 6
            },
            {
                "category": " ",
                "column-1": 2
            }
        ]
    }
);
