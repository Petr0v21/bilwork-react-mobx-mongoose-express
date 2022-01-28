import { useState } from "react";
import Post from "../../Post";

const InputTitle = () => {
  const [TitlePost, setTitlePost] = useState("");
  Post.office.title = TitlePost;
  return (
    <div>
      <input
        type="text"
        placeholder="Заголовок"
        className="TitlePost"
        value={TitlePost}
        onChange={(event) => setTitlePost(event.target.value)}
      />
    </div>
  );
};
export default InputTitle;
