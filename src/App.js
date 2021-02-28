import "./App.css";

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import CreatePost from "./views/CreatePost";
import PostList from "./views/PostList.jsx";
import NotFound from "./views/404";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./views/Register";

function App() {
  return (
    <Router>
      <div className="App">
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
              <Link className="dropdown-item" to="/">
                Logout
              </Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Route path="/posts">
            <PostList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
