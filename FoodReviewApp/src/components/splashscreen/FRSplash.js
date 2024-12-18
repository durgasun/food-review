import React from "react";
import '../../Assets/css/splash.css';
export default function FRSplash({skip,image,icon,heading,content}){
    return(
        <div className='splash-container'>
        {
            skip && (
                <div className='splash-skip-btn'>
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
        </div>
       </div>
    )
}