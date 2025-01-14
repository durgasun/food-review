import React from "react";
import './button.css';
export default function SimpleButton({
btntext
}){
    return(
        <button className="simple-button" type="submit" >{btntext}</button>
    )
}