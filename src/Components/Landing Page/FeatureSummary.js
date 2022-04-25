import React from "react";
import classes from "./FeatureSummary.module.css";
import Lecture from "../Images and Icons/Lecture icon.png";
import Recurrent from "../Images and Icons/Recurent icon.png";
import Graduant from "../Images and Icons/Graduation icon.png";

const FeatureSummary = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div>
          <img src={Lecture} alt="Lecturer icon" />
          <h4>Experienced Teachers</h4>
        </div>

        <div>
          <img src={Recurrent} alt="Recurrent icon" />
          <h4>Quality Study Resources</h4>
        </div>

        <div>
          <img src={Graduant} alt="Graduation icon" />
          <h4>Social Learning</h4>
        </div>
      </div>
    </div>
  );
};

export default FeatureSummary;
