import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
// import SignUp from "./Components/Sign Up/SignUp";
import LandingPage from "./Components/Landing Page/LandingPage";

function App() {
  return (
    <div>
      {/* <SignUp /> */}
      <LandingPage />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
