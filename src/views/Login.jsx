import { Link, useHistory} from "react-router-dom";
import React, { useEffect, useState } from "react";

import Button from "../components/Button";
import TextBox from "../components/TextBox";

import { useForm } from "react-hook-form";
import * as auth from "../service/auth";

import * as ROUTES from "../constant/routes";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

  const onSubmit = (data) => {
    auth.login(data, () => {
      if (localStorage.getItem("authorization")) {
        setIsLoggedIn(true);
        props.onAuthenticated(true);
      }
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push(ROUTES.posts);
    }
  }, [isLoggedIn, history]);

  return (
    <div className="ml-auto mr-auto shadow-sm mt-4 w-50 text-center border rounded">
      <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
        <h2>Welcome Back!</h2>
        <p>
          Don't have an account ?{" "}
          <Link className="text-success" to={ROUTES.register}>
            Sign Up
          </Link>
        </p>
        <TextBox
          ref={register({ required: true })}
          name="email"
          type="email"
          placeholder="Email*"
        />
        {errors.password && errors.password.type === "required" && (
          <h6 className="text-left text-danger">Invalid Password</h6>
        )}
        <TextBox
          ref={register({ required: true })}
          name="password"
          type="password"
          placeholder="Password*"
        />
        {errors.password && errors.password.type === "required" && (
          <h6 className="text-left text-danger">Invalid Password</h6>
        )}
        <Button type="submit" label="Login" class="btn btn-success" />
      </form>
    </div>
  );
};

export default Login;
