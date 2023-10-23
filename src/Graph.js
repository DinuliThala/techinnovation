import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const ForceDirectedGraph = () => {
    useEffect(() => {
        const chartDom = document.getElementById('force-directed-graph');
        const myChart = echarts.init(chartDom);

        // Sample data for the nodes in the graph
        const nodes = [
            { name: 'Node 1', category: 0 },
            { name: 'Node 2', category: 0 },
            { name: 'Node 3', category: 0 },
            { name: 'Node 4', category: 0 },
            { name: 'Node 5', category: 0 },
            { name: 'Node 6', category: 0 },
            { name: 'Node 7', category: 0 },
            { name: 'Node 8', category: 0 },
            { name: 'Node 9', category: 0 },
            { name: 'Node 10', category: 0 },
            { name: 'Node 11', category: 1 },
            { name: 'Node 12', category: 1 },
            { name: 'Node 13', category: 1 },
            { name: 'Node 14', category: 1 },
            { name: 'Node 15', category: 1 },
            { name: 'Node 16', category: 1 },
            { name: 'Node 17', category: 1 },
            { name: 'Node 18', category: 1 },
            { name: 'Node 19', category: 1 },
            { name: 'Node 20', category: 1 },
            { name: 'Node 21', category: 2 },
            { name: 'Node 22', category: 2 },
            { name: 'Node 23', category: 2 },
            { name: 'Node 24', category: 2 },
            { name: 'Node 25', category: 2 },
            { name: 'Node 26', category: 3 },
            { name: 'Node 27', category: 3 },
            { name: 'Node 28', category: 3 },
            { name: 'Node 29', category: 3 },
            { name: 'Node 30', category: 3 },
            // Add more nodes for additional categories
        ];

        // Define random links between nodes
        const links = generateRandomLinks(nodes, 0.4);

        // Define categories with different colors
        const categories = [
            { name: 'BipartiteDensityA', itemStyle: { color: 'red' } },
            { name: 'Category 2', itemStyle: { color: 'blue' } },
            { name: 'Category 3', itemStyle: { color: 'green' } },
            { name: 'Category 4', itemStyle: { color: 'orange' } },
            // Define categories with different colors
            // Repeat this pattern for each category
        ];

        // ECharts option configuration for the Force-Directed Graph
        const option = {
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    symbolSize: 20,
                    draggable: true,
                    data: nodes,
                    links: links,
                    categories: categories,
                    roam: true,
                    label: {
                        show: false,
                    },
                    force: {
                        repulsion: 100,
                        edgeLength: 150,
                    },
                },
            ],
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, []);

    return <div id="force-directed-graph" style={{ width: '100%', height: '800px' }}></div>;
};

export default ForceDirectedGraph;

function generateRandomLinks(nodes, probability) {
    const links = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (Math.random() < probability) {
                links.push({
                    source: nodes[i].name,
                    target: nodes[j].name,
                });
            }
        }
    }
    return links;
}

// import React, { useEffect, useRef } from 'react';
// import echarts from 'echarts';
//
// function ForceDirectedGraph() {
//     const chartRef = useRef(null);
//     useEffect(() => {
//         const myChart = echarts.init(chartRef.current);
//
//         const fetchData = (url) => {
//             return fetch(url)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     return response.json();
//                 })
//                 .catch(error => {
//                     if (error.name === 'TypeError') {
//                         throw new Error('Network or CORS error: ' + error.message);
//                     } else {
//                         throw error;
//                     }
//                 });
//         };
//         const apiUrl = 'http://localhost:8000/upload/dza';
//         fetchData(apiUrl)
//             .then(data => {
//                 // Assuming your data structure is an array of nodes and an array of links
//                 const nodes = data.nodes;
//                 const links = data.links;
//
//                 const option = {
//                     series: [
//                         {
//                             type: 'graph',
//                             layout: 'force',
//                             force: {
//                                 repulsion: 100,
//                             },
//                             roam: true,
//                             label: {
//                                 show: true,
//                             },
//                             data: nodes,
//                             links: links,
//                         },
//                     ],
//                 };
//
//                 myChart.setOption(option);
//             })
//             .catch(error => {
//                 console.error(error.message);
//             });
//     }, []);
//     return <div ref={chartRef} style={{ width: '100%', height: '500px' }} />;
// }
//
// export default ForceDirectedGraph;

