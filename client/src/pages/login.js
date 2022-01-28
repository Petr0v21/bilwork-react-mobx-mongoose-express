import "../App.css";
import React, { useState } from "react";
import Contacts from "../components/Footers/Contacts";
import Footer from "../components/Footers/Footer";
import HeaderDefault from "../components/Headers/HeaderDefault";
import SignIn from "../components/Login/SignIn";
import SignUp from "../components/Login/SignUp";

const Login = () => {
  const [regist, setRegist] = useState(true);
  return (
    <div className="">
      <HeaderDefault />
      {regist ? <SignIn /> : <SignUp />}
      <div onClick={() => setRegist(!regist)}>
        <label>{regist ? "Sign up if you have noy account" : "signIn"}</label>
      </div>
      <Contacts />
      <Footer />
    </div>
  );
};
export default Login;
