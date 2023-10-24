// import React from 'react';
// import { Card, Table, Typography } from 'antd';

// const { Title } = Typography;

// const columnsAnalysis = [
//   {
//     title: 'Node',
//     dataIndex: 'node',
//     key: 'node',
//   },
//   {
//     title: 'Degree Centrality',
//     dataIndex: 'degreeCentrality',
//     key: 'degreeCentrality',
//   },
//   {
//     title: 'Closeness Centrality',
//     dataIndex: 'closenessCentrality',
//     key: 'closenessCentrality',
//   },
//   {
//     title: 'Betweenness Centrality',
//     dataIndex: 'betweennessCentrality',
//     key: 'betweennessCentrality',
//   },
// ];

// const dataAnalysis = [
//   {
//     key: '1',
//     node: 'Node 1',
//     degreeCentrality: 0.5,
//     closenessCentrality: 0.8,
//     betweennessCentrality: 0.2,
//   },
//   {
//     key: '2',
//     node: 'Node 2',
//     degreeCentrality: 0.4,
//     closenessCentrality: 0.7,
//     betweennessCentrality: 0.1,
//   },
//   // Add more rows with analysis results and interpretations
// ];

// const columnsStatistics = [
//   {
//     title: 'Statistic',
//     dataIndex: 'statistic',
//     key: 'statistic',
//   },
//   {
//     title: 'Value',
//     dataIndex: 'value',
//     key: 'value',
//   },
// ];

// const dataStatistics = [
//   {
//     key: '1',
//     statistic: 'Mean',
//     value: 0.6,
//   },
//   {
//     key: '2',
//     statistic: 'Median',
//     value: 0.6,
//   },
//   {
//     key: '3',
//     statistic: 'Mode',
//     value: 0.6,
//   },
//   {
//     key: '4',
//     statistic: 'Standard Deviation',
//     value: 0.2,
//   },
// ];

// const InteractiveReport = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <Card title="Interactive Report for Social Network Analysis">
//         <Title level={4}>Analysis Results</Title>
//         <Table
//           columns={columnsAnalysis}
//           dataSource={dataAnalysis}
//           pagination={false}
//         />
//         <Title level={4}>Descriptive Statistics</Title>
//         <Table
//           columns={columnsStatistics}
//           dataSource={dataStatistics}
//           pagination={false}
//         />
//       </Card>
//     </div>
//   );
// };

// export default InteractiveReport;




import React from 'react';
import { Card, Table, Typography } from 'antd';
import { Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const { Title } = Typography;

const columnsAnalysis = [
  {
    title: 'Node',
    dataIndex: 'node',
    key: 'node',
  },
  {
    title: 'Degree Centrality',
    dataIndex: 'degreeCentrality',
    key: 'degreeCentrality',
  },
  {
    title: 'Closeness Centrality',
    dataIndex: 'closenessCentrality',
    key: 'closenessCentrality',
  },
  {
    title: 'Betweenness Centrality',
    dataIndex: 'betweennessCentrality',
    key: 'betweennessCentrality',
  },
];

const dataAnalysis = [
  {
    key: '1',
    node: 'Node 1',
    degreeCentrality: 0.5,
    closenessCentrality: 0.8,
    betweennessCentrality: 0.2,
  },
  {
    key: '2',
    node: 'Node 2',
    degreeCentrality: 0.4,
    closenessCentrality: 0.7,
    betweennessCentrality: 0.1,
  },
  // Add more rows with analysis results and interpretations
];

const columnsStatistics = [
  {
    title: 'Statistic',
    dataIndex: 'statistic',
    key: 'statistic',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
];

const dataStatistics = [
  {
    key: '1',
    statistic: 'Mean',
    value: 0.6,
  },
  {
    key: '2',
    statistic: 'Median',
    value: 0.6,
  },
  {
    key: '3',
    statistic: 'Mode',
    value: 0.6,
  },
  {
    key: '4',
    statistic: 'Standard Deviation',
    value: 0.2,
  },
];

const pieChartOptions = {
  maintainAspectRatio: false, // Disable aspect ratio to adjust the size
  responsive: true, // Ensure responsiveness
};

const lineChartOptions = {
  maintainAspectRatio: false, // Disable aspect ratio to adjust the size
  responsive: true, // Ensure responsiveness
};

const chartSize = { width: 250, height: 250 }; // Customize chart size

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const InteractiveReport = () => {
  const pieChartData = {
    labels: dataAnalysis.map((item) => item.node),
    datasets: [
      {
        data: dataAnalysis.map((item) => item.degreeCentrality),
        backgroundColor: [
          'red',
          'blue',
          // Add more colors for additional data points
        ],
      },
    ],
  };

  const lineChartData = {
    labels: dataStatistics.map((item) => item.statistic),
    datasets: [
      {
        label: 'Value',
        data: dataStatistics.map((item) => item.value),
        borderColor: 'green',
        fill: false,
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card title="Interactive Report for Social Network Analysis">
        <Title level={4}>Analysis Results</Title>
        <Table columns={columnsAnalysis} dataSource={dataAnalysis} pagination={false} />
        <Title level={4}>Descriptive Statistics</Title>
        <Table columns={columnsStatistics} dataSource={dataStatistics} pagination={false} />
        <Title level={4}>Pie Chart</Title>
        <div style={{ ...centerStyle, ...chartSize }}>
          <Pie data={pieChartData} options={pieChartOptions} />
        </div>
        <Title level={4}>Line Graph</Title>
        <div style={{ ...centerStyle, ...chartSize }}>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
      </Card>
    </div>
  );
};

export default InteractiveReport;
