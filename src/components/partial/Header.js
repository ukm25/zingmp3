import { PageHeader, Button, Divider } from "antd";
import { getAuth, signOut } from "../../firebase/config";
import { login, register, titleHeader, logout } from "../../script";

export const Header = ({ setIsLogin, setIsRegister, token, setToken }) => {
    const handleLogin = () => {
        setIsLogin(true);
        setIsRegister(false);
    }

    const handleRegister = () => {
        setIsRegister(true);
        setIsLogin(false);
    }

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setIsLogin(true);
            localStorage.removeItem("tokenZing")
            setToken(null);
        })
    }

    return (
        <>
            {
                token ?
                <PageHeader
                    title={titleHeader}
                    extra={[
                        <Button onClick={() => handleLogout()}>{logout}</Button>,
                    ]}
                >
                </PageHeader> :
                <PageHeader
                    title={titleHeader}
                    extra={[
                        <Button onClick={() => handleLogin()}>{login}</Button>,
                        <Button onClick={() => handleRegister()}>{register}</Button>,
                    ]}
                >
                </PageHeader>
            }
            <Divider />
        </>
    )
}