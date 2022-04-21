import React, {useState}from "react";
import Background from "./Images and Icons/Background 2.png";
import classes from "./PictureSection.module.css";

const PictureSection = () => {
const [firstchecked, setFirstChecked] = useState(true)
const [secondchecked, setSecondChecked] = useState(false)
const [thirdchecked, setThirdChecked] = useState(false)
const [textValue, setTextValue] = useState(
    {
        header: "The Best Teachers",
        body: "Online classes taught by dedicated teachers with decades of experienc helping students succeed.",
    }
);

const firstCheck = () => {
    setFirstChecked(true)
    setSecondChecked(false)
    setThirdChecked(false)
    setTextValue(
        {
            header: "The Best Teachers",
            body: "Online classes taught by dedicated teachers with decades of experienc helping students succeed.",
        }
    )
}

const secondCheck = () => {
    setFirstChecked(false)
    setSecondChecked(true)
    setThirdChecked(false)
    setTextValue(
        {
            header: "Watch offline, Anytime", 
            body: "Access videos, notes and study aids anywhere, anytime. Online or offline, get the best study help."
        }
    )
}

const thirdCheck = () => {
    setFirstChecked(false)
    setSecondChecked(false)
    setThirdChecked(true)
    setTextValue(
        {
            header: "Curriculum based learning",
            body: "Lessons based on current and approved curriculum to keep you updated and covered.",
        }
    )
}

  return (
    <div className={classes.container}>
      <div className={classes.imageSection}>
        <img src={Background} alt="Background" />
      </div>

      <div className={classes.textSection}>
        <h3>{textValue.header}</h3>
        <p>
          {textValue.body}
        </p>

        <div className= {classes.radio}>
        <input type="radio" className= {classes.radioButton} checked = {firstchecked} onClick = {firstCheck} value = ""/>
        <input type="radio" className= {classes.radioButton} checked = {secondchecked} onClick = {secondCheck}/>
        <input type="radio" className= {classes.radioButton} checked = {thirdchecked} onClick = {thirdCheck}/>
        </div>
      </div>
    </div>
  );
};

export default PictureSection;
