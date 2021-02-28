import Button from "../components/Button";
import TextBox from "../components/TextBox";
import TextArea from "../components/TextArea";
import DateControl from "../components/DateControl";

const CreatePost = () => {
  return (
    <div className="ml-auto mr-auto shadow-sm m-4 w-75 border rounded p-4">
      <div className="row">
        <div className="col-6">
          <TextBox type="text" placeholder="Title" />
        </div>
        <div className="col-6 text-right">
          <DateControl />
        </div>
      </div>
      <TextArea rows="12" placeholder="Write something..." />
      <div className="d-flex flex-row justify-content-end mt-4">
        <Button type="button" label="Cancel" class="mr-4 btn btn-danger" />
        <Button type="button" label="Add New Story" class="btn btn-success" />
      </div>
    </div>
  );
};

export default CreatePost;
