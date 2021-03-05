import { Link } from "react-router-dom";

import Button from "../components/Button";

import * as ROUTES from "../constant/routes";

import diary_illustration from "../assets/images/diary_illustration.png";

const Dashboard = () => {
  return (
    <div className="row ml-auto mr-auto shadow-sm m-4 w-75 border rounded p-4">
      <div className="col-6">
        <h6 className="text-danger mb-4">WELCOME</h6>
        <h4 className="text-success mb-4">Let's Start Writing!</h4>
        <p className="mb-5">
          You are now ready to start writing about your day. Share us
          everything. We won't tell anyone.
        </p>
        <Link to={ROUTES.createPost}>
          <Button
            type="button"
            label="Write Your Story!"
            class="btn btn-success"
          />
        </Link>
      </div>
      <div className="col-6 text-right pr-0">
        <img
          height="300"
          width="300"
          src={diary_illustration}
          alt="Diary Illustration"
        />
      </div>
    </div>
  );
};

export default Dashboard;
