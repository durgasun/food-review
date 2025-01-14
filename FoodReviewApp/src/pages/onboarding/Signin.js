import React, { useState } from "react";
import image from "../../Assets/images/signin/Signincover.png";
import '../../Assets/css/Signin.css';
import { useFormik } from 'formik';
import FDMobileInp from "../../components/common/input/mobileinp/mobileinput";
import SimpleButton from "../../components/common/button/SimpleButton";
import { SigninValidation } from "../../validation/validation";
import InputErrMsg from "../../components/common/input/errors/InputErr";
import toast from 'react-hot-toast';
import { LoginOrSignup } from "../../api";
import { useNavigate } from "react-router-dom";

export default function FRSigninPage() {
   const [loader,setLoader]=useState(false);
   const navigate = useNavigate();
   const formik = useFormik({
      initialValues: {
         mobileno: null
      },
      validationSchema: SigninValidation,
      onSubmit: async (values) => {
           setLoader(true);
           try {
             const res = await LoginOrSignup(values);
             if (res.status === 200 || 201) {
               setLoader(false);
               toast.success('OTP Send Successfully', { id: '001' });
               setTimeout(() => {
                  navigate('/CreateProfile');
               }, 2000);
             
             }
           } catch (error) {
             setLoader(false);
             toast.error(error.response.data.message || 'Something Went Wrong');
           }
      },
   });
   const handleChange = (e) => {
      formik.handleChange(e);
   };
   return (
      <div className='signin-container'>
         <div className='signin-top-container'>
            <img src={image} className='signin-cover-img' alt="" />
         </div>
         <div className='signin-bottom-container'>
            <div className="signin-heading Container">
               <div className="signin-ic-main-con">
                  <div className="signin-ic-con">
                     <span className="sign-ic">Durga</span>
                  </div>
                  <div className="signin-ic-sub-con">
                     <span className="sign-sub-ic">Everyone can be a chef</span>
                  </div>
               </div>
            </div>
            <div className="signin-inp-con">
               <form onSubmit={formik.handleSubmit}>
                  <FDMobileInp
                     formik={formik}
                     formikname={'mobileno'}
                     handleChange={handleChange}
                  />
                  <InputErrMsg errtxt={formik.touched.mobileno && formik.errors.mobileno} />
                  <div className="sign-button-con">
                     <SimpleButton
                        btntext={loader ? 'Sending....' : 'Send OTP'}
                     />
                  </div>

               </form>
            </div>
            <div className="signin-bottom-con">
               {/* <FRORLine /> */}
               <div className="signin-bt-txt">By continuing, you agree to our</div>
               <div className="signin-bottom-btn-con">
                   <div className="signin-bottom-btn">Terms of Service</div>
                   <div className="signin-bottom-btn">Privacy Policy</div>
                   <div className="signin-bottom-btn">Content Policy</div>
               </div>
            </div>

         </div>
      </div>
   )
}