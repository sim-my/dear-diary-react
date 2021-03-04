import Button from "../components/Button";
import DateViewer from "../components/DateViewer";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as post from "../service/post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    post.postList().then((response) => {
      setPosts(response);
      setIsLoading(false);
    });
  }, []);

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
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        posts.length > 0 &&
        posts.map((value, index) => {
          return(
          <div key={index} className="row shadow-sm m-4  border rounded p-4">
            <div className="col-2">
              <DateViewer />
            </div>
            <div className="col-10">
              <h4>{value.title}</h4>
              <p>{value.story}</p>
            </div>
          </div>
          )

        })
      )}
    </div>
  );
};

export default PostList;
