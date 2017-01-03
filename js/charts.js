var ctx = document.getElementById("humidity2014");
$.getJSON("./json/humidity2014.json", function(d)
                     {
                         data = d;
                     });
// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July",
//              "August", "September", "October", "November", "December"],
//     datasets: [
//         {
//             label: "Humidity in 2014",
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: "rgba(75,192,192,0.4)",
//             borderColor: "rgba(75,192,192,1)",
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: "rgba(75,192,192,1)",
//             pointBackgroundColor: "#fff",
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: "rgba(75,192,192,1)",
//             pointHoverBorderColor: "rgba(220,220,220,1)",
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [65, 59, 80, 81, 56, 55, 40, 50, 33, 44, 55, 88],
//             spanGaps: false
//         }
//     ]
// };
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
