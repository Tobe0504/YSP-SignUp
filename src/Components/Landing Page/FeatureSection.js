import React from "react";
import FeatureContentSection from "./FeatureContentSection";
import classes from "./FeatureSection.module.css";

const FeatureSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.featureHeader}>
        <h2>Our Features</h2>
        <p>
          From video lessons to mock exams, we’re providing you with the best
          resources you need to succeed
        </p>
      </div>
      <div>
        <FeatureContentSection />
      </div>
    </div>
  );
};

export default FeatureSection;
