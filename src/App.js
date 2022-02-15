import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Header } from './components/Header';
import { LeftMenu } from './components/LeftMenu';
import { Row, Col } from 'antd';
import { BottomMenu } from './components/BottomMenu';
import { RightScreen } from './components/RightScreen';

function App() {
  return (
    <>
      <Header/>
      <Row>
        <Col span={5}>
          <LeftMenu/>
        </Col>
        <Col span={19}>
          <RightScreen/>
        </Col>
      </Row>
      <BottomMenu/>
      {/* <div style={{ position: "absolute", width:"100%", bottom: "0px"}}>
        <BottomMenu/>
      </div> */}
      
    </>
  );
}

export default App;
