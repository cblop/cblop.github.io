function makeHums(data) {
    var ctx = document.getElementById("humidity2014");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            title: {
                text: "Humidity in 2014",
                display: true
            },
            legend: {
                display: false
            },
            tooltips: {
                displayColors: false,
                callbacks: {
                    label: function(tooltipItem, data) {
                        return data.datasets[0].data[tooltipItem.index];
                    }
                }
            }
        }
    });
}

function makeGas(data) {
    var ctx = document.getElementById("gas2015");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            title: {
                text: "Gas in 2015",
                display: true
            },
            legend: {
                display: false
            },
            tooltips: {
                displayColors: false,
                callbacks: {
                    label: function(tooltipItem, data) {
                        return data.datasets[0].data[tooltipItem.index];
                    }
                }
            }
        }
    });
}

function getData() {
    $.getJSON("./json/humidity2014.json", function(d)
              {
                  makeHums(d);
              });
    $.getJSON("./json/gas2015.json", function(d)
              {
                  makeGas(d);
              });
}

$(document).ready(function(){
    getData();
});
