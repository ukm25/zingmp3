import { PageHeader, Button } from "antd";
import { titleHeader } from "../script";

export const Header = () => {
    return (
        <>
            <PageHeader
                title={titleHeader}
                extra={[
                    <Button>Login</Button>,
                    <Button>Register</Button>,
                ]}
            >
            </PageHeader>
        </>
    )
}