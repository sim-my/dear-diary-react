import date from "../assets/images/date.png"

import "../assets/styles/dateViewer.css"
import React from "react";

const DateViewer =  () => {

    

    return(
        <div className="date-viewer">
            <img className="date-img" src={date} alt="Date"/>
            <p className="month">Feb</p>
            <p className="date">28th</p>
            <p className="year">Sun, 2021</p>
        </div>
    )

};

export default DateViewer;