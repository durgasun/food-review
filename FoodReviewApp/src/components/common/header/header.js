import React from "react";
import './header.css';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function FRHeader({
    backbtn,
    title,
    clickfun,
    custombutton
}) {
    return (
        <div className="header-con">
            {
                
                <div className="back-btn">
                    {
                        backbtn && <MdOutlineKeyboardArrowLeft className="backbtn-ic" onClick={clickfun} />
                    }
                  
                </div>

            }
            <div className="header-title">
                {title}
            </div>
           {custombutton}
        </div>
    )

}