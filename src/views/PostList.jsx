import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import DateViewer from "../components/DateViewer";

import * as post from "../service/post";
import * as ROUTES from "../constant/routes";
import * as postActions from "../actions/postActions";

import "../assets/styles/postList.css";
import loadingImage from "../assets/images/loadingImage.gif";

const PostList = (props) => {
  useEffect(() => {
    post.postList().then((response) => {
      props.displayList({ post: {}, list: response, isLoading: false });
    });
  });

  return (
    <div className="w-75 ml-auto mr-auto">
      <div className="text-right m-4">
        <Link to={ROUTES.createPost}>
          <Button
            type="button"
            label="Write a New Story!"
            class="btn btn-success"
          />
        </Link>
      </div>
      {props.isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-4 pt-4">
          <img src={loadingImage} height="100" width="100" alt="loading" />
        </div>
      ) : props.posts && props.posts.length > 0 ? (
        props.posts.map((value, index) => {
          return (
            <Link
              className="link"
              key={index}
              to={ROUTES.buildSinglePost(value.id)}
            >
              <div className="display-card row shadow-sm m-4  border rounded p-4">
                <div className="col-2">
                  <DateViewer date={value.date} />
                </div>
                <div className="col-10">
                  <h4>{value.title}</h4>
                  <p>{value.story}</p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div className="d-flex justify-content-center align-items-center mt-4 pt-4">
          <h5 className="text-danger">You don't have any posts.</h5>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postReducer.list,
    isLoading: state.postReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayList: (posts) => dispatch(postActions.displayList(posts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
