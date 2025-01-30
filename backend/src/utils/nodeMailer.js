import express, { text } from 'express'
import dotenv from 'dotenv';
import nodemailer from 'nodemailer'

dotenv.config();


const mailer = async (to, subject, text) => {

    try {
        var transport =  nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS
        
            }
        });

        const mailOptions = {
            from: "Aditya Rise Computer Institute",
            to,
            subject,
            text,
        }

        const info = await transport.mailer(mailOptions);
        console.log("mail info :", info.messageId);
        
    } catch (error) {
        console.log("mailer error: ",error||"mailer error");
        return 1
    }
    
}

export { mailer } 
