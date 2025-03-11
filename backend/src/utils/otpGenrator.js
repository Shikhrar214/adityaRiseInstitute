import { Otp } from "../models/otp.model.js";

export const generateOTP = async () => {
    try {
        let otp = Math.floor(100000 + Math.random() * 900000).toString(); 
        let existedOtp = await Otp.findOne({ otp });
        while (otp === existedOtp) {
            otp = Math.floor(100000 + Math.random() * 900000).toString(); 
            existedOtp = await Otp.findOne({ otp });  
        }
        

        return otp;
    } catch (error) {
        return error.message || "An error occurred while generating OTP";
    }
  };
  
  console.log(generateOTP()); 
  