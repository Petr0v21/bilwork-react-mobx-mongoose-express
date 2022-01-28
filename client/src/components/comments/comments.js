import React, { useState, useEffect } from "react";
// import Rating from "./Rating";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";

const Comments = (props) => {
  const id = props.post._id;
  const [comment, setComment] = useState({
    stars: 0,
    nameComentators: "",
    text: "",
    id: "",
  });

  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();

  const changeHandlerComent = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };
  const publishComent = async () => {
    try {
      setComment({ ...comment, id: id });
      const inf = await request(
        "http://localhost:5000/database/posts/comments",
        "POST",
        {
          ...comment,
        }
      );
      alert(inf.message);
    } catch (e) {}
  };
  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  //   const handleRatingChange = (rating) => {
  //     setTimeout((_) => {
  //       setComment({
  //         ...comment,
  //         stars: rating,
  //       });
  //       console.log(comment);
  //     }, 300);
  //   };
  //   const handleRatingChange = (rating) => {
  //     setTimeout((_) => {
  //       alert(`New rating is ${rating}`);
  //     }, 300);
  //   };
  return (
    <div className="">
      {/* <Rating value="3.5" onClick={handleRatingChange} /> */}
      <input
        placeholder="Name"
        name="nameComentators"
        onChange={changeHandlerComent}
      />
      <input placeholder="text" name="text" onChange={changeHandlerComent} />
      <button disabled={loading} onClick={publishComent} />
    </div>
  );
};
export default Comments;
