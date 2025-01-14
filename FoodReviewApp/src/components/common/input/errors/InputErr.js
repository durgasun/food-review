import React from "react";
import './error.css'
export default function InputErrMsg({
  errtxt
}){
    return(
        <div className="input-err-msg">{errtxt}</div>
    )
}