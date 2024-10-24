import React from "react";
import NewNavbar from "../components/NewNavbar";
import SignUp from "../components/SignUp";
import TrackHabit from "../components/TrackHabit";
import ReflectionForm from "../components/ReflectionForm";
import { SignInComp } from "../components/SignInComp";

function SignupPage() {
  return (
    <>
      <NewNavbar />
      <SignUp />
      <SignInComp />
    </>
  );
}

export default SignupPage;
