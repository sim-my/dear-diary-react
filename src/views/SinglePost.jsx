import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Button from "../components/Button";

import * as ROUTES from "../constant/routes";
import * as postService from "../service/post";
import * as postActions from "../actions/postActions";

import dateToString from "../utils/dateToString";
import dateFormatter from "../utils/dateFormatter";

import loadingImage from "../assets/images/loadingImage.gif";

const SinglePost = (props) => {
  const history = useHistory();

  useEffect(() => {
    postService.singlePost(props.match.params.id).then((data) => {
      data[0] &&
        (data[0].formattedDate = dateToString(dateFormatter(data[0].date)));
      props.setPost({
        post: data[0],
        isLoading: false,
      });
    });
  });

  const handleDelete = () => {
    postService
      .deletePost(props.match.params.id)
      .then((response) => history.push(ROUTES.posts));
  };

  return !props.isLoading ? (
    <div className="ml-auto mr-auto shadow-sm m-4 w-75 border rounded p-4">
      <div className="text-right">
        <Link to={ROUTES.buildEditPost(props.match.params.id)}>
          <Button type="button" label="Edit" class=" btn btn-primary mr-2" />
        </Link>

        <Button
          onClick={handleDelete}
          type="button"
          label="Delete"
          class=" btn btn-danger"
        />
      </div>

      <h4>{props.post.title}</h4>
      <p>{props.post.story}</p>
      <h6 className="text-right">
        {props.post.formattedDate ? props.post.formattedDate : ""}
      </h6>
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

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
