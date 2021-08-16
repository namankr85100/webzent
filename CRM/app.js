const express = require('express'),
      mongoose = require('mongoose'),
      passport = require('passport'),
      bodyParser = require('passport'),
      LocalStrategy = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose'),
      user = require('./models/user');
const { authenticate } = require('passport');
const Router = require('./Routes/routes')

mongoose.set('useNewUrlParser',true)
mongoose.set('useFindAndModify',false)
mongoose.set('useCreateIndex',true)
mongoose.set('useUnifiedTopology',true)
mongoose.connect('url')

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))

app.use(require('express-session'))({
    secret: "rusty is dog",
    resave: false,
    saveinitialized: false
})

app.use(passport.initialize());
app.use(passport.session());

app.use('/',Router)

passport.use(new LocalStrategy(User,authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(3000, () => {
    console.log("server has been started on port 3000")
})