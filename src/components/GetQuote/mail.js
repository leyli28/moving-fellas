require("dotenv").config()

const nodemailer = require('nodemailer')

export const cat = async function () {
    const transporter = nodemailer.createTransport({
        service: 'mail.ru',
        port: '465',
        secure: 'true',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    
    const mailOptions = {
        from: process.env.FROM,
        to: process.env.TO,
        subject: 'Mail from Moving Fellas',
        text: 'SALAM',
        html: `
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: </li>
          <li>Email:</li>
          <li>Phone: </li>
          <li>Moving From: </li>
          <li>Moving To:  </li>
          <li>Message: </li>
        </ul>
        `
    }
    
    const birzat = transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error" + error)
        } else {
            console.log("Email sent:" + info.response);
           
        }
    })
}

