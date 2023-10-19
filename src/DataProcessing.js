import logo from './logo.svg';
import './App.css';
import Navigation from "./Navigation";

import React, { useState } from 'react';
import { Button, Upload, Select, Space, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const DataProcessing = () => {
  const [file, setFile] = useState(null);
  const [fileExtension, setFileExtension] = useState('.txt');

  const handleFileChange = (info) => {
    if (info.file.status === 'done') {
      setFile(info.file.originFileObj);
    }
  };

  const handleExtensionChange = (value) => {
    setFileExtension(value);
  };

  const handleShowOutput = () => {
    // Perform data processing here using the file and extension
    console.log('File:', file);
    console.log('File Extension:', fileExtension);
    // Implement your data processing logic here
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Data Processing</Title>
      <Space direction="vertical" size="large">
        <Space size="middle">
          <span>Data Import:</span>
          <Upload
            customRequest={() => {}}
            showUploadList={false}
            onChange={handleFileChange}
          >
            <Button icon={<UploadOutlined />} >Upload File</Button>
          </Upload>
        </Space>
        <Space size="middle">
          <span>File Extension:</span>
          <Select
            defaultValue=".txt"
            onChange={handleExtensionChange}
          >
            <Option value=".txt">.txt</Option>
            <Option value=".csv">.csv</Option>
          </Select>
        </Space>
        <Button type="primary" onClick={handleShowOutput}>
          Show Output
        </Button>
      </Space>
    </div>
  );
};

export default DataProcessing;
