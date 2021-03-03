import Button from "../components/Button";
import DateViewer from "../components/DateViewer";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import * as post from "../service/post";

const PostList = () => {

  useEffect(() => {
    post.postList();
  })

  return (
    <div className="w-75 ml-auto mr-auto">
      <div className="text-right m-4">
        <Link to="/create">
          <Button
            type="button"
            label="Write a New Story!"
            class="btn btn-success"
          />
        </Link>
      </div>

      <div className="row shadow-sm m-4  border rounded p-4">
        <div className="col-2">
          <DateViewer />
        </div>
        <div className="col-10">
          <h4>Title</h4>
          <p>About Today</p>
        </div>
      </div>
      <div className="row shadow-sm m-4  border rounded p-4">
        <div className="col-2">
          <DateViewer />
        </div>
        <div className="col-10">
          <h4>Title</h4>
          <p>About Today</p>
        </div>
      </div>
      <div className="row shadow-sm m-4  border rounded p-4">
        <div className="col-2">
          <DateViewer />
        </div>
        <div className="col-10">
          <h4>Title</h4>
          <p>About Today</p>
        </div>
      </div>
    </div>
  );
};

export default PostList;
