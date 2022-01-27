import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Choose = () => {
  const auth = useContext(AuthContext);
  console.log(auth.isAuthenticated);
  return (
    <div className="DivForButton">
      <div>
        <NavLink to="/Profil">
          {auth.isAuthenticated ? (
            <div className="ButtonSignIn">Личный кабинет</div>
          ) : (
            <div className="ButtonSignIn">Войти</div>
          )}
        </NavLink>
      </div>
      <div>
        <NavLink to="/CreatePost">
          <div className="ButtonCreatePost">Создать объявление</div>
        </NavLink>
      </div>
    </div>
  );
};
export default Choose;
