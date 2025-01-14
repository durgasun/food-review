import React from "react";
import './button.css';
export default function FunctionButton({
btntext,
clickfun
}){
    return(
        <button className="simple-button" type="button" onClick={clickfun} >{btntext}</button>
    )
}