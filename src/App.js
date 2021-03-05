import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Login from "./views/Login";
import NotFound from "./views/404";
import Register from "./views/Register";
import PostList from "./views/PostList";
import EditPost from "./views/EditPost";
import Dashboard from "./views/Dashboard";
import SinglePost from "./views/SinglePost";
import CreatePost from "./views/CreatePost";

import PrivateRoute from "./components/PrivateRoute";

import * as ROUTES from "./constant/routes";
import * as authActions from "./actions/authActions";

import "./App.css";

const App = (props) => {
  const handleLogout = () => {
    props.logout({ loggedIn: false, data: [] });
    localStorage.clear();
  };

  return (
    <Router>
      <div className="App">
        {localStorage.getItem("authorization") ? (
          <nav className="pl-4 pr-4 navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
            <div className="">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    exact={true}
                    className="nav-link"
                    to={ROUTES.dashboard}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    exact={true}
                    className="nav-link"
                    to={ROUTES.posts}
                  >
                    Posts
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="nav-item dropdown">
              <a
                className="nav-link text-success dropdown-toggle"
                href="/#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {localStorage.getItem("name")}
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link
                  onClick={handleLogout}
                  className="dropdown-item"
                  to={ROUTES.login}
                >
                  Logout
                </Link>
              </div>
            </div>
          </nav>
        ) : (
          <nav></nav>
        )}
        <Switch>
          <Route exact path={ROUTES.login}>
            <Login />
          </Route>
          <Route exact path={ROUTES.register} component={Register} />
          <Route exact path={ROUTES.notFound} component={NotFound} />

          <PrivateRoute
            redirectTo={ROUTES.login}
            isAuthorized={props.isLoggedIn}
            exact
            path={ROUTES.dashboard}
            component={Dashboard}
          />
          <PrivateRoute
            redirectTo={ROUTES.login}
            isAuthorized={props.isLoggedIn}
            exact
            path={ROUTES.createPost}
            component={CreatePost}
          />

          <PrivateRoute
            redirectTo={ROUTES.login}
            isAuthorized={props.isLoggedIn}
            exact
            path={ROUTES.posts}
            component={PostList}
          />

          <PrivateRoute
            redirectTo={ROUTES.login}
            isAuthorized={props.isLoggedIn}
            exact
            path={ROUTES.singlePost}
            component={SinglePost}
          />

          <PrivateRoute
            redirectTo={ROUTES.login}
            isAuthorized={props.isLoggedIn}
            exact
            path={ROUTES.editPost}
            component={EditPost}
          />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn:
      state.authReducer.loggedIn || localStorage.getItem("authorization")
        ? true
        : false,
    data: state.authReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (status) => dispatch(authActions.logout(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
