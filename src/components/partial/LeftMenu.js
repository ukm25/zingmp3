import { Menu } from "antd"
import { newest, personal, topFavourite } from "../../script"

export const LeftMenu = () => {
    return (
        <>
            <Menu>
                <Menu.Item key={personal}>
                    {personal}
                </Menu.Item>
                <Menu.Item key={newest}>
                    {newest}
                </Menu.Item>
                <Menu.Item key={topFavourite}>
                    {topFavourite}
                </Menu.Item>
            </Menu>
        </>
    )
}