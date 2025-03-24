import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });




const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: process.env.EMAIL_PORT,
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
            subject: subject || "FROM ARCI",
            text: `hello ${fullName || "USER" }!, you are registered successfully`, 
            html: `<b>hello ${fullName}! your email: ${email} and password: ${pass},</b> </br> <p> ${id?`your registerd id: ${id}`:""} </p>`, 
          });
          
          console.log("Message sent: %s", info.messageId);
          return info
    } catch (error) {
        console.log(error);
        
    }
}


export { mailer } 
