import "./App.css";
import React, {  useState } from "react";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import CreatePost from "./views/CreatePost";
import PostList from "./views/PostList.jsx";
import NotFound from "./views/404";
import PrivateRoute from "./components/PrivateRoute"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Register from "./views/Register";

const App = () => {

  const [isAuth, setIsAuth] = useState(false);

  console.log(isAuth)

  const handleChange = (newValue) => {
    setIsAuth(newValue);
  }

 
  return (
    
    <Router>
      <div className="App">
        {isAuth ? (
          <nav className="pl-4 pr-4 navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
            <div className="">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    Posts
                  </Link>
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
                Simran Panthi
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/login">
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
          <Route exact path="/login">
            <Login onAuthenticated={handleChange} />
          </Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/404" component={NotFound} />

          <PrivateRoute
            redirectTo="/login"
            isAuthorized={isAuth}
            exact
            path="/"
            component={Dashboard}
          />
          <PrivateRoute
            redirectTo="/login"
            isAuthorized={isAuth}
            exact
            path="/create"
            component={CreatePost}
          />

          <PrivateRoute
            redirectTo="/login"
            isAuthorized={isAuth}
            exact
            path="/posts"
            component={PostList}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
