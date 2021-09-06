import { Layout, Menu, Input, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./MainLayout.css";

const { Header, Content, Footer } = Layout;

export const MainLayout = (props) => {
  return (
    <>
      <Layout className="layout" style={{ minHeight: "100%" }}>
        <Header>
          <div className="logo" />
          <Row>
            <Col offset={8} span={11}>
              <Menu className="navegacao" theme="dark" mode="horizontal">
                <Menu.Item key="home">
                  <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item key="artistas">
                  <Link to="/artists">Artistas</Link>
                </Menu.Item>
                <Menu.Item key="musicas">
                  <Link to="/songs">Músicas</Link>
                </Menu.Item>
                <Menu.Item key="ranking">
                  <Link to="/ranking">Ranking</Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col className="botoes">
              <Button ghost><a href="/login">Logar</a></Button>
              <Button type="link"><a href="/signup">Cadastrar</a></Button>
            </Col>
          </Row>
        </Header>
        <Content>{props.children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Acorde pra vida | ©2021
        </Footer>
      </Layout>
    </>
  );
};
