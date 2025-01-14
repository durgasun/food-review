import { GET, PATCH, POST } from "./config";

  
  export const LoginOrSignup = (payload) => {
    return POST('/v1/user/LoginOrSignup', payload);
  };
  export const ValidateOTP = (payload) => {
    return POST('/v1/user/ValidateOTP', payload);
  };
  export const UpdateProfile = (payload) => {
    return PATCH('/v1/user/UpdateProfile', payload);
  };
  export const profilebyid = (id) => {
    return GET(`/v1/user/profilebyid?id=${id}`);
  };