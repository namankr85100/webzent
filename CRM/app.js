const express = require('express'),
      mongoose = require('mongoose'),
      passport = require('passport'),
      bodyParser = require('passport'),
      LocalStrategy = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose'),
      User = require('./models/user');
      express_session = require('express-session')
const { authenticate } = require('passport');
const connectDB = require('./Config/dbConfig');
const Router = require('./Routes/routes')
require('dotenv').config()


const app = express();


mongoose.set('useNewUrlParser',true)
mongoose.set('useFindAndModify',false)
mongoose.set('useCreateIndex',true)
mongoose.set('useUnifiedTopology',true)

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use(require('express-session'))({
//     secret: "rusty is dog",
//     resave: false,
//     saveinitialized: false
// })

app.use(passport.initialize());
app.use(passport.session());

app.use('/',Router)

// passport.use(new LocalStrategy(User,passport.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.listen(3000, () => {
    connectDB()
    console.log("server has been started on port 3000")
})