import { Button, Checkbox, Col, Form, Input, Row } from "antd";

import { 
    password, 
    username, 
    remember, 
    requiredPassword, 
    requiredUsername, 
    fullname, 
    requiredRegister, 
    submitRegister,
    repassword,
} from "../../script";
import { getAuth, createUserWithEmailAndPassword } from '../../firebase/config';

export const Register = ({ setIsLogin, setIsRegister }) => {
    const onFinish = (values) => {
        setIsLogin(true);
        setIsRegister(false);
        const auth = getAuth();
        // console.log("values", values)
        createUserWithEmailAndPassword(auth, values.username, values.password)
        .then((userCredential) => {
            console.log("userCredential", userCredential.user);
        })
        .catch((error) => {
            console.log("error", error.code, error.message);
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
                            label={fullname}
                            name="fullname"
                            rules={[
                            {
                                required: true,
                                message: requiredRegister,
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

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
                            label={repassword}
                            name="repassword"
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
                            wrapperCol={{
                            offset: 8,
                            span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                {submitRegister}
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            
        </>
    )
}