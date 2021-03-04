import Button from "../components/Button";
import TextBox from "../components/TextBox";
import TextArea from "../components/TextArea";
import DateControl from "../components/DateControl";
import { Controller, useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";

import { useEffect, useState } from "react";

import * as postService from "../service/post";

const EditPost = ({ match }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    postService.singlePost(match.params.id).then((data) => {
      setPost(data);
    });
  }, []);

  const { register, handleSubmit, control } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    postService.updatePost(data, match.params.id);
    history.push("/posts");
  };

  return post.length > 0 ? (
    <div className="ml-auto mr-auto shadow-sm m-4 w-75 border rounded p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-6">
            <TextBox
              name="title"
              ref={register}
              type="text"
              defaultValue={post[0].title}
              placeholder="Title"
            />
          </div>
          <div className="col-6 text-right">
            <Controller
              defaultValue={new Date(post[0].date)}
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
          defaultValue={post[0].story}
          placeholder="Write something..."
        />
        <div className="d-flex flex-row justify-content-end mt-4">
          <Link to="/">
            <Button type="button" label="Cancel" class="mr-4 btn btn-danger" />
          </Link>
          <Button type="submit" label="Update Story" class="btn btn-success" />
        </div>
      </form>
    </div>
  ) : (
    <div></div>
  );
};

export default EditPost;
