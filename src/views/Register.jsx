import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Button from "../components/Button";
import TextBox from "../components/TextBox";

import * as auth from "../service/auth";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    auth.register(data);
  };

  return (
    <div className="ml-auto mr-auto shadow-sm m-4 w-50 text-center border rounded">
      <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
        <h2>Create an Account to get started</h2>
        <p>
          Already a member ?{" "}
          <Link className="text-success" to="/login">
            Login
          </Link>
        </p>
        <div className="form-group pb-2">
          <TextBox
            ref={register}
            type="text"
            name="username"
            placeholder="Username*"
          />
        </div>
        <div className="form-group pb-2">
          <TextBox
            ref={register}
            type="text"
            name="first_name"
            placeholder="First Name*"
          />
        </div>
        <div className="form-group pb-2">
          <TextBox
            ref={register}
            type="text"
            name="last_name"
            placeholder="Last Name*"
          />
        </div>
        <div className="form-group pb-2">
          <TextBox
            ref={register}
            type="email"
            name="email"
            placeholder="Email*"
          />
        </div>
        <div className="form-group pb-2">
          <TextBox
            ref={register}
            type="password"
            name="password"
            placeholder="Password*"
          />
        </div>

        <Button type="submit" label="Sign Up" class="btn btn-success" />
      </form>
    </div>
  );
};

export default Register;
