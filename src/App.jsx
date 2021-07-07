import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { LoginPage } from "./pages/Login";
import RankingPage from "./pages/Ranking";
import Home from "./pages/Home";

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
        <Route path="/login" component={LoginPage} />
        <Route path="/ranking" component={RankingPage} />
      </Router>
    </>
  );
};
