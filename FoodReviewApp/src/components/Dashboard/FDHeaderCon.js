import React from "react";
import '../../Assets/css/dashboard.css';
export default function FDHeader({
    title,
    secondbtn,
    clickable,
    clickfun
}) {
    return (
        <div className='FD-topic-con'>
            <div className='FD-Tp-title'>{title}</div>

            <div className='FD-Tp-count'
            onClick={()=>{
                if(clickable){
                    clickfun();
                }
            }}
            >{secondbtn}</div>
        </div>
    )
}