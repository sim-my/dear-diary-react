import { Link } from "react-router-dom";

import Button from "../components/Button";

import * as ROUTES from "../constant/routes";

import page_not_found from "../assets/images/page_not_found.jpg";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-4 pt-4">
      <img alt="Page not found" src={page_not_found} height="400" width="400" />
      <Link to={ROUTES.login}>
        <Button
          label="Get back to Login"
          type="button"
          class="btn btn-success"
        />
      </Link>
    </div>
  );
};

export default NotFound;
