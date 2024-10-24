import React from "react";
import { useState } from "react";
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export const SignInComp = () => {
  const [formValues, setFormValues] = useState({
    email: "parthagarwalchitkara@gmail.com",
    password: "RICHA1984anurag$$",
  });

  const handleSignIn = () => {
    const { email, password } = formValues;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("You are signed in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Check console for error ");
      });
  };
  return (
    <>
      <div>{JSON.stringify(formValues)}</div>
      <div>
        <input
          type="email"
          placeholder="type email"
          value={formValues.email}
          onChange={(e) => {
            setFormValues({ ...formValues, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="type password"
          value={formValues.password}
          onChange={(e) => {
            setFormValues({ ...formValues, password: e.target.value });
          }}
        />
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </>
  );
};
