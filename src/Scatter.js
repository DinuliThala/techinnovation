import React, { useEffect } from 'react';
import * as echarts from 'echarts'; // Import all exports from echarts

const ScatterPlot = () => {
    useEffect(() => {
        // Initialize the chart
        const chartDom = document.getElementById('scatter-chart');
        const myChart = echarts.init(chartDom);

        // Scatter plot data
        const data = [
            [10, 10],
            [20, 20],
            [30, 30],
            [40, 40],
            [50, 50],
        ];

        // ECharts option configuration
        const option = {
            tooltip: {},
            xAxis: {
                type: 'value',
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    type: 'scatter',
                    data: data,
                },
            ],
        };

        // Set the option and render the chart
        myChart.setOption(option);

        // Clean up the chart when the component unmounts
        return () => {
            myChart.dispose();
        };
    }, []);

    return (
        <div id="scatter-chart" style={{ width: '100%', height: '400px' }}></div>
    );
};

export default ScatterPlot;
