const passport = require("passport");
const { mailer } = require("../mailer");


exports.login = async( req, res, next ) => {
 try {
    passport.authenticate("local", {
        successRedirect: "/secret",
        failureRedirect: "/login"
    }),  (req, res) => {
        res.status(200).json({
            "status_msg": "you are authenticated"
        })
    }
    
 } catch(err) {
  res.status(500).json({ "status": "Error", "status_msg": err})
 }
}

exports.logout = async(req, res, next) => {
   try { 
    req.logout();
    res.status(200).json({
        "status":"success",
        "status_msg":"logut successfully"
    })
   } catch(error) {
    res.status(500).json({"status":"error",
     "status_msg":error 
     })
    } 
}

//it  will worka as middleware
exports.isLoggedIn = async(req, res, next)=>{
    try {
     if (req.isAuthenticated()) return next();
     res.status(200).json({
         "status": "success",
         "status_msg": "Please Logged In First" 
        })    
    } catch(error) {
       res.status(500).json({"status":"error",
       "status_msg":error 
       })
    }
}

exports.register = async(req, res, next) => {
    try {
        let username = req.body.username
    let password = req.body.password
    User.register(new User({ username : username }),
     password , (err, user) => {
         if (err) {
             console.log(err);
             res.json({ "status_msg": "Please Go To Registeration Screen"})
         } 

         passport.authenticate('local',(req, res, next) =>  {
                 res.json("you are registered")
         })

     })
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