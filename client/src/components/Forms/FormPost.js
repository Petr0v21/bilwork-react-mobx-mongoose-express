import React from "react";
import InputDescription from "./InputDecsription";
import SelectCategory from "./SelectCategory";
import SelectCity from "./SelectCity";
import InputPhone from "./InputPhone";
import InputName from "./InputName";
import InputTitle from "./InputTitle";
import InputMail from "./InputMail";
import ButtonPost from "./ButtonPost";
import InputSocMedia from "./InputSocMedia";
import InputImg from "./InputImg";

const FormPost = () => {
  return (
    <div>
      <h2 className="TitleCreatePost">Создать объявление</h2>
      <div className="InputPost">
        <InputTitle />
        <InputName />
        <InputDescription />
        <SelectCity />
        <SelectCategory />
        <InputPhone />
        <InputMail />
        <InputImg />
        <InputSocMedia />
        <ButtonPost />
      </div>
    </div>
  );
};

export default FormPost;
