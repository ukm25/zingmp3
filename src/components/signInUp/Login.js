import { useEffect } from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";

import { 
    password, 
    username, 
    remember, 
    requiredPassword, 
    requiredUsername,
    submitLogin,
 } from "../../script";
import { getAuth, signInWithEmailAndPassword } from "../../firebase/config";

export const Login = ({setIsLogin, setToken}) => {

    const onFinish = (values) => {
        setIsLogin(false);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, values.username, values.password)
        .then((userCredential) => {
            localStorage.setItem('tokenZing', userCredential.user.accessToken)
            setToken(userCredential.user.accessToken)
        })
        .catch((error) => {
            console.log(error.code, error.message)
        })
        console.log('Success: ', values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ', errorInfo)
    }
    return (
        <>
            <Row>
                <Col span={15} offset={3} style={{ marginTop: "30px" }}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8, }}
                        wrapperCol={{ span: 16, }}
                        initialValues={{ remember: true, }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label={username}
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: requiredUsername,
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label={password}
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: requiredPassword,
                            },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                            offset: 8,
                            span: 16,
                            }}
                        >
                            <Checkbox>{remember}</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                            offset: 8,
                            span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                {submitLogin}
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            
        </>
    )
}