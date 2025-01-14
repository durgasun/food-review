import React from "react";
import './FCatComponent.css';
export default function FCatComponent({
image,
clickfun,
name
}) {
    return (
        <div className='Fcat-con' onClick={clickfun}>
            <div className='Fcat-top-con'>
                <img src={image} alt='' className='Fact-img' />
            </div>
            <div className='Fcat-bottom-con'>
                {name}
            </div>

        </div>
    )
}