import "../App.css";
import React from "react";
import Contacts from "../components/Footers/Contacts";
import Footer from "../components/Footers/Footer";
import HeaderDefault from "../components/Headers/HeaderDefault";
import FormPost from "../components/Forms/FormPost";

const CreatePost = () => {
  return (
    <div className="CreatePost">
      <HeaderDefault />
      <FormPost />
      <Contacts />
      <Footer />
    </div>
  );
};
export default CreatePost;
