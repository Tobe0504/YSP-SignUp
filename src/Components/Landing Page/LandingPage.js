import React from "react";
import Description from "./Description";
import LandingPageHeader from "./LandingPageHeader";
import classes from "./LandingPage.module.css";
import AboutSection from "./AboutSection";
import FeatureSummary from "./FeatureSummary";
import FeatureSection from "./FeatureSection";
import HowItWorksSection from "./HowItWorksSection";
import DownloadAppSection from "./DownloadAppSection";

const LandingPage = () => {
  return (
    <div>
      <div className={classes.headSection}>
        <LandingPageHeader />
        <Description />
      </div>
      <AboutSection />
      <FeatureSummary />
      <FeatureSection />
      <HowItWorksSection />
      <DownloadAppSection />
    </div>
  );
};

export default LandingPage;
