import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'



function ViewEmployee() {
    
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3002/ViewEmployee").then((response) => {
            setEmployees(response.data);
        })
    }, []);


    return (
        <div>
            <h1>View All Employees</h1>
            <div className='employeeDisplay'>
                {employees.map((emp) => {
                    return ( 
                        <div className='eachEmp'>
                            <p><strong>Name: </strong>{`${emp.fname} ${emp.lname}`}</p>
                            <p><strong>Employee ID: </strong>{emp._id} </p>
                            <p><strong>Age: </strong>{emp.age} </p>
                            <p><strong>Salary: </strong>{emp.salary} </p>
                            <p><strong>Job Title: </strong>{emp.job} </p>
                            <p><strong>Phone: </strong>{emp.phone} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewEmployee;