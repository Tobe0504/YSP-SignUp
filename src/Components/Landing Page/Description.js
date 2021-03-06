import React from "react";
import classes from "./Description.module.css";

const Description = () => {
  return (
    <div className={classes.container}>
      <h1>Learn To Earn The Grade Of Your Dreams</h1>

      <p>
        Learn and understand the way you wish, and pass all your exams in one
        sitting.
      </p>

      <a href="https://staging.yourstudypath.com/onboarding">
        <button>Get Started</button>
      </a>
    </div>
  );
};

export default Description;
