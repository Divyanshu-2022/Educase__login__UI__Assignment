import React, { useState } from "react";
import "./form.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import logo1 from "../Form/logo1.png";
// import { FaReact } from "react-icons/fa";
function Form() {
  const [login, setLogin] = useState(true);
  return (
    <section className="form">
      <div className="logo__name">
        <div className="logo">
          <img src={logo1} alt="icon" />
        </div>
        <br />
        <div className="company__name">
          <p>Educase India Private Limited</p>
        </div>
      </div>
      <br />
      <article>
        <div className="btn__container">
          <button
            type="button"
            className={login ? "btn active" : "btn"}
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </button>
          <button
            type="button"
            className={!login ? "btn active" : "btn"}
            onClick={() => {
              setLogin(true);
            }}
          >
            Sign Up
          </button>
        </div>
        <br />
        <form className="form__action">
          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <button className="login__button">Log In</button>
          <p className="forgot__password" href="#">
            Forgot Password?
          </p>
          <br />
          <p className="login__with">or login with</p>
        </form>
      </article>
      <div className="login__options">
        <div className="login__icons">
          <div className="icons">
            <FcGoogle className="google" />
          </div>
          <div className="icons">
            <FaFacebookF className="facebook" />
          </div>
          <div className="icons">
            <BsTwitter className="twitter" />
          </div>
        </div>
        <br />
        <p className="last__text">
          Don't have an Account?<span>Create new now!</span>
        </p>
        <p className="last__text">
          By singing up, you agree with our{" "}
          <span className="underline">Terms & Condition</span>
        </p>
      </div>
    </section>
  );
}

export default Form;
