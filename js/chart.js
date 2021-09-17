// function myFunc2() {
//   var xValues = ["CPU", "GPU", "RAM", "Memory", "Threads"];
//   var yValues = [55, 49, 44, 24, 15];
//   var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

//   new Chart("myChart", {
//     type: "pie",
//     data: {
//       labels: xValues,
//       datasets: [
//         {
//           backgroundColor: barColors,
//           data: yValues,
//         },
//       ],
//     },
//     options: {
//       title: {
//         display: true,
//         text: "PC Status",
//       },
//     },
//   });

//   var barColors = ["red", "green", "blue", "orange", "brown"];

//   new Chart("myChart2", {
//     type: "bar",
//     data: {
//       labels: xValues,
//       datasets: [
//         {
//           backgroundColor: barColors,
//           data: yValues,
//         },
//       ],
//     },
//     options: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: "GUI",
//       },
//     },
//   });
// }
function myFunc2() {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Test Case Vs Time"
	},
	axisY :{
		includeZero: false,
		prefix: "$"
	},
	toolTip: {
		shared: true
	},
	legend: {
		fontSize: 13
	},
	data: [{
		type: "splineArea", 
		showInLegend: true,
		name: "Total",
		yValueFormatString: "$#,##0",
		dataPoints: [
			{ x: new Date(2016, 2), y: 20100 },
			{ x: new Date(2016, 3), y: 16000 },
			{ x: new Date(2016, 4), y: 14000 },
			{ x: new Date(2016, 5), y: 18000 },
			{ x: new Date(2016, 6), y: 18000 },
			{ x: new Date(2016, 7), y: 21000 },
			{ x: new Date(2016, 8), y: 22000 },
			{ x: new Date(2016, 9), y: 25000 },
			{ x: new Date(2016, 10), y: 23000 },
			{ x: new Date(2016, 11), y: 25000 },
			{ x: new Date(2017, 0), y: 26000 },
			{ x: new Date(2017, 1), y: 25000 }
		]
 	},
	{
		type: "splineArea", 
		showInLegend: true,
		name: "Pass",
		yValueFormatString: "$#,##0",     
		dataPoints: [
			{ x: new Date(2016, 2), y: 10100 },
			{ x: new Date(2016, 3), y: 6000 },
			{ x: new Date(2016, 4), y: 3400 },
			{ x: new Date(2016, 5), y: 4000 },
			{ x: new Date(2016, 6), y: 9000 },
			{ x: new Date(2016, 7), y: 3900 },
			{ x: new Date(2016, 8), y: 4200 },
			{ x: new Date(2016, 9), y: 5000 },
			{ x: new Date(2016, 10), y: 14300 },
			{ x: new Date(2016, 11), y: 12300 },
			{ x: new Date(2017, 0), y: 8300 },
			{ x: new Date(2017, 1), y: 6300 }
		]
 	},
	{
		type: "splineArea", 
		showInLegend: true,
		yValueFormatString: "$#,##0",      
		name: "Fail",
		dataPoints: [
			{ x: new Date(2016, 2), y: 1700 },
			{ x: new Date(2016, 3), y: 2600 },
			{ x: new Date(2016, 4), y: 1000 },
			{ x: new Date(2016, 5), y: 1400 },
			{ x: new Date(2016, 6), y: 900 },
			{ x: new Date(2016, 7), y: 1000 },
			{ x: new Date(2016, 8), y: 1200 },
			{ x: new Date(2016, 9), y: 5000 },
			{ x: new Date(2016, 10), y: 1300 },
			{ x: new Date(2016, 11), y: 2300 },
			{ x: new Date(2017, 0), y: 2800 },
			{ x: new Date(2017, 1), y: 1300 }
		]
	}]
});
chart.render();

}
// </script>
// </head>
// <body>
// <div id="chartContainer" style="height: 300px; width: 100%;"></div>
// <script type="text/javascript" src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
// </body>
// </html>