import React from "react";
import PostSmall from "../Content/PostSmall";

const OwnProjects = (props) => {
  console.log(props);
  return (
    <div>
      {props.projects.map((item, index) => (
        <div key={index}>
          <PostSmall info={item} />
        </div>
      ))}
    </div>
  );
};

export default OwnProjects;
