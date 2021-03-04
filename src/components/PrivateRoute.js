import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  if (!props.isAuthorized) {
    const renderComponent = () => (
      <Redirect to={{ pathname: props.redirectTo }} />
    );
    return <Route {...props} component={renderComponent} />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;
