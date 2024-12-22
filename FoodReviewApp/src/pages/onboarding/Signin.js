import React from "react";
import image from "../../Assets/images/signin/Signincover.png";
import '../../Assets/css/Signin.css';
export default function FRSigninPage(){
    return(
        <div className='signin-container'>
        <div className='signin-top-container'>
         <img src={image} className='signin-cover-img' alt="" />
        </div>
        <div className='signin-bottom-container'>
           <div className="signin-heading Container">
            <div className="signin-ic-main-con">
            <div className="signin-ic-con">
                <span className="sign-ic">Durga</span>
             </div>
             <div className="signin-ic-sub-con">
                <span className="sign-sub-ic">Everyone can be a chef</span>
             </div>
            </div>
            <div className="signin-inp-con">

            </div>
            
             
           </div>
            
        </div>
       </div>
    )
}