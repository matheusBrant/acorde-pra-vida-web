import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Logolayout } from "./layout/Logolayout";
import { LoginPage } from "./pages/Login";
import Home from "./pages/Home";
import {SignUpPage} from "./pages/SignUp"
import {RecoverPasswordPage} from "./pages/RecoverPassword";

const RouteWithLayout = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export const App = () => {
  return (
    <>
      <Router>
        <RouteWithLayout layout={MainLayout} path="/home" component={Home} />
        <RouteWithLayout layout={Logolayout} path="/login" component={LoginPage} />
        <RouteWithLayout layout={Logolayout}  Route path="/signup" component={SignUpPage}/>
        <RouteWithLayout layout={Logolayout} Route path="/recoverpassword" component={RecoverPasswordPage}/>
      </Router>
    </>
  );
};
