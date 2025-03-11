import { Router } from "express";
import { sendOTP } from "../controllars/otpSend.controller.js";  

const otpRouter = Router();

otpRouter.route("/otp").post(sendOTP)


export { otpRouter };