import * as yup from 'yup';


export const SigninValidation = yup.object({
    mobileno: yup
      .string()
      .required("Mobile number is required")
      .matches(
        /^\d{10}$/,
        "Mobile number must be a valid 10-digit Indian number"
      ),
  });
