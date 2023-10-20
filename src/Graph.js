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
// import React, { useEffect } from 'react';
// import * as echarts from 'echarts';
//
// function ForceDirectedGraph() {
//     useEffect(() => {
//         // Data from your provided JSON
//         const data = [
//             {
//                 t: 0,
//                 BipartiteDensityA: 13.0,
//                 BipartiteActivityA: 87.0,
//                 BipartiteEgoTwoStarA: 495.0,
//                 BipartiteAlterTwoStar1A: 866.0,
//                 BipartiteAlterTwoStar2A: 522.0,
//                 BipartiteFourCycle1A: 875.0,
//                 BipartiteFourCycle2A: 643.0,
//             },
//             {
//                 t: 100,
//                 BipartiteDensityA: -8.0,
//                 BipartiteActivityA: 9.0,
//                 BipartiteEgoTwoStarA: 340.0,
//                 BipartiteAlterTwoStar1A: 8.0,
//                 BipartiteAlterTwoStar2A: 2.0,
//                 BipartiteFourCycle1A: 455.0,
//                 BipartiteFourCycle2A: 289.0,
//             },
//             {
//                 t: 200,
//                 BipartiteDensityA: -12.0,
//                 BipartiteActivityA: -25.0,
//                 BipartiteEgoTwoStarA: 169.0,
//                 BipartiteAlterTwoStar1A: -258.0,
//                 BipartiteAlterTwoStar2A: -103.0,
//                 BipartiteFourCycle1A: 118.0,
//                 BipartiteFourCycle2A: 71.0,
//             },
//             {
//                 t: 300,
//                 BipartiteDensityA: -2.0,
//                 BipartiteActivityA: -14.0,
//                 BipartiteEgoTwoStarA: 64.0,
//                 BipartiteAlterTwoStar1A: -108.0,
//                 BipartiteAlterTwoStar2A: -59.0,
//                 BipartiteFourCycle1A: 1.0,
//                 BipartiteFourCycle2A: -4.0,
//             },
//             {
//                 t: 400,
//                 BipartiteDensityA: -2.0,
//                 BipartiteActivityA: -8.0,
//                 BipartiteEgoTwoStarA: -5.0,
//                 BipartiteAlterTwoStar1A: -3.0,
//                 BipartiteAlterTwoStar2A: -2.0,
//                 BipartiteFourCycle1A: 8.0,
//                 BipartiteFourCycle2A: 19.0,
//             },
//             {
//                 t: 500,
//                 BipartiteDensityA: 1.0,
//                 BipartiteActivityA: 7.0,
//                 BipartiteEgoTwoStarA: 59.0,
//                 BipartiteAlterTwoStar1A: 73.0,
//                 BipartiteAlterTwoStar2A: 29.0,
//                 BipartiteFourCycle1A: 144.0,
//                 BipartiteFourCycle2A: 76.0,
//             },
//             {
//                 t: 600,
//                 BipartiteDensityA: 1.0,
//                 BipartiteActivityA: -24.0,
//                 BipartiteEgoTwoStarA: -84.0,
//                 BipartiteAlterTwoStar1A: -228.0,
//                 BipartiteAlterTwoStar2A: -80.0,
//                 BipartiteFourCycle1A: -269.0,
//                 BipartiteFourCycle2A: -88.0,
//             },
//             {
//                 t: 700,
//                 BipartiteDensityA: -1.0,
//                 BipartiteActivityA: -37.0,
//                 BipartiteEgoTwoStarA: -195.0,
//                 BipartiteAlterTwoStar1A: -295.0,
//                 BipartiteAlterTwoStar2A: -109.0,
//                 BipartiteFourCycle1A: -307.0,
//                 BipartiteFourCycle2A: -64.0,
//             },
//         ];
//
//         const chart = echarts.init(document.getElementById('forceDirectedGraph'));
//
//         const option = {
//             series: [
//                 {
//                     type: 'graph',
//                     layout: 'force',
//                     symbolSize: 10, // Node size
//                     draggable: true, // Allow node dragging
//                     force: {
//                         repulsion: 100, // Adjust the repulsion strength
//                     },
//                     data: data.map((item, index) => ({
//                         name: `Node ${index + 1}`,
//                         value: item.t,
//                     })),
//                     links: data.reduce((links, _, index) => {
//                         if (index < data.length - 1) {
//                             links.push({ source: index, target: index + 1 });
//                         }
//                         return links;
//                     }, []),
//                 },
//             ],
//         };
//
//         chart.setOption(option);
//     }, []);
//
//     return <div id="forceDirectedGraph" style={{ width: '100%', height: '500px' }} />;
// }
//
// export default ForceDirectedGraph;
