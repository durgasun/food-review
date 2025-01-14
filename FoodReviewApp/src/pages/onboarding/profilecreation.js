import React, { useState } from "react";
import '../../Assets/css/Signin.css';
import { useFormik } from 'formik';
import { SigninValidation } from "../../validation/validation";
import toast from 'react-hot-toast';
import { LoginOrSignup } from "../../api";
import FRHeader from "../../components/common/header/header";

export default function FRProfileCreation() {
   const [loader,setLoader]=useState(false);
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
      <div className='pr-main-con'>
         <FRHeader
         title={'Profile Creation'}
         />
      </div>
   )
}