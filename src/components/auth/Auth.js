import { useState, useRef, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";

import LoadingSpinner from "../ui/LoadingSpinner";

import logo from "../../img/twitter-logo.png";
import classes from "./Auth.module.css";

const Auth = () => {
  const history = useHistory();

  const [authLogin, setAuthLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPassInputRef = useRef();

  const toggleAuthHandler = () => {
    setAuthLogin((prevState) => !prevState);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!authLogin) {
      const enteredConfirmPass = confirmPassInputRef.current.value;
      if (enteredConfirmPass !== enteredPassword) {
        alert("Passwords must match.");
        setIsLoading(false);
        return;
      }
    }

    let url;
    if (authLogin) {
      // url for firebase login api
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA23fsK0n7KHR8wY0IPseplAOtnzQ9ghiM`;
    } else {
      // url for firebase create account api
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA23fsK0n7KHR8wY0IPseplAOtnzQ9ghiM`;
    }

    // sending request to api and getting a response object
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            const errorMessage = data.error.message;

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        history.replace("/home");
      })
      .catch((err) => {
        alert(err);
      });
  };

  // changing the document title everytime authLogin state changes
  useEffect(() => {
    if (authLogin) {
      document.title = `Twitter | Login`;
    } else {
      document.title = `Twitter | Create Account`;
    }
  }, [authLogin]);

  // form button and loading spinner conditional variables for leaner return code
  let formAccessContent;
  if (isLoading) {
    formAccessContent = <LoadingSpinner />;
  } else {
    formAccessContent = (
      <Fragment>
        <button
          className={`${classes["user-info__access"]} ${classes["btn-border"]}`}
        >
          {authLogin ? "Login" : "Create Account"}
        </button>
        <p>
          <span>
            {authLogin ? "New to Twitter?" : "Already have an account?"}
          </span>{" "}
          <span
            className={classes["user-info__sign-up"]}
            onClick={toggleAuthHandler}
          >
            {authLogin ? "Sign up here" : "Sign in"}
          </span>
        </p>
      </Fragment>
    );
  }

  return (
    <div className={classes.auth}>
      <div className={classes["auth__attention"]}>
        <div className={classes["auth__attention--border"]}>
          <img
            className={classes["auth__attention--logo"]}
            src={logo}
            alt="twitter logo"
          />
        </div>
      </div>

      <form className={classes["user-info"]} onSubmit={submitFormHandler}>
        {/* Inputs container */}
        <div className={classes["user-info__inputs"]}>
          {/* User email input */}
          <div className={classes["user-info__access"]}>
            <i className={`far fa-envelope ${classes.icon}`} />
            <input
              type="email"
              placeholder="Phone, Email or Username"
              ref={emailInputRef}
            />
          </div>
          {/* User password input */}
          <div className={classes["user-info__access"]}>
            <i className={`fas fa-unlock ${classes.icon}`} />
            <input
              type="password"
              placeholder="Password"
              ref={passwordInputRef}
            />
          </div>
          {/* User confirm password input if creating account */}
          {!authLogin && (
            <div className={classes["user-info__access"]}>
              <i className={`fas fa-lock ${classes.icon}`} />
              <input
                type="password"
                placeholder="Confirm Password"
                ref={confirmPassInputRef}
              />
            </div>
          )}
          <p>{authLogin ? "Forgot password?" : "Terms and Services"}</p>
        </div>
        <div className={classes["user-info__button--container"]}>
          {formAccessContent}
        </div>
      </form>
    </div>
  );
};

export default Auth;
