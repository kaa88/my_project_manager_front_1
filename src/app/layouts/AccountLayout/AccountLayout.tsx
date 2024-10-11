import styles from "./AccountLayout.module.scss";
import { ComponentPropsWithoutRef } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { AccountHeader } from "../../../widgets/ui/components/AccountHeader/AccountHeader";
import { AccountSidebar } from "../../../widgets/ui/components/AccountSidebar/AccountSidebar";
import { TechnicalWorkAlert } from "../../../widgets/ui/components/TechnicalWorkAlert/TechnicalWorkAlert";
import { NoAuthRedirect } from "../../../features/auth";
import { useAppSelector } from "../../store";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;

export const AccountLayout = ({
  children,
}: ComponentPropsWithoutRef<"div">): JSX.Element => {
  // const navigate = useNavigate();

  // const { isLogin, refresh_token, exp_refresh_token, exp_access_token } =
  //   useAppSelector((state) => state.auth.auth);
  // const authErrorStatus = useAppSelector(
  //   (state) => state.authStatus.fetchRefresh.statusCode
  // );

  // NoAuthRedirect

  // const sidebarState = useAppSelector(
  //   (state) => state.uiPersist.isSidebarCollapsed
  // )
  //   ? "collapsed"
  //   : "full";
  const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  const items2: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <NoAuthRedirect>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: "0 48px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0", background: "#bbb" }}>
            <Sider style={{ background: "#888" }} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
                items={items2}
              />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </NoAuthRedirect>
  );
};
