import './App.css';
import React, { useState } from 'react'
import Axios from 'axios'

function CreateEmployee() {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(0)
    const [job, setJob] = useState("")
    const [phone, setPhone] = useState("")

    const createNewEmployee = () => {
        Axios.post("http://localhost:3002/CreateEmployee", 
        {
            fname: fname, 
            lname: lname, 
            age: age, 
            salary: salary, 
            job: job, 
            phone: phone})
        .then((response) =>{
            alert("Employee created")
        })
    }
    return (
        <div className="CreateEmployee">
            <form className='empForm'>
                <h1>Create Employee</h1>
                <input type='text' placeholder='First Name...' onChange={(event) => {
                    setFname(event.target.value)
                    }}/> 
                <input type='text' placeholder='Last Name...' onChange={(event) => {
                    setLname(event.target.value)
                    }}/>
                <input type='text' placeholder='Age...' onChange={(event) => {
                    setAge(event.target.value)
                    }}/> 
                <input type='text' placeholder='Salary...' onChange={(event) => {
                    setSalary(event.target.value)
                    }}/> 
                <input type='text' placeholder='Job Title..' onChange={(event) => {
                    setJob(event.target.value)
                    }}/> 
                <input type='text' placeholder='Phone...' onChange={(event) => {
                    setPhone(event.target.value)
                    }}/>
                <button onClick={createNewEmployee}>Submit</button>
            </form>

        </div>
    )
}

export default CreateEmployee;