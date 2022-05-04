import React from "react";
// import Description from "./Description";
// import LandingPageHeader from "./LandingPageHeader";
import LandingPageHeader2 from "./LandingPageHeader2";
import Description2 from "./Description2";
import classes from "./LandingPage.module.css";
import AboutSection from "./AboutSection";
import FeatureSummary from "./FeatureSummary";
import FeatureSection from "./FeatureSection";
import HowItWorksSection from "./HowItWorksSection";
import DownloadAppSection from "./DownloadAppSection";
import EmailSubscription from "./EmailSubscription";

const LandingPage = () => {
  return (
    <div>
      <div className={classes.headSection}>
        {/* <LandingPageHeader /> */}
        <LandingPageHeader2 />
        {/* <Description /> */}
        <Description2 />
      </div>
      <AboutSection />
      <FeatureSummary />

      <div className={classes.contactSection}>
        <HowItWorksSection />
        <EmailSubscription />
        <FeatureSection />
      </div>
      <DownloadAppSection />
    </div>
  );
};

export default LandingPage;
