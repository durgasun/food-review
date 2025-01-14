import React from "react";
import '../../Assets/css/splash.css';
import FunctionButton from "../common/button/FunctionButton";
import { useNavigate } from "react-router-dom";

export default function FRSplash({skip,image,icon,heading,content,signinbutton,skipfun}){
  const navigation=useNavigate();
    return(
        <div className='splash-container'>
        {
            skip && (
                <div className='splash-skip-btn' onClick={()=>{skipfun()}}>
                  <span className='splash-skip-btn-txt'>Skip</span>
                </div>
            )
        }
       
        <div className='splash-top-container'>
         <img src={image} className='splash-cover-img' alt="" />
        </div>
        <div className='splash-bottom-container'>
         <div className='splash-icon-con'>
         {icon}
         </div>
         <div className='splash-txt-con'>
           <div className='splash-head-con'>
             <span className='splash-head-txt'>{heading}</span>
           </div>
           <div className='splash-content-con'>
             <span className='splash-content-txt'>{content}</span>
           </div>
         </div>
         {
          signinbutton && 
           <FunctionButton
             btntext={'Get Started'}
             clickfun={()=>{navigation('/login')}}
          />
         }
        </div>
       </div>
    )
}