import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
	state = {
		options: {
			chart: {
				background: '#f4f4f4',
				foreColor: '#333',
			},
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
		},
		series: [
			{
				name: 'Population',
				data: [8550405, 3971883, 2720546, 2296224, 1567442, 1563025, 1469845, 1394928, 1300092, 1026908],
			},
		],
	};

	render() {
		return (
			<>
				<Chart options={this.state.options} series={this.state.series} type="bar" height="450" width="100%" />
				<button className="btn">Horizontal</button>
				<button className="btn">Vertical</button>
			</>
		);
	}
}

export default PopChart;
