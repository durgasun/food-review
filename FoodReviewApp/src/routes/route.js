import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from "../pages/onboarding/splashscreen";
import FRSigninPage from "../pages/onboarding/Signin";
import FRProfileCreation from "../pages/onboarding/profilecreation";
const FRRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<FRSigninPage />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/CreateProfile" element={<FRProfileCreation />} />
        </Routes>
      </Router>
    );
  };
  
  export default FRRoutes;