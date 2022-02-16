import { Row, Slider, Col, Divider } from 'antd';
import { PlayCircleOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';

export const BottomMenu = () => {
    return (
        <div style={{ position: "absolute", bottom: "0px", width: "100%"}}>
            <Divider/>
            <Row>
                <Col span={6}>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={24} style={{textAlign:"center"}}>
                            <StepBackwardOutlined style={{ fontSize: '30px' }} /><PlayCircleOutlined style={{ fontSize: '30px' }} /><StepForwardOutlined style={{ fontSize: '30px' }} />
                        </Col>
                        <Col span={24}>
                            <Slider defaultValue={30} disabled={false} style={{bottom: "0px"}}/>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                </Col>
            </Row>
            
        </div>
    )
}