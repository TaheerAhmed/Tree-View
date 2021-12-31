import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/ContactCard.css'
//to make each card for showing data all the details are coming from tree node into card which generated from app.js
const ContactCard=(props)=>

{
    const TeamChecker=props.contact.position==='Team'?true:false
    
   const {name,email,position,phoneNumber,id}=props.contact
    
    
  
return (
  <div className="CardHolder">
    <div className="cardBody">
      <div className="cardtitle">
        {name}
        <div className="position">({position})</div>
      </div>
      {!TeamChecker && (
        <div className="cardDetails">
          
          <div className="details">Email: {email}</div>
          <div className="details">Phone Number: {phoneNumber}</div>
          <div className="details">ID: {id}</div>

        
        
        </div>
      )}
    </div>
  </div>
);
}

   
 



export default ContactCard