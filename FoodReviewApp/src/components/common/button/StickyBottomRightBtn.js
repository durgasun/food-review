import React from "react";
import './button.css';
export default function StickyButtonRightBtn({
    icon,
    label,
    clickfun
}){
    return(
        <div className="sticky-button-right-con" onClick={clickfun}>
         {icon}
         <div className="sticky-btn-text">{label}</div>
        </div>
        
    )
}