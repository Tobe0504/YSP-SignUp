import React from "react";
import group1 from "../Images and Icons/Group 1.png";
import group2 from "../Images and Icons/Group 2.png";
import group3 from "../Images and Icons/Group 3.png";
import classes from "./HowItWorksSection.module.css";

const HowItWorksSection = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Here’s how it works</h2>

      <div className={classes.subContainer}>
        <div>
          <img src={group1} alt="Number 1" />
          <h4>Register with us</h4>
          <p>Register with us by using your email or phone number</p>
        </div>

        <div>
          <img src={group2} alt="Number 2" />
          <h4>Choose your study path</h4>
          <p>
            Select what you’re preparing for and get an experience based on your
            info
          </p>
        </div>

        <div>
          <img src={group3} alt="Number 3" />
          <h4>Start Learning</h4>
          <p>
            Start learning with a wide variety of resources and track your
            progress
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
