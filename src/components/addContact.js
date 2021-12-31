import React,{useState} from 'react';
import { v4 as uuid } from "uuid";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './css/addContact.css'
const AddContact=(props)=>{
  let history = useHistory();
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPosition, setEnteredPositon] = useState("");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [enteredDepartment, setEnteredDepartment] = useState("HR");
  const [enteredTeam, setEnteredTeam] = useState("Team 1");
  const [enteredDropdown, setValue] = useState([]);
  //state for getting and storing values for form
  const NameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const EmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const PositionChangeHandler = (event) => {
    setEnteredPositon(event.target.value);
  };
  const PhoneChangeHandler = (event) => {
    setEnteredPhoneNumber(event.target.value);
  };
  const DepartmentChangeHandler = (event) => {
    setEnteredDepartment(event.target.value);
  };
  const TeamChangeHandler = (event) => {
    setEnteredTeam(event.target.value);
  };
  //state function for updating state
  const submitHandler = (event) => {
    event.preventDefault();
    const EmpDATA = {
      name: enteredName,
      email: enteredEmail,
      phoneNumber: enteredPhoneNumber,
      position: enteredPosition,
      department: enteredDepartment,
      team: enteredTeam,
      id: uuid(),
    };

    props.onAddDetails(EmpDATA);
    setEnteredEmail("");
    setEnteredPositon("");
    setEnteredName("");
    setEnteredPhoneNumber("");
    setEnteredTeam("Team 1");
    setEnteredDepartment("HR");
    history.push("/Tree"); //reroute back to homepage
  };
  const cancelHandler = () => {
    history.push("/Tree"); //reroute back to homepage
  };
  //submit value send the data to app.js

  const OptionChangeHandlder = (event) => {
    props.dropdown[0].children.forEach((data) => {
      if (data.department === event.target.value) {
        setValue(data.children);
      }
    });
  };
//check for teams in the department


  return (
    //FORM for filling up details
    <div id="formUI" className="card" onSubmit={submitHandler}>
      <h2 className="Employee">
        Add Employee Details
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
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Employee "
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
          <label>Position</label>
          <input
            type="text"
            className="form-control"
            placeholder="Employee Position "
            name="EmpPosition"
            value={enteredPosition}
            onChange={PositionChangeHandler}
            required
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Employee Email"
            name="EmpEmail"
            value={enteredEmail}
            onChange={EmailChangeHandler}
            required
          />
        </div>
        <div>
          <select
            className="form-select selector"
            onChange={DepartmentChangeHandler}
            onClick={OptionChangeHandlder}
            required
          >
            <option value="HR">HR</option>
            <option value="Tech">Tech</option>
          </select>
        </div>
        <div>
          <select
            onChange={TeamChangeHandler}
            id="Teams"
            className="form-select selector"
          >
            <option disabled="true">Select Dept</option>
            {enteredDropdown.map((data) => (
              <option value={data.name}>{data.name}</option>
            ))}
          </select>
        </div>

        <br></br>

        <button type="submit" className="btn btn-dark">
          Submit
        </button>
        <br></br>
        <div
          className="btn btn-dark home"
          onClick={() => history.push("/Tree")}
        >
          Back Home
        </div>
      </form>
    </div>
  );
}
export default AddContact;

