import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Logolayout } from "./layout/Logolayout";
import { LoginPage } from "./pages/Login";
import RankingPage from "./pages/Ranking";
import Home from "./pages/Home";
import {SignUpPage} from "./pages/SignUp"
import {RecoverPasswordPage} from "./pages/RecoverPassword";
import AddChordsPage from "./pages/AddChords";
import ChordsPage from "./pages/Chords";
import UserPage from "./pages/User";
import ArtistsList from "./pages/Artists";
import Artist from "./pages/Artist";
import SongsList from "./pages/Songs";
import { UserProvider } from "./context/UserContext";

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
        <UserProvider>
          <RouteWithLayout layout={Logolayout} path="/login" component={LoginPage} />
          <RouteWithLayout layout={Logolayout} Route path="/signup" component={SignUpPage}/>
          <RouteWithLayout layout={Logolayout} Route path="/recoverpassword" component={RecoverPasswordPage}/>
          <RouteWithLayout layout={MainLayout} exact path={ ["/", "/home"] } component={Home} />
          <RouteWithLayout layout={MainLayout} path="/artists" component={ArtistsList} />
          <RouteWithLayout layout={MainLayout} path="/artist/:artistId" component={Artist} />
          <RouteWithLayout layout={MainLayout} path="/songs" component={SongsList} />
          <RouteWithLayout layout={MainLayout} path="/user" component={UserPage} />
          <RouteWithLayout layout={MainLayout} path="/ranking" component={RankingPage} />
          <RouteWithLayout layout={MainLayout} path="/add-chords" component={AddChordsPage}/>
          <RouteWithLayout layout={MainLayout} path="/song/:songId" component={ChordsPage} ></RouteWithLayout>
        </UserProvider>
      </Router>
    </>
  );
};
