const mongoose = require('mongoose')

const AdminDetails = mongoose.Schema (
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
        },
        task_alloted:{
            type: String,
        }
    }
)

const Admin = mongoose.model('Admin', AdminDetails)

module.exports = Admin