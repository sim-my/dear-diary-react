import "./App.css";
import React, { useState } from "react";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import CreatePost from "./views/CreatePost";
import PostList from "./views/PostList";
import SinglePost from "./views/SinglePost";
import EditPost from "./views/EditPost";
import NotFound from "./views/404";
import PrivateRoute from "./components/PrivateRoute";
import * as ROUTES from "./constant/routes";

import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

import Register from "./views/Register";

const App = (props) => {
  console.log(props)
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState("");

  const handleChange = (newValue) => {
    setIsAuth(newValue);
    setName(localStorage.getItem("name"));
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.clear();
  };

  return (
    <Router>
      <div className="App">
        {isAuth ? (
          <nav className="pl-4 pr-4 navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
            <div className="">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink activeClassName="active" exact={true} className="nav-link" to={ROUTES.dashboard}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" exact={true} className="nav-link" to={ROUTES.posts}>
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
                {name}
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
          <div></div>
        )}
        <p>{isAuth}</p>
        <Switch>
          <Route exact path={ROUTES.login}>
            <Login onAuthenticated={handleChange} />
          </Route>
          <Route exact path={ROUTES.register} component={Register} />
          <Route exact path={ROUTES.notFound} component={NotFound} />

          <PrivateRoute
            redirectTo={ROUTES.login}
            isAuthorized={isAuth}
            exact
            path={ROUTES.dashboard}
            component={Dashboard}
          />
          <PrivateRoute
            redirectTo={ROUTES.login}
            isAuthorized={isAuth}
            exact
            path={ROUTES.createPost}
            component={CreatePost}
          />

          <PrivateRoute
            redirectTo={ROUTES.login}
            isAuthorized={isAuth}
            exact
            path={ROUTES.posts}
            component={PostList}
          />

          <PrivateRoute
            redirectTo={ROUTES.login}
            isAuthorized={isAuth}
            exact
            path={ROUTES.singlePost}
            component={SinglePost}
          />

          <PrivateRoute
            redirectTo={ROUTES.login}
            isAuthorized={isAuth}
            exact
            path={ROUTES.editPost}
            component={EditPost}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
