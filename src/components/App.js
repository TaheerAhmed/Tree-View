import React, { useState, useEffect } from "react";
import "./css/App.css";
import Header from "./header";
import AddContact from "./addContact";
// import ContactList from "./conatactList";
import Tree from "./Tree";
import { v4 as uuid } from "uuid";
import { Redirect, Route } from "react-router-dom";
import AddTeam from "./addTeam";
import NotFOUND from "./pagenotfound";
const employeeData = [
  {
    name: "Kevin",
    position: "CEO",
    email: "CeooftheCompany@gmail.com",
    phoneNumber: "1234567890",
    department: "Admin",
    id: uuid(),
    children: [
      {
        name: "Jack",
        position: "HR Head",
        email: "HRhead@gmail.com",
        phoneNumber: "09876543212",
        department: "HR",
        id: uuid(),
        children: [
          {
            name: "Team 1",
            position: "Team",
            id: uuid(),
            children: [
              {
                name: "Rajesh",
                position: "Team-Lead",
                email: "Fahadisabigproblem@gmail.com",
                phoneNumber: "098765432",
                id: uuid(),
                department: "HR",
                Team: "Team 1",
              },
              {
                name: "Sheldon",
                position: "Team-member",
                email: "Harshisabigproblem@gmail.com",
                phoneNumber: "112233445531",
                id: uuid(),

                department: "HR",
                Team: "Team 1",
              },
            ],
          },
          {
            name: "Team 2",
            position: "Team",
            id: uuid(),

            children: [
              {
                name: "Taheer",
                position: "Team-Lead",
                email: "Fahadisabigproblem@gmail.com",
                phoneNumber: "098765432",
                department: "HR",
                id: uuid(),

                team: "Team 2",
              },
              {
                name: "Harris",
                position: "Team-member",
                email: "Harshisabigproblem@gmail.com",
                phoneNumber: "112233445531",
                id: uuid(),

                department: "HR",
                team: "Team 2",
              },
            ],
          },
        ],
      },
      {
        name: "Akhilesh",
        position: "Tech Head",
        email: "Technicalhead@gmail.com",
        phoneNumber: "09876543212",
        id: uuid(),

        department: "Tech",
        children: [
          {
            name: "Team 1",
            position: "Team",
            id: uuid(),
            children: [
              {
                name: "Prakash",
                position: "Team-Lead",
                email: "Fahadisabigproblem@gmail.com",
                phoneNumber: "098765432",
                id: uuid(),
                department: "Tech",
                team: "Team 1",
              },
              {
                name: "Harsh",
                position: "Team-member",
                email: "Harshisabigproblem@gmail.com",
                phoneNumber: "112233445531",
                id: uuid(),

                department: "HR",
                team: "Team 1",
              },
            ],
          },
          {
            name: "Team 2",
            position: "Team",
            id: uuid(),

            children: [
              {
                name: "Arjun",
                position: "Team-Lead",
                email: "Fahadisabigproblem@gmail.com",
                phoneNumber: "098765432",
                id: uuid(),

                department: "HR",
                team: "Team 2",
              },
              {
                name: "Priya",
                position: "Team-member",
                email: "Harshisabigproblem@gmail.com",
                phoneNumber: "112233445531",
                id: uuid(),

                department: "HR",
                team: "Team 2",
              },
            ],
          },
        ],
      },
    ],
  },
];//mock JSON data 

function App() 
{
  const LOCAL_STORAGE_KEY = "employeeDATA";
  //local storage stores data in application cache
  const [employeeDATA, setEmployee] = useState(employeeData);
  //state function to update application data stored in cache

  const addEmployeeData = (data) => {
    //  function to AddEmployee details from add employee form
    let DeptIndex = 0;
    for (var i = 0; i < employeeDATA[0].children.length; i++) {
      if (employeeDATA[0].children[i].department === data.department) {
        DeptIndex = i;
      }
    }
    let TeamSelect = employeeDATA[0].children[DeptIndex].children;
    let TeamIndex = 0;
    //looping through the json to get the specified team and department to add the employee into

    for (let j = 0; j < TeamSelect.length; j++) {
      if (employeeDATA[0].children[DeptIndex].children[j].name === data.team) {
        TeamIndex = j;
      }
    }
    employeeDATA[0].children[DeptIndex].children[TeamIndex].children.push(data);
    //}{id:uuid(),...employeeDATA}
    setEmployee([...employeeDATA]);
  };

  //adding new teams to spcific departments
  const addteamData = (teamData) => {
    let DeptIndex = 0;
    for (var i = 0; i < employeeDATA[0].children.length; i++) {
      if (
        employeeDATA[0].children[i].department === teamData.TeamLead.department
      ) {
        DeptIndex = i;
        employeeDATA[0].children[i].children.push(teamData.TeamDetails);
      }
    }
    let TeamSelect = employeeDATA[0].children[DeptIndex].children;
    let TeamIndex = 0;
    for (let j = 0; j < TeamSelect.length; j++) {
      if (
        employeeDATA[0].children[DeptIndex].children[j].name ===
        teamData.TeamDetails.name
      ) {
        TeamIndex = j;
      }
    }
    employeeDATA[0].children[DeptIndex].children[TeamIndex].children.push(
      teamData.TeamLead
    );

    setEmployee([...employeeDATA]);
  };

//stores the added data intp application cache
  useEffect(() => {
    const retrieveDATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (retrieveDATA) {
      setEmployee(retrieveDATA);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employeeDATA));
  }, [employeeDATA]);


  return (
    <div id="backgroundStyling">
      <Header />
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/tree" />;
        }}
      />
      <Route path="/addContact">
        <AddContact onAddDetails={addEmployeeData} dropdown={employeeDATA} />
      </Route>
      <Route path="/404">
        <NotFOUND />
      </Route>
      <Route path="/addTeam">
        <AddTeam onAddTeamDetails={addteamData} />
      </Route>
      <Route exact path="/Tree">
        <div className="TreeData">
          <Tree
            data={employeeDATA}
           
          />
        </div>
      </Route>
    </div>
  );
}

export default App;
