import { Link } from "react-router-dom";

import Button from "../components/Button";
import TextBox from "../components/TextBox";

const Login = () => {
  return (
    <div className="ml-auto mr-auto shadow-sm mt-4 w-50 text-center border rounded">
      <form className="m-4">
        <h2>Welcome Back!</h2>
        <p>
          Don't have an account ? <Link className="text-success" to="/register">Sign Up</Link>
        </p>
        <TextBox type="email" placeholder="Email" />
        <TextBox type="password" placeholder="Password" />
        <Button type="submit" label="Login" class="btn btn-success" />
      </form>
    </div>
  );
};

export default Login;
