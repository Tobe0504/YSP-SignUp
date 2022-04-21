import React from "react";
import SignUpForm from "./SignUpForm";
import PictureSection from "./PictureSection";
import classes from "./SignUp.module.css"

const SignUp = () => {
  return (
    <div className = {classes.container}>

      <div className= {classes.pictureSection}>
      <PictureSection />
      </div>

      <div className= {classes.formSection}>
        <div className= {classes.signUp}>
        <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
