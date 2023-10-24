import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function ForceDirectedGraph() {
    const chartRef = useRef(null);
    const lineChartRef = useRef(null); // Ref for the line chart
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [meanValuesDZA, setMeanValuesDZA] = useState({});
    const [meanValuesTheta, setMeanValuesTheta] = useState({});
    const [activeTab, setActiveTab] = useState(1);
    const columnNames = [ 'Density', 'Activity', 'Contagion', 'Binary', 'Continuous'];

    useEffect(() => {
        const myChart = echarts.init(chartRef.current);
        const lineChart = echarts.init(lineChartRef.current); // Initialize line chart

        const data = activeTab === 1 ? data1 : data2; // Use the active tab's data

        if (data) {
            // Visualize the data as a force-directed graph
            const nodes = data.map(entry => ({
                name: entry.t.toString(),
                symbolSize: 10,
            }));

            const links = data.slice(1).map((entry, index) => ({
                source: entry.t.toString(),
                target: data[index].t.toString(),
            }));

            const option = {
                title: {
                    text: 'Force-Directed Graph Visualization',
                },
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        force: {
                            repulsion: 100,
                        },
                        roam: true,
                        label: {
                            show: true,
                        },
                        data: nodes,
                        links: links,
                    },
                ],
            };

            myChart.setOption(option);

            // Create a line chart for mean data
            const meanData = activeTab === 1 ? meanValuesDZA : meanValuesTheta;
            const lineOption = {
                title: {
                    text: 'Mean Data',
                },
                grid: {
                    left: '3%', // Adjust margins as needed
                    right: '3%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: {
                    type: 'category',
                    data: columnNames,
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        data: columnNames.map(colName => meanData[colName]),
                        type: 'line',
                    },
                ],
            };


            lineChart.setOption(lineOption);
        }
    }, [data1, data2, activeTab, meanValuesDZA, meanValuesTheta]);

    useEffect(() => {
        // Fetch data for the first tab (DZA)
        if (activeTab === 1) {
            const apiUrl = 'http://localhost:8000/upload/dza';
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(result => {
                    setData1(result.data);
                    calculateMean(result.data, 'DZA');
                })
                .catch(error => {
                    console.error(error.message);
                });
        }

        // Fetch data for the second tab (Theta)
        if (activeTab === 2) {
            const apiUrl = 'http://localhost:8000/upload/theta';
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(result => {
                    setData2(result.data);
                    calculateMean(result.data, 'Theta');
                })
                .catch(error => {
                    console.error(error.message);
                });
        }
    }, [activeTab]);

    const calculateMean = (data, tab) => {
        const meanValues = {};
        columnNames.forEach(col => {
            const columnData = data.map(entry => entry[col]);
            const mean = columnData.reduce((acc, val) => acc + val, 0) / columnData.length;
            meanValues[col] = mean;
        });

        if (tab === 'DZA') {
            setMeanValuesDZA(meanValues);
        } else if (tab === 'Theta') {
            setMeanValuesTheta(meanValues);
        }
    };

    return (
        <div>
            <div>
                <button onClick={() => setActiveTab(1)}>DZA</button>
                <button onClick={() => setActiveTab(2)}>Theta</button>
            </div>
            <div ref={chartRef} style={{ width: '300px', height: '500px' }} />
            <div ref={lineChartRef} style={{ width: '300px', height: '300px' }} />
        </div>
    );
}

export default ForceDirectedGraph;
