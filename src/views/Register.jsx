import { Link } from "react-router-dom";

import Button from "../components/Button";
import TextBox from "../components/TextBox";

const Register = () => {

    return (
        <div className="ml-auto mr-auto shadow-sm m-4 w-50 text-center border rounded">
          <form className="m-4">
            <h2>Create an Account to get started</h2>
            <p>
              Already a member ? <Link className="text-success" to="/login">Login</Link>
            </p>
            <TextBox type="text" placeholder="Username" />
            <TextBox type="text" placeholder="First Name" />
            <TextBox type="text" placeholder="Last Name" />
            <TextBox type="email" placeholder="Email" />
            <TextBox type="password" placeholder="Password" />
            <TextBox type="password" placeholder="Confirm Password" />
            <Button type="submit" label="Sign Up" class="btn btn-success" />
          </form>
        </div>
      );
};

export default Register;