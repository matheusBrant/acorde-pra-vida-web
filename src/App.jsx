import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { LoginPage } from "./pages/Login";
import Home from "./pages/Home";
import AddChordsPage from "./pages/AddChords";
import ChordsPage from "./pages/Chords";
import UserPage from "./pages/User";

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
        <Route path="/login" component={LoginPage} />
        <RouteWithLayout exact layout={MainLayout} path={ ["/", "/home"] } component={Home} />
        <RouteWithLayout layout={MainLayout} path="/user" component={UserPage} />
        <RouteWithLayout
          layout={MainLayout}
          path="/add-chords"
          component={AddChordsPage}
        />
        <RouteWithLayout
          layout={MainLayout}
          path="/chords"
          component={ChordsPage}
        ></RouteWithLayout>
      </Router>
    </>
  );
};
