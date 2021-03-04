import { useState, useEffect } from "react";
import Button from "../components/Button";

import { Link, useHistory } from "react-router-dom";

import * as postService from "../service/post";

import dateFormatter from "../utils/dateFormatter";

import * as ROUTES from "../constant/routes";

const SinglePost = ({ match }) => {
  const [post, setPost] = useState([]);
  const [date, setDate] = useState({});

  const history = useHistory();

  useEffect(() => {
    postService.singlePost(match.params.id).then((data) => {
      setPost(data);
      setDate(dateFormatter(data[0].date));
    });
  });

  const handleDelete = () => {
    postService.deletePost(match.params.id);
    history.push(ROUTES.posts);
  };
  return post.length > 0 ? (
    <div className="ml-auto mr-auto shadow-sm m-4 w-75 border rounded p-4">
      <div className="text-right">
        <Link to={ROUTES.buildEditPost(match.params.id)}>
          <Button type="button" label="Edit" class=" btn btn-primary mr-2" />
        </Link>

        <Button
          onClick={handleDelete}
          type="button"
          label="Delete"
          class=" btn btn-danger"
        />
      </div>

      <h4>{post[0].title}</h4>
      <p>{post[0].story}</p>
      <h6 className="text-right">
        {date.day}, {date.dd}-{date.mm}-{date.yyyy}
      </h6>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default SinglePost;
