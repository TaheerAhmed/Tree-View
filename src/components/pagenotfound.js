import React from "react";
import './css/pagenotfound.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//simple page notfound
const NotFOUND=()=>{

let history=useHistory();


return (

  <div id="box" onClick={()=>{history.push('/Tree')}}>
    <div className="boxSmall boxTiny">
      <h1 className="error">Click me to Go Back </h1>
      <h1 className="apologies">
        {" "}
        These Functionalities are a work in progress sorry mate .
      </h1>
    </div>
  </div>
);




}





export default NotFOUND