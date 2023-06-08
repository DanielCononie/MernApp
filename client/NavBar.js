import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <div className='NavBar'>
           
        <ul>
            <li><Link to="/" className='nav-item'>Home</Link></li>
            <li><Link to="/ViewEmployee" className='nav-item'> View All</Link></li>
            <li><Link to="/CreateEmployee" className='nav-item'>Create</Link></li>
            <li><Link to="/DeleteEmployee" className='nav-item'>Delete</Link></li>
            {/* <li><Link to="/SearchEmployee" className='nav-item'>Search</Link></li> */}
        </ul>
        </div>
    )
}

export default NavBar;