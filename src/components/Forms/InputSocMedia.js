import { useState } from "react";
import Post from "../../Post";

const InputSocMedia = () => {
  const [media, setMedia] = useState({
    viber: false,
    telegram: false,
    instagram: false,
  });
  const changeHandler = (event) => {
    setMedia({ ...media, [event.target.name]: event.target.value });
  };
  Post.office.socmedia = media;
  console.log(Post.office);
  return (
    <div>
      <p>viber</p>
      <input
        type="checkbox"
        onChange={(e) => {
          setMedia({ ...media, viber: !media.viber });
        }}
      />
      {media.viber ? (
        <input type="text" name="viber" onChange={changeHandler} />
      ) : (
        <p></p>
      )}
      <p>Telegram</p>
      <input
        type="checkbox"
        onChange={(e) => {
          setMedia({ ...media, telegram: !media.telegram });
        }}
      />
      {media.telegram ? (
        <input type="text" name="telegram" onChange={changeHandler} />
      ) : (
        <p></p>
      )}
      <p>Instagram</p>
      <input
        type="checkbox"
        onChange={(e) => {
          setMedia({ ...media, instagram: !media.instagram });
        }}
      />
      {media.instagram ? (
        <input type="text" name="instagram" onChange={changeHandler} />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default InputSocMedia;
