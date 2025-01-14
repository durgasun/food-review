import React from "react";
import './index.css';

export default function PRInfo({ 
    name,
    email,
    image,
    onclickfun
}) {
    return (
        <div className="pr-info-con">
            <div className="pr-info-left">
                <div className="pr-info-name">{name}</div>
                <div className="pr-info-email">{email}</div>
            </div>
            <div className="pr-info-right">
                <img src={image} alt="" className="pr-info-profile" onClick={onclickfun} />
            </div>
        </div>
    )
}