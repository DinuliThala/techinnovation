import React, {useState} from 'react';
import {Button, Form, Input, Radio, Select} from 'antd';
import ScatterPlot from "./Graph";
import ForceDirectedGraph from "./Graph";
import NodeGraph from "./Graph";

const NetworkVisualisation = () => {

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({layout}) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const customStyles = {
        mainDiv: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        container: {
            display: 'flex',
            maxWidth: '100%',
            width: '100%',
        },
        formSe: {
            flex: 1,
            padding: '8px',
        },
        plot: {
            flex: 1,
            padding: '8px',
            width: "100%",
            height: '600px'
        },
    }
    return (

        <div className={"main-div"} style={customStyles.mainDiv}>
            <div style={customStyles.container}>

                <div style={customStyles.formSe}>
                    <Form
                        {...formItemLayout}
                        layout={formLayout}
                        form={form}
                        initialValues={{
                            layout: formLayout,
                        }}
                        onValuesChange={onFormLayoutChange}
                        style={{
                            maxWidth: formLayout === 'inline' ? 'none' : 600,
                        }}
                    >
                        <Form.Item label="Node Attribute" name="layout">
                        </Form.Item>
                        <Form.Item label="Color">
                            <Select
                                defaultValue="Red"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'red',
                                        label: 'Red',
                                    },
                                    {
                                        value: 'green',
                                        label: 'Green',
                                    },
                                    {
                                        value: 'blue',
                                        label: 'Blue',
                                    }
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Size">
                            <Select
                                defaultValue="5"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: '5',
                                        label: '5',
                                    },
                                    {
                                        value: '6',
                                        label: '6',
                                    },
                                    {
                                        value: '7',
                                        label: '7',
                                    }
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Label">
                            <Select
                                defaultValue="Bipartite Density"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'Bipartite Density',
                                        label: 'Bipartite Density',
                                    },
                                    {
                                        value: 'Bipartite Ego',
                                        label: 'Bipartite Ego',
                                    },
                                    {
                                        value: 'Bipartite Four Cycle',
                                        label: 'Bipartite Four Cycle',
                                    }
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Edge Attribute" name="layout">
                        </Form.Item>
                        <Form.Item label="Color">
                            <Select
                                defaultValue="Blue"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'red',
                                        label: 'Red',
                                    },
                                    {
                                        value: 'green',
                                        label: 'Green',
                                    },
                                    {
                                        value: 'blue ',
                                        label: 'Blue',
                                    }
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Size">
                            <Select
                                defaultValue="5"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: '5',
                                        label: '5',
                                    },
                                    {
                                        value: '6',
                                        label: '6',
                                    },
                                    {
                                        value: '7',
                                        label: '7',
                                    }
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Label">
                            <Select
                                defaultValue="Bipartite Ego"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'Bipartite Density',
                                        label: 'Bipartite Density',
                                    },
                                    {
                                        value: 'Bipartite Ego',
                                        label: 'Bipartite Ego',
                                    },
                                    {
                                        value: 'Bipartite Four Cycle',
                                        label: 'Bipartite Four Cycle',
                                    }
                                ]}
                            />
                        </Form.Item>
                        <Form.Item {...buttonItemLayout}>
                            <Button type="primary">Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div style={customStyles.plot}>
                    <ForceDirectedGraph/>
                </div>
            </div>
        </div>
    );
};
export default NetworkVisualisation;