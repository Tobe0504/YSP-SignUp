import React from "react";
import Logo from "../Images and Icons/YSP Logo 3.png";
import classes from "./LandingPageHeader.module.css";
import menuOpener from "../Images and Icons/menu opener.png";

const LandingPageHeader = () => {
  const openSideMenu = () => {
    document.getElementById("sideMenu").style.width = "100%";
    // document.getElementById("main").style.marginLeft = "250px";
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
        <a href="https://app.yourstudypath.com/">Log In</a>
        <a href="https://app.yourstudypath.com/">
          <button>Start Learning</button>
        </a>
      </div>

      <div id="sideMenu" className={classes.sideNav}>
        <button className={classes.btnClose} onClick={closeSideMenu}>
          &times;
        </button>
        <a
          href="https://app.yourstudypath.com/"
          className={classes.sideNavLink}
        >
          Login
        </a>
        <div className={classes.getStartedbutton}>
          <a href="https://app.yourstudypath.com/">
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

export default LandingPageHeader;
