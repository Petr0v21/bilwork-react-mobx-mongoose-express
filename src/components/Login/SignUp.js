import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    politic: false,
    terms: false,
  });
  const { loading, request, error, clearError } = useHttp();
  const message = useMessage();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const checkInputs = () => {
    const empties = {};
    for (let key in form) {
      if (form[key] === "") {
        empties[key] = true;
      }
    }
    return empties;
  };

  const registerHandler = async () => {
    try {
      const errors = checkInputs();
      const isEmpty = Object.keys(errors).length === 0;
      if (isEmpty) {
        const data = await request(
          "http://localhost:5000/auth/singup",
          "POST",
          {
            ...form,
          }
        );
        message(data.message);
      } else {
        console.log(errors);
      }
    } catch (e) {}
  };

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  return (
    <div className="InputsSignUp">
      <h1>Sign Up</h1>
      <form>
        <label>
          <p>Name User`s </p>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ivan"
            onChange={changeHandler}
          />
        </label>
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
        <label>
          <p>
            <input
              type="checkbox"
              id="politic"
              name="politic"
              onChange={() => setForm({ ...form, politic: !form.politic })}
            />
            Agree with <NavLink to="/">Politic Confidence</NavLink>
          </p>
        </label>
        <label>
          <p>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onChange={() => setForm({ ...form, terms: !form.terms })}
            />
            Agree with <NavLink to="/">Terms and conditions</NavLink>
          </p>
        </label>
        <div>
          <button type="button" onClick={registerHandler} disabled={loading}>
            Sign Up
          </button>
        </div>
        <label>
          <p>
            Have you an account? Go to link{" "}
            <NavLink to="/SignIn">Sign In</NavLink>
          </p>
        </label>
      </form>
    </div>
  );
};
export default SignUp;
