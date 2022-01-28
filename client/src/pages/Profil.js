import React, { useEffect, useState } from "react";
import Contacts from "../components/Footers/Contacts";
import Footer from "../components/Footers/Footer";
import HeaderDefault from "../components/Headers/HeaderDefault";
import NavBar from "../components/Profil/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import InfoSelf from "../components/Profil/InfoSelf";
import OwnProjects from "../components/Profil/OwnProjects";
import FormPost from "../components/Forms/FormPost";
import { useHttp } from "../hooks/http.hook";

const Profil = () => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const { request } = useHttp();
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  console.log(userInfo);
  useEffect(() => {
    const infPosts = async () => {
      const data = await request(
        "http://localhost:5000/database/user",
        "POST",
        {
          userInfo,
        }
      );
      setUser(data.profil);
      setPosts(data.userPosts);
    };
    infPosts();
  }, [request]);
  console.log(user);
  console.log(posts);
  return (
    <div>
      <HeaderDefault />
      <BrowserRouter>
        <NavBar />
        <Route path="/Profil/info" render={() => <InfoSelf profil={user} />} />
        <Route
          path="/Profil/ownPosts"
          render={() => <OwnProjects projects={posts} />}
        />
        <Route exact path="/Profil/createpost" component={FormPost} />
        <Contacts />
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default Profil;
