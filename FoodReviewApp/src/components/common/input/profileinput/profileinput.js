import React from "react";
import './profileinput.css';
import InputErrMsg from "../errors/InputErr";
export default function BasicInput({
formik,handleChange,formikname,placeholder,lable,value
}){
    return(
        <div className="single-profile-con">
        <div className="SPC-lable">{lable}</div>
        <div className="SPC-inp">
           <input
              onChange={handleChange}
              type='text'
              id={formikname}
              name={formikname}
              className={Boolean(formik?.touched?.[formikname]) && Boolean(formik?.errors?.[formikname])
                ? 'basic-inp err-border'
                : 'basic-inp'}
              placeholder={placeholder}
              value={value}
           />
        </div>
         <InputErrMsg errtxt={formik?.touched?.[formikname] && formik?.errors?.[formikname]} />
     </div>
    )
}