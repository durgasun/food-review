import React from "react";
import './header.css';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function FRHeader({
    backbtn,
    title
}) {
    return (
        <div className="header-con">
            {
                
                <div className="back-btn">
                    {
                        backbtn && <MdOutlineKeyboardArrowLeft />
                    }
                  
                </div>

            }
            <div className="header-title">
                {title}
            </div>
        </div>
    )

}