import React from "react";
import classes from "./EmailSubscription.module.css";

const EmailSubscription = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <h2>Stay In Touch</h2>

        <p>
          Subscribe to our newsletter to be the first to know when we launch,
          and get frequent updates and reminders along the way!
        </p>

        <div className={classes.fillSection}>
          <input
            type="Email"
            name="Email input"
            placeholder="Enter your email address"
          ></input>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;
