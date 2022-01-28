import { useState } from "react";
import FileBase64 from "react-file-base64";
import Post from "../../Post";

const InputMail = () => {
  const [img, setImg] = useState({});
  Post.office.img = img;
  console.log(Post.office);
  return (
    <div>
      <FileBase64
        multiple={false}
        onDone={({ base64 }) => {
          setImg({ ...img, image: base64 });
        }}
      />
    </div>
  );
};
export default InputMail;
