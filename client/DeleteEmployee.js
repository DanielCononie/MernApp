import React, { useState } from "react";
import  Axios  from "axios";



function DeleteEmployee() {

    const [id, setID] = useState("")

    const deleteNewEmployee = () => {
        Axios.post("http://localhost:3002/DeleteEmployee", {
            _id: id
        }).then((response) => {
            console.log("Post sent");
        })
    }
    return (
        <div className="deleteEmployee">
            <form className="deleteEmployeeForm">
                <h1>Delete Employee</h1>
                <p>Enter in the employee ID </p>
                <input type='text' onChange={(event) => {
                    setID(event.target.value)
                }}></input>
                <button onClick={deleteNewEmployee}>Submit</button>
            </form>
        </div>
    )
}

export default DeleteEmployee;

