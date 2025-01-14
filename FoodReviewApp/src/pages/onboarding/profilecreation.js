import React, { useState } from "react";
import '../../Assets/css/profilecreation.css';
import { useFormik } from 'formik';
import { ProfileValidation} from "../../validation/validation";
import toast from 'react-hot-toast';
import {UpdateProfile } from "../../api";
import FRHeader from "../../components/common/header/header";
import { IoImage } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";
import BasicInput from "../../components/common/input/profileinput/profileinput";
import SimpleButton from "../../components/common/button/SimpleButton";
import BasicInputArea from "../../components/common/input/profileinput/profileinputarea";
import { useNavigate } from "react-router-dom";

export default function FRProfileCreation() {
   const [loader, setLoader] = useState(false);
   const navigate = useNavigate();
   const formik = useFormik({
      initialValues: {
         name:null,
         email:null,
         bio:null,
         profile:null
      },
      validationSchema: ProfileValidation,
      onSubmit: async (values) => {
         setLoader(true);
         const {name,email,bio,profile}=values;
         const userid=localStorage.getItem('userid')
         try {
            const res = await UpdateProfile({
               id:userid,
               data:{
                  name:name,
                  email:email,
                  bio:bio,
                  profile:profile
               }
               
            });
            if (res.status === 200 || 201) {
               setLoader(false);
               toast.success('Profile created Successfully', { id: '001' });
               setTimeout(() => {
                  navigate('/Dashboard');  
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

   const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onloadend = () => {
            formik.setFieldValue('profile', reader.result);
         };
      }
   };

   return (
      <div className='pr-main-con'>
         <FRHeader title={'Profile Creation'} />
         <form onSubmit={formik.handleSubmit}>
            <div className="profile-inp-con">
               <div className="profile-inp-img-single-con">
                  <div className="profile-img-inp">
                     {
                        formik?.values?.profile ?
                        <img src={formik?.values?.profile} alt="" className="profile-img-img" />:
                        <IoImage className="profile-img-ic" />
                     }
                     
                  </div>
                  <div className="profile-img-up-inp" onClick={() => document.getElementById('file-input').click()}>
                     <MdFileUpload className="profile-img-up-ic" />
                     <span className="profile-img-up-txt">Upload Profile</span>
                  </div>
                  <input
                     id="file-input"
                     type="file"
                     accept="image/*"
                     style={{ display: 'none' }}
                     onChange={handleFileChange} // Handle file selection
                  />
               </div>
               <BasicInput
                  formik={formik}
                  formikname={'name'}
                  handleChange={handleChange}
                  placeholder={'Profile Name'}
                  label={'Profile Name'}
               />
               <BasicInput
                  formik={formik}
                  formikname={'email'}
                  handleChange={handleChange}
                  placeholder={'Email'}
                  label={'Email'}
               />
               <BasicInputArea
                  formik={formik}
                  formikname={'bio'}
                  handleChange={handleChange}
                  placeholder={'Bio'}
                  label={'Bio'}
               />
               <div className="profile-submit-con">
                  <SimpleButton
                     btntext={loader ? 'Processing....' : 'Save Changes'}
                  />
               </div>
            </div>
         </form>
      </div>
   );
}
