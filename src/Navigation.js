import React from 'react';
import { Tabs } from 'antd';
import Dashboard from "./Dashboard";
import DataProcessing from "./DataProcessing";
import NetworkVisualisation from "./NetworkVisualisation";
import ERGMAnalysis from "./ERGMAnalysis";
import InteractiveReport from "./InteractiveReport";
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Dashboard',
        children: <Dashboard/>,
    },
    {
        key: '2',
        label: 'Data Processing',
        children: <DataProcessing/>,
    },
    {
        key: '3',
        label: 'Network Visualisation',
        children: <NetworkVisualisation/>,
    },
    {
        key: '4',
        label: 'Interactive Report',
        children: <InteractiveReport/>,
    },
    {
        key: '5',
        label: 'ERGM Analysis',
        children: <ERGMAnalysis/>
    },
];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} style ={{margin: '10px'}}/>;
export default App;