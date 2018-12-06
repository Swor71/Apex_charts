import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
	state = {
		options: {},
		series: [
			{
				name: 'Population',
				data: [8550405, 3971883, 2720546, 2296224, 1567442, 1563025, 1469845, 1394928, 1300092, 1026908],
			},
		],
	};

	render() {
		return <Chart options={this.state.options} series={this.state.series} type="bar" height="450" width="100%" />;
	}
}

export default PopChart;
