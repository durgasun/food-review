import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from "../pages/onboarding/splashscreen";
import FRSigninPage from "../pages/onboarding/Signin";
import FRProfileCreation from "../pages/onboarding/profilecreation";
import Dashboard from "../pages/Dashboard/Dashboard";
import FRVerifyOTPPage from "../pages/onboarding/otpverify";
import FRProfileSetting from "../pages/Profilesetting/profilesetting";
import FRProfileEdit from "../pages/Profilesetting/profileedit";
import FRNotification from "../pages/Profilesetting/Notificaiton";
import FRLikedRecipe from "../pages/Profilesetting/LikedRecipe";
const FRRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<FRSigninPage />} />
          <Route path="/verify" element={<FRVerifyOTPPage />} />
          <Route path="/CreateProfile" element={<FRProfileCreation />} />
          <Route path="/ProfileSetting" element={<FRProfileSetting />} />
          <Route path="/Notification" element={<FRNotification />} />
          <Route path="/ProfileEdit" element={<FRProfileEdit />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/likedrecipe" element={<FRLikedRecipe />} />
        </Routes>
      </Router>
    );
  };
  
  export default FRRoutes;