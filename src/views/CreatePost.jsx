import Button from "../components/Button";
import TextBox from "../components/TextBox";
import TextArea from "../components/TextArea";
import DateControl from "../components/DateControl";
import { Controller, useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import * as ROUTES from "../constant/routes";

import * as post from "../service/post";

const CreatePost = () => {
  const { register, handleSubmit, control } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    post.createPost(data);
    history.push(ROUTES.posts);
  };

  return (
    <div className="ml-auto mr-auto shadow-sm m-4 w-75 border rounded p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-6">
            <TextBox
              name="title"
              ref={register}
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="col-6 text-right">
            <Controller
              defaultValue={new Date()}
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
          placeholder="Write something..."
        />
        <div className="d-flex flex-row justify-content-end mt-4">
          <Link to={ROUTES.dashboard}>
            <Button type="button" label="Cancel" class="mr-4 btn btn-danger" />
          </Link>
          <Button type="submit" label="Add New Story" class="btn btn-success" />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
