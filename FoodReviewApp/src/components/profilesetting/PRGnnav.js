import React from "react";
import { FiChevronRight } from "react-icons/fi";
import './index.css';

export default function PRGnnav({ 
    name,
    onclickfun,
    goicon
}) {
    return (
        <div className="PRG-nav-con" onClick={onclickfun}>
            <div className="PRG-nav-left">
                {name}
            </div>
            {
                goicon &&  <div className="PRG-nav-right">
                <FiChevronRight className="PRG-nav-arr-ic" />
            </div>
            }
           
        </div>
    )
}