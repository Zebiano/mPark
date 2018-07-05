var listParks = []
var myPark = []
$(document).ready(function() {

    var parkName = $("#parkChartSearch")
    var datalist = $("#json-datalist")

    $.ajax({
        type: 'POST',
        url: '/admin/getListParks',
        success: function(data) {
            // Prepares a beautiful table to show a list of the users
            listParks = data;
            for (var i = 0; i < data.length; i++) {
                $(datalist).append("<option value='" + data[i].name + "'>" + data[i].name + "</option>")

            };


            // Load the Visualization API and the corechart package.
            google.charts.load("current", { packages: ["corechart"] });

            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);

            // Callback that creates and populates a data table,
            // instantiates the pie chart, passes in the data and
            // draws it.
            function drawChart() {
                listParks = data
                //console.log(listParks)
                // Create the data table.
                var table = google.visualization.arrayToDataTable([
                    ['Places', 'Places Available', 'Places Ocupied', { role: 'annotation' }],
                    [data[0].name, data[0].placesFreeTotal, data[0].placesTotal - data[0].placesFreeTotal / data[0].placesTotal, ''],
                    [data[1].name, data[1].placesFreeTotal, data[1].placesTotal - data[1].placesFreeTotal, ''],
                    [data[2].name, data[2].placesFreeTotal, data[2].placesTotal - data[2].placesFreeTotal, ''],
                ]);

                var view = new google.visualization.DataView(table);
                view.setColumns([0, 1,
                    {
                        calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation"
                    },
                    2
                ]);

                // Set chart options
                var options = {
                    isStacked: true,
                    width: screen.width,
                    height: 400,
                    legend: { position: 'top', maxLines: 3 },
                    bar: { groupWidth: '75%' },
                };



                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
                chart.draw(view, options);
            }

        }
    });

})

function selectPark() {

    var parkName = $("#parkChartSearch").val()
    $("#backParkChart").css("display", "block")
    $("#backMain").css("display", "none")


    //console.log(parkName)

    for (var i = 0; i < listParks.length; i++) {
        if (parkName == listParks[i].name) {
            myPark = [];
            myPark.push(listParks[i])
            //console.log((myPark))
            break;
        }
    }

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(newChart);

    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(newChart);


    function newChart() {

        $("#extra").css("display", "block");
        // Grafico da lotaçao atual
        // Valores do grafico
        var currentLot = google.visualization.arrayToDataTable([
            ['Place Type', 'Total'],
            ['Available', myPark[0].placesFreeTotal],
            ['Ocupied', myPark[0].placesTotal - myPark[0].placesFreeTotal],
        ]);
        //Costumização do grafico
        var optionsCL = {
            title: myPark[0].name + " - Current Lotation",
            colors: ['#72a8ff', '#d33030']
        };

        // Criar o grafico
        var chartCL = new google.visualization.PieChart(document.getElementById('chart_div'));
        // Desenhar Grafico
        chartCL.draw(currentLot, optionsCL);


        var barChartData = google.visualization.arrayToDataTable([
            ['Place Type', 'Total', 'Available', 'Ocupied'],
            ['Normal Places', myPark[0].placesNormal, myPark[0].placesFreeNormal, myPark[0].placesNormal - myPark[0].placesFreeNormal],
            ['Pregnant Places', myPark[0].placesPregnant, myPark[0].placesFreePregnant, myPark[0].placesPregnant - myPark[0].placesFreePregnant],
            ['Disabled Places', myPark[0].placesDisabled, myPark[0].placesFreeDisabled, myPark[0].placesDisabled - myPark[0].placesFreeDisabled],
        ]);
        var barChartOptions = {
            chart: {
                title: myPark[0].name + " - Live Preview",
            }
        };

        var barchart = new google.charts.Bar(document.getElementById('chart_div2'));

        barchart.draw(barChartData, google.charts.Bar.convertOptions(barChartOptions));



        var totalPlaces = google.visualization.arrayToDataTable([
            ['Place Type', 'Total'],
            ['Normal Places', myPark[0].placesNormal],
            ['Pregnant Places', myPark[0].placesPregnant],
            ['Disabled Places', myPark[0].placesDisabled]
        ]);

        var options = {
            title: myPark[0].name + " - Number of Places",
        };

        var chartTotalPlaces = new google.visualization.PieChart(document.getElementById('chart_div3'));

        chartTotalPlaces.draw(totalPlaces, options);
    }

}


$("#backMain").click(function(e) {
    e.preventDefault();
    window.location.href = '/home'
});

$("#backParkChart").click(function(e) {
    e.preventDefault();
    window.location.reload()
    //(this).hide();
});
