import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { LoginPage } from "./pages/Login";
import Home from "./pages/Home"
import './css/app.css'; 

const RouteWithLayout = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

export const App = () => {
  return (
    <>
      <Router>
        <RouteWithLayout layout={MainLayout} path="/home" component={Home}/>
        <Route path="/login" component={LoginPage}/>
      </Router>
    </>
  );
};
