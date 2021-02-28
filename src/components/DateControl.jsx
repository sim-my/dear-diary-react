import { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateControl = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="form-group pb-2">
      <DatePicker
        className="form-control"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        style = {{
          zIndex:10
        }
          
        }
      />
    </div>
  );
};

export default DateControl;
