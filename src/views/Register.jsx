import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import Button from "../components/Button";
import TextBox from "../components/TextBox";

import * as auth from "../service/auth";
import * as ROUTES from "../constant/routes";

import { connect } from "react-redux";

import * as authActions from "../actions/authActions";
import { useAlert } from "react-alert";

const Register = (props) => {
  const history = useHistory();
  const alert = useAlert();
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    auth.register(data).then((response) => {
      if (response.err) {
        alert.show(response.err);
        reset();
      } else {
        props.register({ registered: true });
      }
    });
    history.push(ROUTES.login);
  };

  return (
    <div className="ml-auto mr-auto shadow-sm m-4 w-50 text-center border rounded">
      <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
        <h2>Create an Account to get started</h2>
        <p>
          Already a member ?{" "}
          <Link className="text-success" to={ROUTES.login}>
            Login
          </Link>
        </p>
        <div className="form-group pb-2">
          <TextBox
            ref={register({ required: true })}
            type="text"
            name="username"
            placeholder="Username*"
          />
          {errors.username && errors.username.type === "required" && (
            <h6 className="text-left text-danger">This is required</h6>
          )}
        </div>
        <div className="form-group pb-2">
          <TextBox
            ref={register({ required: true })}
            type="text"
            name="first_name"
            placeholder="First Name*"
          />
          {errors.first_name && errors.first_name.type === "required" && (
            <h6 className="text-left text-danger">This is required</h6>
          )}
        </div>
        <div className="form-group pb-2">
          <TextBox
            ref={register({ required: true })}
            type="text"
            name="last_name"
            placeholder="Last Name*"
          />
          {errors.last_name && errors.last_name.type === "required" && (
            <h6 className="text-left text-danger">This is required</h6>
          )}
        </div>
        <div className="form-group pb-2">
          <TextBox
            ref={register({ required: true })}
            type="email"
            name="email"
            placeholder="Email*"
          />
          {errors.email && errors.email.type === "required" && (
            <h6 className="text-left text-danger">This is required</h6>
          )}
        </div>
        <div className="form-group pb-2">
          <TextBox
            ref={register({ required: true, minLength: 6 })}
            type="password"
            name="password"
            placeholder="Password*"
          />
          {errors.password && errors.password.type === "required" && (
            <h6 className="text-left text-danger">This is required</h6>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <h6 className="text-left text-danger" role="alert">
              Min length is 6
            </h6>
          )}
        </div>

        <Button type="submit" label="Sign Up" class="btn btn-success" />
      </form>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    registered: state.authReducer.registered,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => dispatch(authActions.register(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
