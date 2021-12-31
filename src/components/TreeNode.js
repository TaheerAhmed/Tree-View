import React, { useState } from "react";
import Tree from "./Tree";
import "./css/tree.css";
import ContactCard from "./contactCard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//main function checks if data has children and routes back to tree.js else makes a final card for the data
const TreeNode = (props) => 

{
  let history = useHistory();
  const [childVisible, setChildVisibility] = useState(false);
  const hasChild = props.node.children ? true : false;
  const hasTeam = props.node.position === "Team" ? true : false;
  const deptHead = props.node.department + " Head" === props.node.position ? true : false;
  const [deleteItemState,setDelState]=useState(false)
  

  return (
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => setChildVisibility((v) => !v)}>
        {/* check for children and see if next elemnt is having a CHILD */}
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          ></div>
        )}
        <div className=" d-tree-head">
          {/* makes the ui for the heirarchial data  */}
          {!deleteItemState && (
            <div>
              <ContactCard contact={props.node} key={props.node.id} />
            </div>
          )}

         {/* for team members  and all other employees*/}
          {!hasChild && (
            <div>
              <i
                className="bi bi-trash btn btn-success trashcan"
                onClick={() => {
                  history.push("/404");
                }}
              ></i>
            </div>
          )}
          {/* for teams in a dept  */}
          {hasTeam && (
            <div>
              <i
                className="bi bi-plus-circle btn btn-success addButton"
                onClick={() => {
                  history.push("/addContact");
                }}
              >
                Add Team-Member
              </i>
              <i
                class="bi bi-pencil-square btn btn-success trashcan"
                onClick={() => {
                  history.push("/404");
                }}
              ></i>
            </div>
          )}
          {/* for department head special UI */}
          {deptHead && (
            <div>
              <button
                className=" btn btn-success addButton"
                onClick={() => {
                  history.push("/AddTeam");
                }}
              >
                Add New-Team
              </button>
              <i
                className="bi bi-trash btn btn-success trashcan"
                onClick={() => {
                  history.push("/404");
                }}
              ></i>
              <i
                class="bi bi-pencil-square btn btn-success trashcan"
                onClick={() => {
                  history.push("/404");
                }}
              ></i>
            </div>
          )}
        </div>
      </div>
      {/* check if more children present in the list and call tree function if so  */}
      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={props.node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default TreeNode;
