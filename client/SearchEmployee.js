import React, { useState } from "react";
import Axios  from "axios";

function SearchEmployee() {

    const [employee, setEmployee] = useState([])
    const [id, setId] = useState("")

    const handleClick = () => {
        Axios.post( "http://localhost:3002/SearchEmployee",{
            _id: id
        })
        .then((response) => {
            console.log("ID SENT")
        }) 

          
        Axios.get("http://localhost:3002/SearchEmployee" )
            .then((response) => {    
            setEmployee(response.data)
        })
    }



    return(
        <div className="searchEmployee">
            <form className="search-form">
                <h1>Search by ID</h1>
                <input type="text" placeholder="ID..." onChange={
                    (event) => setId(event.target.value)
                    }/>
                <button onClick={handleClick}>Search</button>
            </form>
            <div className="search-display" id="search-display">
            <h1>name</h1>
            </div>
        </div>
    )
}




export default SearchEmployee;