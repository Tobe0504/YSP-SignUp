import React from "react";
import classes from "./Footer.module.css";
import yspLogo from "./Images and Icons/YSP Logo 1.png";
import ig from "./Images and Icons/ig.png";
import fb from "./Images and Icons/fb.png";
import twitter from "./Images and Icons/twitter.png";
import linkedIn from "./Images and Icons/linkedIn.png";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div className={classes.socialLinks}>
          <a href="#0">Terms of Services</a>{" "}
          <a href="#0" className={classes.rightLink}>
            FAQs{" "}
          </a>
          <a href="#0">Privacy Policy</a>{" "}
          <a href="#0" className={classes.rightLink}>
            Contact Us{" "}
          </a>
        </div>
        <div className={classes.logoSection}>
          <img src={yspLogo} alt="YSP Logo" />
          <p>Making learning Interesting again</p>
        </div>
        <div className={classes.socialsSection}>
          <a href="https://www.instagram.com/yourstudypath/">
            <img src={ig} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/YourStudyPath/">
            <img src={fb} alt="Faceebook" />
          </a>
          <a href="https://twitter.com/yourstudypath">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/company/yourstudypath/ ">
            <img src={linkedIn} alt="TikTok" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
