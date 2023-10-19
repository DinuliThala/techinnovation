import React from 'react';
import {Card, Col, Divider, Row} from "antd";

function Dashboard() {
    return (
        <div style ={{margin: '10px'}}>
            <Row>
                <Card title="Processing Tools" extra={<a href="#">More</a>} style={{ width: '100%' }}>
                    <p>Card content</p>
                </Card>
            </Row>
            <Divider />
            <Row>
                <Card title="Visualisation" extra={<a href="#">More</a>} style={{ width: '100%' }}>
                    <p>Card content</p>
                </Card>
            </Row>
        </div>

    );
}

export default Dashboard;
