import React from "react";
import './CookieBookComponent.css'
export default function CookieBookComponent({
image,
icon,
title,
Description,
nooflikes,
noofrecepie
}){
    return(
         <div  className='CookieBook-con'>
                     <div className='CBC-top-div'>
                        <img className='CBC-top-div-img' src={image} alt='' />
                     </div>
                     <div className='CBC-bottom-div'>
                     <div className='CBC-icon-con'>
                       {icon}
                     </div>
                     <div className='CBC-title-div'>{title}</div>
                     <div className='CBC-des-div'>{Description}</div>
                      <div className='CBC-like-Recepie-con'>
                            <div className='CBC-LR-Left CSC-LR-txt'>{nooflikes} Likes</div>
                            <div className='CBC-LR-Right CSC-LR-txt'>{noofrecepie} Recipes</div>
                      </div>
                     </div>
                   </div>
    )
}