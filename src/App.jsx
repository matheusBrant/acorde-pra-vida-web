import { Route, HashRouter } from "react-router-dom";
import { Layout, Menu, Input, Button, Row, Col} from 'antd';
import { Link } from 'react-router-dom';
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import './css/app.css'; 

const { Header, Content, Footer } = Layout;

export const App = () => {
  return (
    <HashRouter>
      <Layout className="layout" style={{ minHeight: '100%' }}>
        <Header>
            <div className="logo" />
            <Row>
              <Col span={8}>
                <Input.Search theme="ligth" className="pesquisar" placeholder="Pesquisar" allowClear />
              </Col>
              <Col span={13}>
                <Menu className="navegacao" theme="dark" mode="horizontal">
                  <Menu.Item key="home"><Link to="/home">Home</Link></Menu.Item>
                  <Menu.Item key="artistas"><Link to="/artistas">Artistas</Link></Menu.Item>
                  <Menu.Item key="musicas"><Link to="/musicas">Músicas</Link></Menu.Item> 
                </Menu>
              </Col>
              <Col className="botoes">
                <Button ghost>
                  Logar
                </Button>
                <Button type="link">
                  Cadastrar
                </Button>
              </Col>
            </Row>
        </Header>
        <Content>
          <Route exact path={["/", "/home"]} component={Home}></Route>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </HashRouter>
  );
};
