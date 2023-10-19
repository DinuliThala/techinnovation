import logo from './logo.svg';
import './App.css';
import Navigation from "./Navigation";

import React from 'react';
import { Form, Input, Radio, Checkbox, Upload, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const ERGMAnalysis = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>ERGM Analysis</h1>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
        <Form.Item label="Node A">
          <Input />
        </Form.Item>
        <Form.Item label="Node B">
          <Input />
        </Form.Item>
        <Form.Item label="Choose One">
          <Radio.Group>
            <Radio value="simulation">Simulation</Radio>
            <Radio value="estimation">Estimation</Radio>
            <Radio value="validation">Validation</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Select Options">
          <Checkbox.Group>
            <Checkbox value="include">Include</Checkbox>
            <Checkbox value="directed">Directed</Checkbox>
            <Checkbox value="fixed">Fixed</Checkbox>
            <Checkbox value="fixedDensity">Fixed Density</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="Parameter">
          <Form.Item
            name="parameterFile"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            noStyle
          >
            <Upload
              action="/upload"
              listType="picture-card"
              fileList={[]}
            >
              <Button icon={<PlusOutlined />}>Add File</Button>
            </Upload>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Network File">
          <Form.Item
            name="networkFile"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            noStyle
          >
            <Upload
              action="/upload"
              listType="picture-card"
              fileList={[]}
            >
              <Button icon={<PlusOutlined />}>Add File</Button>
            </Upload>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Attribute File">
          <Form.Item
            name="attributeFile"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            noStyle
          >
            <Upload
              action="/upload"
              listType="picture-card"
              fileList={[]}
            >
              <Button icon={<PlusOutlined />}>Add File</Button>
            </Upload>
          </Form.Item>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ERGMAnalysis;
