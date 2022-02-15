import { Row, Slider, Col, Divider } from 'antd';
import { PlayCircleOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';

export const BottomMenu = () => {
    return (
        <div style={{ position: "absolute", bottom: "0px", width: "100%"}}>
            <Divider/>
            <Row>
                <Col span={6}>
                </Col>
                <Col span={12} style={{display:"flex", alignItems:"center"}}>
                    <StepBackwardOutlined style={{ fontSize: '30px' }} /><PlayCircleOutlined style={{ fontSize: '30px' }} /><StepForwardOutlined style={{ fontSize: '30px' }} />
                    <Slider defaultValue={30} disabled={false} style={{bottom: "0px"}}/>
                </Col>
                <Col span={6}>
                </Col>
            </Row>
            
        </div>
    )
}