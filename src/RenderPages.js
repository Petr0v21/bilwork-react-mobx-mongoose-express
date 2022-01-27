import React from "react";
import Main from "./pages/Main";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Profil from "./pages/Profil";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/login";
import Category from "./pages/Category";

// const Layout = ({children}) => {
//   return <div>
//     <div className='header'
//     style={{
//       height: '60px',
//       width: '100%',
//       background: 'lightgray',
//     }}>Header</div>
//     <div className='main'>
//     {children}
//     </div>
//     <div className='footer'
//     style={{
//       height: '60px',
//       width: '100%',
//       background: 'lightgray',
//     }}>Footer</div>
//   </div>
// }

const RenderPages = () => {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  // const routes = useRoutes(isAuthenticated)

  return (
    <div>
      <AuthContext.Provider
        value={{
          token,
          login,
          logout,
          userId,
          isAuthenticated,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route
              path="/Projecting"
              render={() => <Category info="Проектирование" />}
            />
            <Route
              path="/Design"
              render={() => <Category info="Дизайн интерьера" />}
            />
            <Route
              path="/Building"
              render={() => <Category info="Строительство" />}
            />
            <Route
              path="/Repair"
              render={() => <Category info="Ремонт квартир" />}
            />
            {isAuthenticated && (
              <Route path="/CreatePost" component={CreatePost} />
            )}
            {isAuthenticated ? (
              <Route path="/Profil" component={Profil} />
            ) : (
              <Route path="/Profil" component={Login} />
            )}
            <Redirect to="/Profil" />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
};
export default RenderPages;
