import { POST } from "./config";

  
  export const LoginOrSignup = (payload) => {
    return POST('/v1/user/LoginOrSignup', payload);
  };
  