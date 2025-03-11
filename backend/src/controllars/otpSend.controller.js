import {Otp} from '../models/otp.model.js';
import { mailer } from '../utils/nodeMailer.js';
import { generateOTP } from '../utils/otpGenrator.js';


export const sendOTP = async (req, res) => {
    
    try {
        const {email} = req.body;
        if (!email) return res.status(400).json({message: "Email is required"});
            const generatedOTP = await generateOTP();

            
            const newOtp = new Otp({
                email, 
                otp: generatedOTP
        });
        
        // save otp to database
        await newOtp.save();

        // send otp to nodemailer
        await mailer(email, "OTP Verification", "OTP", generatedOTP, "");

        res.status(200).json({message: "OTP has been sent to your email"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}