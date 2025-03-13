import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });


// console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });


const mailer = async (email, subject, fullName, pass, id) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER, 
            to: email, 
            subject: subject || "",
            text: `hello ${fullName}!, you are registered successfully`, 
            html: `<b>hello ${fullName}! your email: ${email} and password: ${pass} world?</b> </br> <p> ${id?`your registerd id: ${id}`:""} </p>`, 
          });
          return info
          // console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.log(error);
        
    }
}


export { mailer } 
