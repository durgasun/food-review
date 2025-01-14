import React, { useState } from "react";
import image from "../../Assets/images/signin/Signincover.png";
import '../../Assets/css/Signin.css';
import { useFormik } from 'formik';
import SimpleButton from "../../components/common/button/SimpleButton";
import { VerifyValidation } from "../../validation/validation";
import InputErrMsg from "../../components/common/input/errors/InputErr";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';
import { ValidateOTP } from "../../api";

export default function FRVerifyOTPPage() {
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    // Access the passed data from state
    const { phone, type } = location.state || {};

    const formik = useFormik({
        initialValues: {
            otp: ''
        },
        validationSchema: VerifyValidation,
        onSubmit: async (values) => {
            console.log(values)
               setLoader(true);
               try {
                 const res = await ValidateOTP({
                     mobileno:phone,
                     otp:values?.otp
                 });
                 if (res.status === 200 || 201) {
                   setLoader(false);
                   toast.success('OTP Verified Successfully', { id: '001' });
                   if(type==="login"){
                    setTimeout(() => {
                        navigate('/Dashboard');  
                    }, 2000);
                  
                   }
                   else{
                    setTimeout(() => {
                        navigate('/CreateProfile');  
                    }, 2000);
                   }
                    
                 }
               } catch (error) {
                 setLoader(false);
                 toast.error(error.response.data.message || 'Something Went Wrong');
               }
        },
    });

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

                        <OtpInput
                            value={formik?.values?.otp}
                            onChange={(otpValue) => { formik?.setFieldValue("otp", otpValue); }}
                            numInputs={6}
                            renderSeparator={<span></span>}
                            renderInput={(props) => <input {...props} className={
                                Boolean(formik?.touched?.otp) && Boolean(formik?.errors?.otp)
                                    ? 'otp-verify-inp err-border'
                                    : 'otp-verify-inp'
                            } />}
                            containerStyle={{ justifyContent: 'center' }}
                        />
                        <div className="verify-err-con">
                            <InputErrMsg errtxt={formik.touched.otp && formik.errors.otp} />
                        </div>

                        <div className="sign-button-con">
                            <SimpleButton
                                btntext={loader ? 'Verifying....' : 'Verify OTP'}
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