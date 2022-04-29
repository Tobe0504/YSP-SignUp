import React from "react";
import classes from "./Description2.module.css";
import vrImage from "../Images and Icons/VR 1.png";
import schoolTeen1 from "../Images and Icons/school teen 1.png";
import schoolTeen2 from "../Images and Icons/school teen 2.png";
import scribble from "../Images and Icons/Scribble.png";
import scribble2 from "../Images and Icons/Scribble 2.png";
import scribble3 from "../Images and Icons/Scribble 3.png";

const Description2 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textsection}>
        <img src={scribble2} alt="Scribble 2" className={classes.scribble2} />
        <h1>
          Learn To Earn The
          <br />
          Grade Of Your Dreams
        </h1>
        <img src={scribble3} alt="Scribble 2" className={classes.scribble3} />

        <p>
          Learn and understand the way you wish, and pass all your exams in one
          sitting.
        </p>

        <a href="https://app.yourstudypath.com/">
          <button>Get Started</button>
        </a>
      </div>

      <div className={classes.imageSection}>
        <div className={classes.imageSubSection}>
          <div className={classes.imageSubSection1}>
            <img src={schoolTeen2} alt=" School teen" />
            <img src={scribble} alt="scribble" />
          </div>
          <div className={classes.imageSubSection2}>
            <img src={vrImage} alt="Virtual Reality" />
            <img src={schoolTeen1} alt=" School teen " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description2;
