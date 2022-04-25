import React from "react";
import classes from "./Footer.module.css";
import yspLogo from "./Images and Icons/YSP Logo 1.png";
import ig from "./Images and Icons/ig.png";
import fb from "./Images and Icons/fb.png";
import twitter from "./Images and Icons/twitter.png";
// import tiktok from "./Images and Icons/tiktok.png";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <ul>
          <li>
            <a href="#0">Terms of Services</a>{" "}
          </li>
          <li>
            <a href="#0">FAQs </a>
          </li>
          <li>
            <a href="#0">Privacy Policy</a>{" "}
          </li>
          <li>
            <a href="#0">Contact Us </a>
          </li>
        </ul>

        <div className={classes.logoSection}>
          <img src={yspLogo} alt="YSP Logo" />
          <p>Acing your papers in the most interesting way</p>
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
          {/* <a href="#0">
            <img src={tiktok} alt="TikTok" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
