import React, { useState, useRef } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validation";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BODY_LOGO } from "../utils/Constants";

const Login = () => {
  const [isSignIn, setIsSign] = useState(true);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    // console.log(email)
    // console.log(password)

    if (!isSignIn) {
      const result = Validate(
        email.current.value,
        password.current.value,
        name.current.value
      );
      setMessage(result);
    } else {
      const result = Validate(email.current.value, password.current.value);
      setMessage(result);
    }

    setMessage((prevMessage) => {
      if (prevMessage) return prevMessage;
      if (!isSignIn) {
        //Sign Up Logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: "",
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );
                setMessage("Registered Suucessful !!");
              })
              .catch((error) => {
                // An error occurred
                setMessage(error.message);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorMessage);
          });
      } else {
        // Sign In Logic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setMessage("Login Successful !!");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage("User Not found, please check your credentials !!");
          });
      }
    });
  };

  const toggleSignIn = () => {
    setIsSign(!isSignIn);
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    if (name.current) name.current.value = "";
    setMessage(null);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BODY_LOGO}
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-lg">
        <h1 className="text-2xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 bg-gray-600 w-full rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 my-4 bg-gray-600 w-full rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 bg-gray-600 w-full rounded-md"
        />
        <p className="text-sm text-orange-500">{message}</p>
        <button
          type="submit"
          className="p-2 my-5 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm py-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already a Registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
