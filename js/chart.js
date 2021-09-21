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
	},
	toolTip: {
		shared: false
	},
	legend: {
		fontSize: 14
	},
	data: [{
		type: "splineArea", 
		showInLegend: true,
		name: "Total",
		yValueFormatString: "$#,##0",
		dataPoints: [
			{ x: new Date(2021, 2), y: 5},
			{ x: new Date(2021, 3), y: 3 },
			{ x: new Date(2021, 4), y: 2 },
			{ x: new Date(2021, 5), y: 7 },
			{ x: new Date(2021, 6), y: 10 },
			{ x: new Date(2021, 7), y: 14 },
			{ x: new Date(2021, 8), y: 11 },
			{ x: new Date(2021, 9), y: 25 },
			{ x: new Date(2021, 10), y: 9 },
			{ x: new Date(2021, 11), y: 4 },
			{ x: new Date(2022, 0), y: 25 },
			{ x: new Date(2022, 1), y: 25 }
		]
 	},
	{
		type: "splineArea", 
		showInLegend: true,
		name: "Pass",
		yValueFormatString: "$#,##0",     
		dataPoints: [
			{ x: new Date(2021, 2), y: 4 },
			{ x: new Date(2021, 3), y: 2 },
			{ x: new Date(2021, 4), y: 2 },
			{ x: new Date(2021, 5), y: 5 },
			{ x: new Date(2021, 6), y: 7 },
			{ x: new Date(2021, 7), y: 11 },
			{ x: new Date(2021, 8), y: 8 },
			{ x: new Date(2021, 9), y: 19 },
			{ x: new Date(2021, 10), y: 7 },
			{ x: new Date(2021, 11), y: 2 },
			{ x: new Date(2022, 0), y: 24 },
			{ x: new Date(2022, 1), y: 23 }
		]
 	},
	{
		type: "splineArea", 
		showInLegend: true,
		yValueFormatString: "$#,##0",      
		name: "Fail",
		dataPoints: [
			{ x: new Date(2021, 2), y: 1 },
			{ x: new Date(2021, 3), y: 1 },
			{ x: new Date(2021, 4), y: 0 },
			{ x: new Date(2021, 5), y: 2 },
			{ x: new Date(2021, 6), y: 3 },
			{ x: new Date(2021, 7), y: 3 },
			{ x: new Date(2021, 8), y: 3 },
			{ x: new Date(2021, 9), y: 6 },
			{ x: new Date(2021, 10), y: 2 },
			{ x: new Date(2021, 11), y: 2 },
			{ x: new Date(2022, 0), y: 1 },
			{ x: new Date(2022, 1), y: 2 }
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