import React from "react";
import Feature1 from "../Images and Icons/Feature Image 1.png";
import Feature2 from "../Images and Icons/Feature Image 2.png";
import Feature3 from "../Images and Icons/Feature Image 3.png";
import classes from "./FeatureContentSection.module.css";

const FeatureContentSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div className={classes.imageSection}>
          <img src={Feature1} alt="Feature 1" />
        </div>

        <div className={classes.textSection}>
          <hr />
          <span className={classes.aim}>Our Classes</span>
          <h2 className={classes.vettedExperts}>
            Start learning with vetted experts
          </h2>
          <p>
            Classes are taught by well experienced teachers with the aid of
            technology to keep you excited and make learning interesting again.
          </p>
        </div>
      </div>

      <div className={classes.subContainer}>
        <div className={classes.textSection}>
          <hr />
          <span className={classes.aim}>Our Resources</span>
          <h2>Check out materials you need to excel in exams</h2>
          <p>
            We provide high quality and well detailed study materials you need
            to excel in your next exam.
          </p>
        </div>

        <div className={classes.imageSection}>
          <img src={Feature3} alt="Feature 1" />
        </div>
      </div>

      <div className={classes.subContainer}>
        <div className={classes.imageSection}>
          <img src={Feature2} alt="Feature 1" />
        </div>
        <div className={classes.textSection}>
          <hr />
          <span className={classes.aim}>Our Tutors</span>
          <h2>Whenever you need help we’ll be there to answer</h2>
          <p>
            Connect with our expert tutors whenever you might need their help.
            Whatever question you might have they’re always ready to answer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureContentSection;
