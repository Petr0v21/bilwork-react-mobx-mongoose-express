import { useState } from "react";
import Post from "../../Post";

const InputMail = () => {
  const [mail, setMail] = useState("");
  Post.office.email = mail;

  const changeHandler = (event) => {
    setMail(event.target.value);
  };
  console.log(Post.office);
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        className="Email"
        onChange={changeHandler}
      />
    </div>
  );
};
export default InputMail;
