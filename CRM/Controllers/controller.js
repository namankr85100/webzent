const passport = require("passport");
const { mailer } = require("../mailer");
// const User = require("../Models/user");


exports.register = async(req, res, next) => {
    try {
    let username = req.body.username
    let password = req.body.password
    let task = req.body.task
    
    console.log(req.body)
//    await User.insertOne({
//         username:username,
//         password:password,
//         task:true
//     })


    res.status(200).json({"status":"Success",
    "status_msg":"successfully registered"})

    } catch(err) {
        res.status(500).json({"status":"error",
        "status_msg":error 
        })
    }
}

exports.sendmail = async(req, res, next) => {
    try {
        //check if it is admin then push the mail

        //right now we are taking from payload and we can also take from mongodb saved task
        let task = req.body
        
        const mailOptions = {
            from: 'namankr91@gmail.com',
            to: 'user@gmail.com',
            subject: 'crm testing interview solutions',
            text: 'that was easy'
        };
        mailer(mailOptions)

    } catch(err) {

    }
}