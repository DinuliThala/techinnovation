import React, { useEffect } from 'react';
import * as echarts from 'echarts'; // Import all exports from echarts

const ForceDirectedGraph = () => {
    useEffect(() => {
        // Initialize the chart
        const chartDom = document.getElementById('force-directed-graph');
        const myChart = echarts.init(chartDom);

        // Sample data for the nodes and links in the graph
        const nodes = [
            { name: 'Node 1' },
            { name: 'Node 2' },
            { name: 'Node 3' },
        ];

        const links = [
            { source: 'Node 1', target: 'Node 2' },
            { source: 'Node 2', target: 'Node 3' },
        ];

        // ECharts option configuration for the Force-Directed Graph
        const option = {
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    symbolSize: 40,
                    draggable: true,
                    data: nodes,
                    links: links,
                    roam: true,
                    label: {
                        show: true,
                    },
                    force: {
                        repulsion: 100,
                        edgeLength: 150,
                    },
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

    return <div id="force-directed-graph" style={{ width: '100%', height: '800px' }}></div>;
};

export default ForceDirectedGraph;
