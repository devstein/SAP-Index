
console.log(location.hostname)
//create S&P indexes chart
function    sp_performance_chart() {
    //var to catch any issues while getting data 
    var jqxhr_basi = $.get('data/sp_performance_values.csv', function (data) {
        var options = {
            //chart options 
            chart: {
                //set type of graph, where it renders
                type: 'line',
                renderTo: 'sp_performance_container'
            },
            //set title of graph
            title: {
                text: 'S&P 500/MarketAxess Investment Grade Corporate Bond Index',
                style: {
                    color: '#4D759E'
                },
                align: 'center'
            },
            //set xAxis title
            xAxis: {
                title: {
                    text: 'Date',
                    style: {
                        color: '#4D759E',
                        fontWeight: 'bold'
                    }
                }
            },
            //set yAxis info 
            yAxis: [{
                title: {
                    text: 'S&P 500/MarketAxess Index',
                    style: {
                        color: '#4D759E',
                        fontWeight: 'bold'
                    }
                },
                labels: {
                    //give y-axis labels commas for thousands place seperator
                    formatter: function () {
                        return Highcharts.numberFormat(this.value);
                    }
                }, 
                //set y-axis to the left side
                opposite: false,
                //set background grid line width
                gridLineWidth: 1,
                min: 0
            }],
            //stylize the tooltip 
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
                valueDecimals: 4
            },
            //enable and stylize the legend
            legend: {
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                borderWidth: 1,
                borderRadius: 5,
                itemDistance: 20,
                reversed: false
            },
            //set the starting range. 0-5. 5="All", 4="1yr", etc
            rangeSelector: {
                selected: 4,
                allButtonsEnabled: true
            },
            //set general plot options 
            plotOptions: {
                //make the number of points allowed uncapped
                series: {
                    turboThreshold: 0
                },
                area: {
                    stacking: 'normal',
                    lineWidth: 0
                }
            },
            //disable credits
            credits: {
                enabled: false
            },
            //make download as csv format correctly
            navigator: {
                series: {
                    includeInCSVExport: false
                }
            },
            //set name of chart downloads
            exporting: {
                filename: 'MarketAxess_S&P_500/MarketAxess_Investment_Grade_Corporate_Bond_true_value',
                //enable download icon
                enabled: true,
                //add image to download
                chartOptions: {
                    chart: {
                        events: {
                            load: function () {
                                this.renderer.image('http://www.marketaxess.com/images/marketaxess_logo2.gif', 90, 75, 300, 48).attr({
                                    opacity: 0.1
                                    }).add();
                            }
                        }
                    },
                    //remove scrollbar and navigator from downloaded image
                    scrollbar: {
                        enabled: false
                    },
                    navigator:{
                        enabled: false
                    }
                },
                //make download as csv format correctly
                csv: {
                    dateFormat: '%Y-%m-%d'
                }
            },
            //set graph colors
            colors: ['#002244', '#DBBB33', '#43C5F3', '#639741', '#357895'],
            //series to be filled by data 
            series: []
        };
        //names of labels in order of series. make sure they are the same as series header in data file
        var names = ['Par Value', 'True Value'];
        //get csv file, multiply by 100 (divide by .01) and populate chart
        readCSV(options, data, 1.0, names);

        var chart = new Highcharts.StockChart(options);

        //update range to make chart look nicer
        var extremes = chart.yAxis[0].getExtremes();
        chart.yAxis[0].setExtremes(extremes.dataMin - 10,extremes.dataMax + 10);

    })
        //catch and display any errors 
        .fail(function (jqxhr_sp, exception) {
           ajaxError(jqxhr_sp, exception, '#sp_performance_container');
    });

}

(function () {

    //set high level chart options for all charts
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    sp_performance_chart();
})();