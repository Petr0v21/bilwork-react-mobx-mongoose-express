import React from "react";

const PostSmall = (props) => {
  return (
    <div className="PostSmall">
      <div className="PostImagesmall"></div>
      <div className="PostTitleSmall">{props.info.title}</div>
      <div className="PostDescSmall">{props.info.description}</div>
      <div className="PostCategorySmall">{props.info.category}</div>
      <div className="PostCitySmall">{props.info.city}</div>
      <div className="PostPhoneSmall">{props.info.phone}</div>
    </div>
  );
};
export default PostSmall;
