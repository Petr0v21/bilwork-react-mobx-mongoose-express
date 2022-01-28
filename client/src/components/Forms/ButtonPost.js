import React from "react";
import Post from "../../Post";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";

const CleanPostObject = () => {
  Post.office.name = "";
  Post.office.description = "";
  Post.office.title = "";
};

const ButtonPost = () => {
  const { loading, request } = useHttp();
  const message = useMessage();

  const SendInf = async () => {
    try {
      const data = Post.office;
      const post = await request(
        "http://localhost:5000/database/posts",
        "POST",
        {
          ...data,
        }
      );
      message(post.message);
      CleanPostObject();
    } catch (e) {}
  };

  return (
    <div>
      <button onClick={SendInf} disabled={loading} className="ButtonSendPost">
        Send
      </button>
    </div>
  );
};
export default ButtonPost;
