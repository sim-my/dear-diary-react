import "./App.css";

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import CreatePost from "./views/CreatePost";
import NotFound from "./views/404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./views/Register";

function App() {
  return (
    <Router>
      <div className="App">
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
