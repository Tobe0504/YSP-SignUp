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
          We are a high-end Education Technology platform designed to provide
          students with affordable High quality prerecorded classes and
          Materials to ensure every student achieves the grade of their dreams.
        </p>
        <p>
          We are passionate about investing in the lives of students through the
          use of educational videos delivered by experts to engage and improve
          their learning.
        </p>
        <p>
          Our goal is to impact practical knowledge of things taught in schools
          to widen students’ understanding.
        </p>
        <a href="https://app.yourstudypath.com/">
          <button>Enroll Now</button>
        </a>
      </div>

      <div className={classes.imageSection}>
        <img src={yspTeam} alt="YSP Team" />
      </div>
    </div>
  );
};

export default AboutSection;
