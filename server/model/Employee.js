const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    current_address: {
        type: String
    },
    resume: {
        type: String,
        default: ''
    },
    aadhar_number: {
        type: Number,
        required: true
    },
    pan_number: {
        type: String,
        required: true
    },
    flags: {
        red: {type: Number, default: 0},
        yellow: {type: Number, default: 0},
        orange: {type: Number, default: 0},
        green: {type: Number, default: 0}
    },
    active: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Employees', employeeSchema)