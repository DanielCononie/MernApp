const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const EmployeeModel = require('./models/Employees')

app.use(express.json());
app.use(cors());
app.use(express.json())


// Connecting to database using a connect string
mongoose.connect("mongodb+srv://danielcononie:Dragons_13@cluster1.saxsa1i.mongodb.net/EmployeeDB?retryWrites=true&w=majority");


// Get all of the users that exist
app.get('/ViewEmployee', (req,res) => {
    EmployeeModel.find({}).then((data)=> {
        res.json(data)
    
    })
})


app.post('/CreateEmployee', async (req,res) => {
    
    const employee = req.body;
    const newEmployee = new EmployeeModel(employee)
    await newEmployee.save();

    res.json(employee)
})

app.post('/DeleteEmployee', (req,res) => {
    
   const id = req.body;
   res.json(id)
   EmployeeModel.deleteOne(id).then((response) => {
    alert("Data Deleted");
   });
   console.log(id);
})

let body = ""

// app.post('/SearchEmployee', (req,res) => {
//     try {
//         body = req.body
//         // console.log(body);
//     }
//     catch(error) {
//         console.log(error);
//     }

//     console.log(body);

// })

// app.get('/SearchEmployee', (req,res) => {
    
    
//         EmployeeModel.find(body).then((response) => {
//             res.json(response);
//             console.log(response);
//         })
    

// })



app.listen(3002, () => {
    console.log("Server is listening on port 3002..");
})