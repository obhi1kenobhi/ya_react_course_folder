import { useState } from "react";

export default function Player({ name,symbol }){
    const [ newName, setNewName ] = useState(name);
    const [ isEditing, setIsEditing ] = useState(false);
    return(<li>
        <span className="player">
          {isEditing?<input type="text" placeholder={newName} onChange={(event) => {setNewName(event.target.value)}}></input>:<span className="player-name">{newName}</span>}
          <span className="player-symbol">{symbol}</span>
        </span>
        {/* Toggled the edit functionality in the following button onclick function */}
        <button onClick={()=>{
          // Do not pass the value of "!isEditing" directly, since these state update functions are scheduled by React to run using the current state during scheduling, so the 
          // results might be different than expected and might lead to bigger problems later 
          // Instead pass a function using the current state value as a parameter and do the necessary operations of state change in the function
          // After scheduling the state update, Functions will pull the latest updated state values to use in the function before scheduling and executing the state change
          // So there is a level of guarantee to get the latest state values every time. It is considered a best practice
            setIsEditing(isEditing => !isEditing);

        }}>{isEditing?"Save":"Edit"}</button> 
      </li>);
}