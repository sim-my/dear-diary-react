import { Link } from "react-router-dom";

import Button from "../components/Button";
import TextBox from "../components/TextBox";

import { useForm } from "react-hook-form";

import * as auth from "../service/auth";

import { withRouter } from 'react-router-dom';

const Login = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    auth.login(data);
  };

  return (
    <div className="ml-auto mr-auto shadow-sm mt-4 w-50 text-center border rounded">
      <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
        <h2>Welcome Back!</h2>
        <p>
          Don't have an account ? <Link className="text-success" to="/register">Sign Up</Link>
        </p>
        <TextBox ref={register} name="email" type="email" placeholder="Email" />
        <TextBox ref={register} name="password" type="password" placeholder="Password" />
        <Button type="submit" label="Login" class="btn btn-success" />
      </form>
    </div>
  );
};

export default withRouter(Login);
