function myFunc1() {
  var xValues = ["CPU", "GPU", "RAM", "Memory", "Threads"];
  var yValues = [55, 49, 44, 24, 15];
  var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "PC Status",
      },
    },
  });

  var barColors = ["red", "green", "blue", "orange", "brown"];

  new Chart("myChart2", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "GUI",
      },
    },
  });
}
function myFunc2() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Time", "Total", "Pass", "Fail"],
      ["09/09/21", 10, 7, 3],
      ["10/09/21", 6, 3, 3],
      ["11/09/21", 7, 6, 1],
      ["14/09/21", 11, 8, 3],
      ["15/09/21", 15, 9, 6],
      ["19/09/21", 14, 12, 2],
      ["20/09/21", 5, 3, 2],
      ["21/09/21", 9, 8, 1],
      ["25/09/21", 12, 2, 10],
    ]);

    var options = {
      title: "Test Case Vs Time",
      hAxis: { title: "Time", titleTextStyle: { color: "#333" } },
      vAxis: { minValue: 0 },
    };

    var chart = new google.visualization.AreaChart(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
  }
}
