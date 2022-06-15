import React from "react";
import Logo from "../Images and Icons/YSP Logo 2.png";
import menuOpener from "../Images and Icons/menu opener 2.png";
import classes from "./LandingPageHeader2.module.css";

const LandingPageHeader2 = () => {
  const openSideMenu = () => {
    document.getElementById("sideMenu").style.width = "100%";
  };

  const closeSideMenu = () => {
    document.getElementById("sideMenu").style.width = "0%";
  };

  return (
    <div className={classes.container}>
      <div className={classes.logoSection}>
        <img src={Logo} alt="YSP LOGO" />
      </div>

      <div className={classes.actionSection}>
        <a href="https://staging.yourstudypath.com/login">Log In</a>
        <a
          href="https://staging.yourstudypath.com/onboarding"
          className={classes.learnButton}
        >
          <button>Start Learning</button>
        </a>
      </div>

      <div id="sideMenu" className={classes.sideNav}>
        <button className={classes.btnClose} onClick={closeSideMenu}>
          &times;
        </button>
        <a
          href="https://staging.yourstudypath.com/login"
          className={classes.sideNavLink}
        >
          Login
        </a>
        <div className={classes.getStartedbutton}>
          <a href="https://staging.yourstudypath.com/onboarding">
            <button>Get Started</button>
          </a>
        </div>
      </div>
      <div className={classes.sideNavOpener}>
        <img src={menuOpener} alt="Menu" onClick={openSideMenu} />
      </div>
    </div>
  );
};

export default LandingPageHeader2;
