import { Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { useEffect, useState } from 'react';


import './App.css';
import { Header } from './components/partial/Header';
import { LeftMenu } from './components/partial/LeftMenu';
import { BottomMenu } from './components/partial/BottomMenu';
import { RightScreen } from './components/partial/RightScreen';
import { Login } from './components/signInUp/Login';
import { Register } from './components/signInUp/Register';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("tokenZing"));
  },[]);

  return (
    <>
      <Header setIsLogin={setIsLogin} setIsRegister={setIsRegister} token={token} setToken={setToken} />
      <Row>
        <Col span={5}>
          <LeftMenu />
        </Col>
        <Col span={19}>
          { isLogin ? <Login setIsLogin={setIsLogin} setToken={setToken} /> : 
            (isRegister ? <Register setIsLogin={setIsLogin} setIsRegister={setIsRegister} /> : <RightScreen /> ) 
          }
          <RightScreen/>
        </Col>
      </Row>
      <BottomMenu/>    
    </>
  );
}

export default App;
