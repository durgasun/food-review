import * as yup from 'yup';

const fieldRequired='This Field is requried';
const Emailvalid="Enter a valid email address.";
export const SigninValidation = yup.object({
    mobileno: yup
      .string()
      .required("Mobile number is required")
      .matches(
        /^\d{10}$/,
        "Mobile number must be a valid 10-digit Indian number"
      ),
  });
  export const ProfileValidation = yup.object({
    name: yup.string().required(fieldRequired),
    email: yup.string().email(Emailvalid).required(fieldRequired),
    bio: yup.string().required(fieldRequired),
  });
  export const VerifyValidation = yup.object({
    otp: yup.string()
      .required("OTP is required")
      .length(6, "OTP must be exactly 6 digits")
      .matches(/^\d{6}$/, "OTP must contain only numbers"),
  });
