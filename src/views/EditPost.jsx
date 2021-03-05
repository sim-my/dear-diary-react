import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import Button from "../components/Button";
import TextBox from "../components/TextBox";
import TextArea from "../components/TextArea";
import DateControl from "../components/DateControl";

import * as ROUTES from "../constant/routes";
import * as postService from "../service/post";
import * as postActions from "../actions/postActions";

import loadingImage from "../assets/images/loadingImage.gif";

const EditPost = (props) => {
  useEffect(() => {
    postService.singlePost(props.match.params.id).then((data) => {
      data &&
        props.setPost({
          post: data[0],
          isLoading: false,
        });
    });
  });

  const { register, handleSubmit, control } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    postService.updatePost(data, props.match.params.id);
    history.push(ROUTES.posts);
  };

  return !props.isLoading ? (
    <div className="ml-auto mr-auto shadow-sm m-4 w-75 border rounded p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-6">
            <TextBox
              name="title"
              ref={register}
              type="text"
              defaultValue={props.post.title}
              placeholder="Title"
            />
          </div>
          <div className="col-6 text-right">
            <Controller
              defaultValue={new Date(props.post.date)}
              name="date"
              control={control}
              render={({ onChange, value, ref = { register } }) => (
                <DateControl
                  onChange={onChange}
                  selected={value}
                  inputRef={ref}
                />
              )}
            />
          </div>
        </div>
        <TextArea
          name="story"
          ref={register}
          rows="12"
          defaultValue={props.post.story}
          placeholder="Write something..."
        />
        <div className="d-flex flex-row justify-content-end mt-4">
          <Link to={ROUTES.dashboard}>
            <Button type="button" label="Cancel" class="mr-4 btn btn-danger" />
          </Link>
          <Button type="submit" label="Update Story" class="btn btn-success" />
        </div>
      </form>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center mt-4 pt-4">
      <img src={loadingImage} height="100" width="100" alt="loading" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.postReducer.post,
    isLoading: state.postReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPost: (data) => dispatch(postActions.displaySinglePost(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
