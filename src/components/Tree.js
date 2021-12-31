
import React from "react";
import './css/tree.css';
import TreeNode from "./TreeNode";
const Tree=(props)=>{
//function takes in data and send to check for more child components to see if more lists to be created

  const getContactid=(value)=>
  {
    console.log(value);
  }

    return (
      <div className="d-tree">
        <ul className="d-flex d-tree-container flex-column">
          {props.data.map((tree) => (
            <TreeNode node={tree}  key={tree.id} 
            idHandler={getContactid} 
            />
          ))}
        </ul>
      </div>
    );

}



export default Tree