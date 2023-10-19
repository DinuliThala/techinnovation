import React from 'react';
import { Card, Table, Typography } from 'antd';

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
  // Add more rows with descriptive statistics
];

const InteractiveReport = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Card title="Interactive Report for Social Network Analysis">
        <Title level={4}>Analysis Results</Title>
        <Table
          columns={columnsAnalysis}
          dataSource={dataAnalysis}
          pagination={false}
        />
        <Title level={4}>Descriptive Statistics</Title>
        <Table
          columns={columnsStatistics}
          dataSource={dataStatistics}
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default InteractiveReport;
