import React from "react";
import './LRComponent.css';
import { PiClockThin } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
export default function LRComponent({
    image,
    title,
    time,
    type
}){
    return(
         <div className="LR-con">
                        <div className="LR-con-first">
                            <img src={image} alt="" className="LR-img" />
                        </div>
                        <div className="LR-con-sec">
                            <div className="LR-title">{title}</div>
                            <div className="LR-TT-con">
                              <div className="LR-TT-con-inside">
                                <PiClockThin className="LR-TT-con-inside-ic" />
                                <div className="LR-TT-con-inside-txt">{time}</div>
                              </div>
                              <div className="LR-TT-con-inside">
                                <BiDish  className="LR-TT-con-inside-ic" />
                                <div className="LR-TT-con-inside-txt">{type}</div>
                              </div>
                            </div>
                        </div>
                        <div className="LR-con-last">
                           <PiDotsThreeOutlineVerticalThin className="LR-Three-menu" />
                        </div>
                    </div>
    )
}