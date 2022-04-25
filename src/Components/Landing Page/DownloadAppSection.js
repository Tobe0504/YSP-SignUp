import React from "react";
import DownloadSection from "../Images and Icons/DownloadSection.png";
import classes from "./DownloadAppSection.module.css";

const DownloadAppSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div className={classes.textSection}>
          <h1>
            Get <span className={classes.ysp}>Your Study Path</span> App for
            free !
          </h1>
          <p>
            Your study path app will be available on google play store and the
            app store soon,
          </p>
          <span className={classes.comingSoon}>Coming Soon...</span>
        </div>
        <div className={classes.imageSection}>
          <img src={DownloadSection} alt="Download Section" />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
