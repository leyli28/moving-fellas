require('dotenv').config();

const nodemailer = require('nodemailer');


    const transporter = nodemailer.createTransport({
        service: 'mail.ru',
        port: '465',
        secure: 'true',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    
    const mailOptions = {
        from: process.env.FROM,
        to: process.env.TO,
        subject: 'Mail from Moving Fellas',
        text: 'SALAM',
        html: `
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: Leyli</li>
          <li>Email: leilish.ataeva28@gmail.com</li>
          <li>Phone: +99365092969</li>
          <li>Moving From: New York</li>
          <li>Moving To: LA</li>
          <li>Message: Hello I wanna move to LA</li>
        </ul>
        `
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error" + error)
        } else {
            console.log("Email sent:" + info.response);
           
        }
    });
    

