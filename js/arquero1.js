var lineChart = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Test rate over time",
    "width": "container",
    "height": 250,
    "config": {
        "background": "#FFFFFF",
        "axisX": {
            "grid": false,
            "ticks": true,
            "labels": true
        },
        "axisY": {
            "domain": false,
            "ticks": false,
            "gridDash": [
                2
            ],
            "gridWidth": 1
        },
        "view": {
            "stroke": "transparent"
        }
    },
    "data": {
      "name": "lineData"
        },
    "layer": [
        {
            "mark": {
                "type": "line",
                "point": null,
                "tooltip": true,
                "interpolate": "natural",
                "strokeWidth": 2.5
            },
            "encoding": {
                "x": {
                    "field": "week_end_date",
                    "type": "temporal",
                    "title": ""
                },
                "y": {
                    "field": "CITY",
                    "type": "quantitative",
                    "title": null
                },
                "color": {
                    "value": "black"
                },
                "tooltip": [
                    {
                        "field": "CITY",
                        "title": "New York City"
                    },
                    {
                        "field": "week_end_date",
                        "type": "temporal",
                        "title": "Week ending"
                    }
                ]
            }
        },
        {
            "mark": {
                "type": "line",
                "point": null,
                "tooltip": true,
                "interpolate": "natural",
                "strokeWidth": 1.5
            },
            "encoding": {
                "x": {
                    "field": "week_end_date",
                    "type": "temporal"
                },
                "y": {
                    "field": "BX",
                    "type": "quantitative"
                },
                "color": {
                    "value": "darkgrey"
                },
                "tooltip": [
                    {
                        "field": "BX",
                        "title": "The Bronx"
                    },
                    {
                        "field": "week_end_date",
                        "type": "temporal",
                        "title": "Week ending"
                    }
                ]
            }
        },
        {
            "mark": {
                "type": "line",
                "point": null,
                "tooltip": true,
                "interpolate": "natural",
                "strokeWidth": 3
            },
            "encoding": {
                "x": {
                    "field": "week_end_date",
                    "type": "temporal"
                },
                "y": {
                    "field": "UHF101",
                    "type": "quantitative"
                },
                "color": {
                    "value": "hotpink"
                },
                "tooltip": [
                    {
                        "field": "UHF101",
                        "title": "UHF 101"
                    },
                    {
                        "field": "week_end_date",
                        "type": "temporal",
                        "title": "Week ending"
                    }
                ]
            }
        }
    ]
};





    // arquero code to retrieve a CSV:
    var dt;
    var tableForVega;

    // Loads the csv as an arquero table
    aq.loadCSV('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/totals/group-cases-by-boro.csv').then(function(data) {
        dt = data;

        doStuffWithArquero()
    });

    function doStuffWithArquero() {
        // prints table to Console
        dt.print();

        // logs columnNames to table
        console.log(dt.columnNames())

        // record number of columns and rows:
        console.log("Number of columns: " + dt.numCols())
        console.log("Number of rows: " + dt.numRows());

        // dt.objects() creates an array of flat objects, useful for charting. This gets us to our file we would ordinarily use.
        tableForVega = dt.objects();



        vegaEmbed('#vis2', lineChart).then(res =>
            res.view
                .insert('lineData', tableForVega)
                .run()
            );

    }








