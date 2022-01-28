import React from "react";
import StarRating from "react-svg-star-rating";

function Rating({ value, onClick }) {
  return (
    <div>
      {value}
      <StarRating
        isHalfRating={true}
        handleOnClick={onClick}
        initialRating={value}
      />
    </div>
  );
}

export default Rating;
