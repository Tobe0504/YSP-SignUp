import React from "react";
import classes from "./AboutSection.module.css";
import yspTeam from "../Images and Icons/YSP Team.png";

const AboutSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textSection}>
        <hr />
        <span className={classes.aim}>Our Aim</span>
        <h2>About Your Study Path</h2>
        <p>
          We are a high end, technolgy oriented education platform providing
          students with affordable and high quality eductional materials .
        </p>
        <p>
          Our goal is to improve the eductional sector and economy of the
          country.
        </p>
        <button>Enroll Now</button>
      </div>

      <div className={classes.imageSection}>
        <img src={yspTeam} alt="YSP Team" />
      </div>
    </div>
  );
};

export default AboutSection;
