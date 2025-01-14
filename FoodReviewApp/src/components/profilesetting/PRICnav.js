import React from "react";
import './index.css';

export default function PRICnav({ 
    name,
    icon,
    onclickfun
}) {
    return (
        <div className="prIc-nav-con" onClick={onclickfun}>
            <div className="prIC-nav-top">
                {icon}
            </div>
            <div className="prIC-nav-bottom">
                {name}
            </div>
        </div>
    )
}