import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Signup.css";
import { AppContext } from "../../../contexts/AppContext";

const Signup = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("https://rent-car-api.vercel.app/register", {
          name,
          email,
          password,
        })
        .then((result) => console.log(result));
      dispatch({ type: "SET_IS_LOGGED", payload: true });
    } catch (error) {
      console.log(error);
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
    <div className="signup-container">
      <div className="signup-form-container">
        <form
          className="signup-form"
          action="https://rent-car-api.vercel.app/register"
          method="post"
          onSubmit={handleSubmit}
        >
          <h1 style={{ textAlign: "center", margin: "20px" }}>
            Create Account
          </h1>
          <input
            value={name}
            type="text"
            required
            name="name"
            autoComplete="off"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={email}
            type="email"
            autoComplete="off"
            required
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            required
            autoComplete="off"
            type="password"
            name="password"
            placeholder="Create password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <hr className="hr-11" />
          <h3 style={{ textAlign: "center" }}> OR</h3>
          <hr className="hr-22" />
        </form>
        <button className="login-with-google-btn" onClick={loginwithgoogle}>
          <span>
            <img src="/google.jpeg" alt="" className="google-img" />
          </span>
          Signup with Google
        </button>
        <h4 style={{ margin: "10px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </h4>
      </div>
    </div>
  );
};

export default Signup;
