import React,{useState} from "react";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";




const AddTeam=(props)=>{
  const [enteredTeamName, setEnteredTeamName] = useState("");
  let history = useHistory();
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPosition, setEnteredPositon] = useState("Team-Lead");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [enteredDepartment, setEnteredDepartment] = useState("HR");
  //state for getting and storing values for form
  console.log(props.dropdown);
  const NameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const TeamNameChangeHandler = (event) => {
    setEnteredTeamName(event.target.value);
  };
  const EmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const PhoneChangeHandler = (event) => {
    setEnteredPhoneNumber(event.target.value);
  };
  const DepartmentChangeHandler = (event) => {
    setEnteredDepartment(event.target.value);
  };
  //state function for updating state

  const submitHandler = (event) => {
    event.preventDefault();
    const TeamDATA = {
      TeamLead: {
        name: enteredName,
        email: enteredEmail,
        phoneNumber: enteredPhoneNumber,
        position: enteredPosition,
        department: enteredDepartment,
        id: uuid(),
      },
      TeamDetails: {
        name: enteredTeamName,
        position: "Team",
        id: uuid(),
        children: [],
      },
    };
    //submit value send the data to app.js
    props.onAddTeamDetails(TeamDATA);
    setEnteredEmail("");
    setEnteredPositon("Team-Lead");
    setEnteredName("");
    setEnteredPhoneNumber("");
    setEnteredDepartment("HR");
    setEnteredTeamName("");
    history.push("/Tree");//reroute back to homepage
  };
  //submit value send the data to app.js
  const cancelHandler = () => {
    history.push("/Tree");
  };

  return (
    //FORM for filling up details
    <div id="formUI" className="card" onSubmit={submitHandler}>
      <h2>
        Add Team Details
        <button
          type="cancel"
          className="btn btn-dark cancelbtn"
          onClick={cancelHandler}
        >
          X
        </button>
      </h2>
      <form className="form-control">
        <div className="field">
          <label>Team-Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Team Name "
            name="TeamName"
            value={enteredTeamName}
            onChange={TeamNameChangeHandler}
            required
          />
        </div>

        <div className="field">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Team-Lead Name "
            name="EmpName"
            value={enteredName}
            onChange={NameChangeHandler}
            required
          />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Employee Phone Number"
            name="EmpPhone"
            value={enteredPhoneNumber}
            onChange={PhoneChangeHandler}
            required
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Employee Email"
            name="EmpEmail"
            value={enteredEmail}
            onChange={EmailChangeHandler}
            required
          />
        </div>
        <div>
          <label>Select Department</label>
          <br></br>
          <select
            className="form-select selector"
            onChange={DepartmentChangeHandler}
            required
          >
            <option value="HR">HR</option>
            <option value="Tech">Tech</option>
          </select>
        </div>
       
        <br></br>

        <button type="submit" className="btn btn-dark">
          Submit
        </button>
        <br></br>

        <div className="btn btn-dark home" onClick={cancelHandler}>
          Back Home
        </div>
      </form>
    </div>
  );
}
export default AddTeam