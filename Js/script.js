// require('dotenv').config();
// const node = require('nodemailer');
//  const transporter = {
//     service : 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass : process.env.PASSWORD,
//     }
//  };


//  const mailOptions = {
//     from : 'skadirov2009@gmail.com',
//     to: 'skadirov2009@gmail.com',
//     subject : 'From node js',
//     text : 'thank you for your regestation'
//  };
//  transporter.sendMail(mailOptions);



const a = document.querySelector('input')
const btn = document.querySelector('.regestration__log > button')
const btn2 = document.querySelector('.regestration__info > button')

btn.addEventListener('click', () => {
    alert('Thank you for regestration!') 
   location.reload()
   window.location.replace('cyber.html')
} )

btn2.addEventListener('click' , (e) => {
    window.location.replace('https://myaccount.google.com/personal-info');
} )



