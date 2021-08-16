const mongoose = require('mongoose')

const UserDetails = mongoose.Schema (
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        Task: {
            type: Boolean,
            required: true,
        }
    }
)

const User = mongoose.model('Users', UserDetails)

module.exports = User