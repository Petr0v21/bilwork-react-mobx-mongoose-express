import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../hooks/auth.hook";

const NavBar = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <NavLink to="/Profil/info">Inforation about yourself</NavLink>
      <NavLink to="/Profil/ownPosts">own Posts</NavLink>
      <NavLink to="/Profil/createpost">CreatePost</NavLink>
      <button onClick={() => auth.logout()}>Exit</button>
    </div>
  );
};

export default NavBar;
