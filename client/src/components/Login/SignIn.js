import { useContext, useState, useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";
import { AuthContext } from "../../context/AuthContext";

const SignIn = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request("http://localhost:5000/auth/login", "POST", {
        ...form,
      });
      auth.login(data.token, data.userId);
      console.log(localStorage);
    } catch (e) {}
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Email</p>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="bilwork@gmail.com"
            onChange={changeHandler}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            onChange={changeHandler}
          />
        </label>
        <div>
          <button type="button" onClick={loginHandler} disabled={loading}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
