// chart options
const options = {
	chart: {
		height: 450,
		width: '100%',
		type: 'bar',
		background: '#f4f4f4',
		foreColor: '#333',
	},
	series: [
		{
			name: 'Population',
			data: [8550405, 3971883, 2720546, 2296224, 1567442, 1563025, 1469845, 1394928, 1300092, 1026908],
		},
	],
	xaxis: {
		categories: [
			'New York',
			'Los Angeles',
			'Chicago',
			'Houston',
			'Philadelphia',
			'Phoenix',
			'San Antonio',
			'San Diego',
			'Dallas',
			'San Jose',
		],
	},
	plotOptions: {
		bar: {
			horizontal: false,
		},
	},
	fill: {
		colors: ['#663399'],
	},
	dataLabels: {
		enabled: false,
	},
	title: {
		text: 'Largest US cities by population',
		align: 'center',
		margin: 20,
		offsetY: 20,
		style: {
			fontSize: '24px',
		},
	},
};

// chart init
const chart = new ApexCharts(document.querySelector('#chart'), options);

// chart render
chart.render();

// event method example

document.querySelector('.btn--horizontal').addEventListener('click', () =>
	chart.updateOptions({
		plotOptions: {
			bar: {
				horizontal: true,
			},
		},
	})
);
document.querySelector('.btn--vertical').addEventListener('click', () =>
	chart.updateOptions({
		plotOptions: {
			bar: {
				horizontal: false,
			},
		},
	})
);
