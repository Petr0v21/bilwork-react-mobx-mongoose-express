import React, { useState } from "react";
import Filt from "../../Filt";
import Post from "../../Post";

const InputsPost = (props) => {
  const [City, setCity] = useState("Київ");

  function handleSelectChangeCity(event) {
    setCity(event.target.value);
  }
  props.filt ? (Filt.manf.city = City) : (Post.office.city = City);
  return (
    <div>
      <form>
        <select
          value={City}
          onChange={handleSelectChangeCity}
          className="CitySelectPost"
        >
          <option value="Тульчин">Тульчин</option>
          <option value="Мазурівка">Мазурівка</option>
          <option value="Вінниця">Вінниця</option>
          <option value="Київ">Київ</option>
        </select>
      </form>
    </div>
  );
};

export default InputsPost;
