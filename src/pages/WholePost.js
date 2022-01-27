import "../App.css";
import React, { useState } from "react";
import Comments from "../components/comments/comments";

const WholePost = (props) => {
  return (
    <div className="">
      <div className="GoBack" onClick={props.viewPage}>
        {"<-"}
      </div>
      {props.postData.title}
      <Comments post={props.postData} />
    </div>
  );
};
export default WholePost;
