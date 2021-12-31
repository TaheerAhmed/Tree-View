import React from 'react';
import './css/header.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header =(props)=>
{
let history = useHistory();
//Header nav bar component
  
return (
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark xp">
    <div className="container-fluid">
      <div className='navbar-brand'
        id="header"
        onClick={() => {
          history.push("./tree");
        }}
      >
        Hierarchial UI
      </div>
      <button
        className="navbar-toggler"
        
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li className='nav-item'>
<div
      className="nav-link"
      onClick={() => {
        history.push("./Tree");
      }}
    >
      Home
    </div>
          </li>
          <li class="nav-item">
            <div
              className="nav-link"
              onClick={() => {
                history.push("/addTeam");
              }}
            >
              Add Team
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              onClick={() => {
                history.push("./addContact");
              }}
            >
              Add Employee
            </div>
          </li>
          

        </ul>
        <form class="d-flex">
          <button class="btn btn-outline-success" type="submit">
            Reload
          </button>
        </form>
      </div>
    </div>
  </nav>
);
}
export default Header;