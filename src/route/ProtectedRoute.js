import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Router>
      <Route
        {...rest}
        render={(props) => {
          if (isAuth) {
            return <Component />;
          } else {
            return (
              <Redirect
                to="/login"
              />
            );
          }
        }}
      />
    </Router>
  );
};

export default ProtectedRoute;
