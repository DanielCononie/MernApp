import './App.css';
import React from 'react';
import Home from './Home';
import ViewEmployee from './ViewEmployee';
import CreateEmployee from './CreateEmployee';
import DeleteEmployee from './DeleteEmployee';
// import SearchEmployee from './SearchEmployee';
import { Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Routes> 
        <Route exact path="/" Component={Home} />
        <Route exact path="/ViewEmployee" Component={ViewEmployee} />
        <Route exact path="/CreateEmployee" Component={CreateEmployee} />
        <Route exact path="/DeleteEmployee" Component={DeleteEmployee} />
        {/* <Route exact path="/SearchEmployee" Component={SearchEmployee} /> */}
      </Routes>
       
    </div>
  );
}

export default App;
