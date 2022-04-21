import React, {useState} from "react";
import YSP_Logo from "./Images and Icons/YSP Logo 2.png";
import GoogleSignupIcon from "./Images and Icons/Google Signup icon.png";
import classes from "./SignUpForm.module.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [passwordIsValid, setPasswordIsValid] = useState(true)

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (email.includes("@") && password.length >= 6){
      setEmail("")
      setPassword("")    
      setEmailIsValid(true)  
      setPasswordIsValid(true)     
      }

      else if(!email.includes("@") && password.length < 6) {
        setEmailIsValid(false)  
        setPasswordIsValid(false)   
      }
  }

  const emailFocusHandler = () => {
      if (!email.includes("@")){
        setEmailIsValid(false)
      }
  
      else {
        setEmailIsValid(true)
      }

  }

  const passwordFocusHandler = () => {
    if (password.length < 6){
      setPasswordIsValid(false)
    }

    else{
      setPasswordIsValid(true)
    }
  }

  const inputChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className={classes.container}>
      <img src= {YSP_Logo} alt= "YSP Logo" className= {classes.yspLogo}/>

      <h1>Take Your First Step Towards Success</h1>
      <div className={classes.googleSignUp}>
        <a href="#0">
          <img src={GoogleSignupIcon} alt="Google Signup Icon" />
          <span>Sign up with Google</span>
        </a>
      </div>

      <div className={classes.emailSignUp}>
        <div className={classes.line}>
          <hr />
        </div>
        <div>
          <a href="#0" className={classes.text}>
            Sign up with Email
          </a>
        </div>
        <div className={classes.line}>
          <hr />
        </div>
      </div>

      <form className={classes.form} onSubmit = {onSubmitHandler}>
        <div className={classes.inputClass}>
          <input
            type="text"
            placeholder="Email"
            className={emailIsValid ? `${classes.textInput}` : `${classes.textInput_invalid}`}
            onChange = {inputChangeHandler}
            value = {email}
            onBlur = {emailFocusHandler}
          />
          {!emailIsValid && <span className= {classes.warning}>Invalid Email.</span>}
          <input
            type="password"
            placeholder="Password"
            className={passwordIsValid ? `${classes.textInput}` : `${classes.textInput_invalid}`}
            onChange = {passwordChangeHandler}
            value = {password}
            onBlur = {passwordFocusHandler}
          />
          {!passwordIsValid && <span className= {classes.warning}>Password should be more than six characters.</span>}

          <div className={classes.check}>
            <input type="checkbox" className={classes.checkbox} />

            <p className={classes.checkboxText}>
              By creating an account you agree Yourstudypath’s Privacy and Terms
              or use
            </p>
          </div>
        </div>
        <button className={classes.button}>Create Account</button>

        <p className={classes.loginOption}>
          Already a member?
          <a href="#0">Log In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
