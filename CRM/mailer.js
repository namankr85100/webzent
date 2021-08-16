const nodemailer = require('nodemailer')

const trasporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'namankr91@gmail.com',
        pass: 'mypassword'
    }
})

const mailOptions = {
    from: 'namankr91@gmail.com',
    to: 'user@gmail.com',
    subject: 'crm testing interview solutions',
    text: 'that was easy'
};

exports.mailer = (mailOptions) => {
     transporter.sendMaail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('email sent: ' + info.response);
        }
    })
}