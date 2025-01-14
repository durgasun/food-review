import React from "react";
import './mobileinput.css';
import indiaflag from '../../../../Assets/images/signin/indiaflag.png'
export default function FDMobileInp({
  formik, handleChange, formikname
}) {
  
  return (
    
    <div className={
      Boolean(formik?.touched?.[formikname]) && Boolean(formik?.errors?.[formikname])
        ? 'mobile-no-container err-border'
        : 'mobile-no-container'
    }>
      <div className="SMNC-left">
        <div>
          <img src={indiaflag} className="flagimg" alt="" />
        </div>
        <div className="mobile-txt">
          +91
        </div>
      </div>
      <div className="SMNC-Right">
        <input
          onChange={handleChange}
          type='text'
          id={formikname}
          name={formikname}
          className={'mob-inp'}
          placeholder='Phone Number'
        />
      </div>
    </div>
  )
}