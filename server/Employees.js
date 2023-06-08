const mongoose = require('mongoose')

// Creating a schema for mongoDB
const EmployeeSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    salary: {
        type: Number,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }

})

const EmployeeModel = mongoose.model("employee", EmployeeSchema)

module.exports = EmployeeModel;