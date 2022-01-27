import "../App.css";
import React from "react";
import Contacts from "../components/Footers/Contacts";
import Footer from "../components/Footers/Footer";
import HeaderDefault from "../components/Headers/HeaderDefault";
import Content from "../components/Content/Content";

const Category = (props) => {
  return (
    <div className="Category">
      <HeaderDefault />
      <Content kind={props.info} />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Category;
