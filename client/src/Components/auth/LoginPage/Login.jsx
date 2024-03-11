import React, { useContext, useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../contexts/AppContext";

const Login = () => {
  const { dispatch } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://rent-car-api.vercel.app/login",
        {
          email,
          password,
        }
      );
      const { token, user, message } = response.data;
      sessionStorage.setItem("token", token);
      dispatch({ type: "SET_IS_LOGGED", payload: true });
      if (message === "Login successful") {
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("Internal Server Error");
      }
    }
  };

  const loginwithgoogle = () => {
    dispatch({ type: "SET_IS_LOGGED", payload: true });
    window.open(
      "https://rent-car-api.vercel.app/auth/google/callback",
      "_self"
    );
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Login to your Account</h2>
        <button className="login-with-google-btn" onClick={loginwithgoogle}>
          <span>
            <img src="/google.jpeg" alt="" className="google-img" />
          </span>
          Login With Google
        </button>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="or-opt">
            <hr className="hr-1" />
            <h3> OR</h3>
            <hr className="hr-2" />
          </div>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && (
            <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
          )}
          <button type="submit" className="login-btn">
            Login
          </button>
          <h4 className="create-acc">
            Don't have an Account? <Link to="/register">Create one</Link>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
