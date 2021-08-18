const mongoose = require('mongoose')

const UserDetails = mongoose.Schema (
    {
        username: {
            type: String,
        },
        password: {
            type: String,
        },
        task: {
            type: Boolean,
        }
    }
)

const User = mongoose.model('User', UserDetails)

module.exports = User