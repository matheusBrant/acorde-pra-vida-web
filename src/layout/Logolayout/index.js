import { Layout, Menu, Input, Button, Row, Col } from "antd";


const { Header, Content, Footer } = Layout;

export const Logolayout = (props) => {
  return (
    <>
      <Layout className="layout" style={{ minHeight: "100%" }}>
        <Header>
          <div className="logo" />
         
        </Header>
        <Content>{props.children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};
