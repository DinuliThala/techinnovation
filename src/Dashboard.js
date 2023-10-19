import React from 'react';
import {Button, Card, Divider, Row, Space} from "antd";
import ChartConfig from "./ChartConfig";
import {VerticalAlignBottomOutlined} from "@ant-design/icons";

function Dashboard() {
    return (
        <div style ={{margin: '10px'}}>
            <Row>
                <Card title="Processing Tools" extra={<a href="#">More</a>} style={{ width: '100%' }}>
                    <Space wrap>
                        <Button icon={<VerticalAlignBottomOutlined />} size={'large'}>Data Import</Button>
                        <Button>Pre processing</Button>
                    </Space>

                </Card>
            </Row>
            <Divider />
            <Row>
                <Card title="Visualisation" extra={<a href="#">More</a>} style={{ width: '100%' }}>
                    <p><ChartConfig/></p>
                </Card>
            </Row>


        </div>

    );
}

export default Dashboard;
