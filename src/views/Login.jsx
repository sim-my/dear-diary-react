import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Button from "../components/Button";
import TextBox from "../components/TextBox";

import { useForm } from "react-hook-form";
import * as auth from "../service/auth";

import * as authActions from "../actions/authActions";
import * as ROUTES from "../constant/routes";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    auth.login(data).then((response) => {
      props.login({ loggedIn: true, data: response });
    });
  };

  useEffect(() => {
    if (props.isLoggedIn) {
      history.push(ROUTES.posts);
    }
  }, [props.isLoggedIn, history]);

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

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authReducer.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(authActions.login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
