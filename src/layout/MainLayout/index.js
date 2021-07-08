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
            <Col span={8} className="pesquisarCol">
              <Input.Search
                theme="ligth"
                className="pesquisar"
                placeholder="Pesquisar"
                allowClear
              />
            </Col>
            <Col span={11}>
              <Menu className="navegacao" theme="dark" mode="horizontal">
                <Menu.Item key="home">
                  <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item key="artistas">
                  <Link to="/artistas">Artistas</Link>
                </Menu.Item>
                <Menu.Item key="musicas">
                  <Link to="/musicas">Músicas</Link>
                </Menu.Item>
                <Menu.Item key="ranking">
                  <Link to="/ranking">Ranking</Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col className="botoes">
              <Button ghost>Logar</Button>
              <Button type="link">Cadastrar</Button>
            </Col>
          </Row>
        </Header>
        <Content>{props.children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};
